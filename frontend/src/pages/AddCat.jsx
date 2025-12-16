// src/pages/AddCat.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AddCat() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  // Toggle state: 'url' or 'upload'
  const [imageMode, setImageMode] = useState('url');

  const [formData, setFormData] = useState({
    name: '',
    scientificName: '',
    description: '',
    imageUrl: '', // This will store either the http:// link OR the data:image string
    lifespan: '',
    speed: '',
    weight: '',
    sections: [{ title: '', content: '' }] 
  });

  useEffect(() => {
    if (isEditMode) {
      const savedCats = JSON.parse(localStorage.getItem('customCats') || '[]');
      const catToEdit = savedCats.find(c => c.id === id);
      
      if (catToEdit) {
        setFormData({
            name: catToEdit.name,
            scientificName: catToEdit.scientificName,
            description: catToEdit.description,
            imageUrl: catToEdit.image,
            lifespan: catToEdit.stats.lifespan,
            speed: catToEdit.stats.speed,
            weight: catToEdit.stats.weight,
            sections: catToEdit.sections.map(s => ({
                title: s.title,
                content: s.content.join('\n\n') 
            }))
        });
        // Logic: If the saved image starts with 'data:', it's an upload. Otherwise it's a URL.
        if (catToEdit.image.startsWith('data:')) {
            setImageMode('upload');
        }
      }
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- NEW: FILE UPLOAD LOGIC ---
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        // LIMIT CHECK: 2MB limit (approx) to be safe with LocalStorage
        if (file.size > 2000000) {
            alert("File is too large! Please choose an image under 2MB.");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            // reader.result contains the Base64 string
            setFormData({ ...formData, imageUrl: reader.result });
        };
        reader.readAsDataURL(file);
    }
  };

  // --- DYNAMIC SECTIONS LOGIC (Same as before) ---
  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...formData.sections];
    updatedSections[index][field] = value;
    setFormData({ ...formData, sections: updatedSections });
  };

  const addSection = () => {
    setFormData({ ...formData, sections: [...formData.sections, { title: '', content: '' }] });
  };

  const removeSection = (index) => {
    const updatedSections = formData.sections.filter((_, i) => i !== index);
    setFormData({ ...formData, sections: updatedSections });
  };

  // --- SUBMIT LOGIC ---
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.imageUrl) {
        alert("Please provide an image URL or upload a file.");
        return;
    }

    const processedSections = formData.sections.map(s => ({
        title: s.title,
        content: s.content.split('\n').filter(p => p.trim() !== '')
    })).filter(s => s.title.trim() !== '');

    const catObject = {
      id: isEditMode ? id : formData.name.toLowerCase().replace(/ /g, '-'),
      name: formData.name,
      scientificName: formData.scientificName,
      description: formData.description,
      image: formData.imageUrl, // Stores the URL or Base64 string
      stats: {
        lifespan: formData.lifespan,
        speed: formData.speed,
        weight: formData.weight
      },
      sections: processedSections,
      isCustom: true
    };

    const savedCats = JSON.parse(localStorage.getItem('customCats') || '[]');
    let newCatList;
    if (isEditMode) {
        newCatList = savedCats.map(c => c.id === id ? catObject : c);
    } else {
        newCatList = [...savedCats, catObject];
    }
    
    try {
        localStorage.setItem('customCats', JSON.stringify(newCatList));
        alert(isEditMode ? 'Cat updated!' : 'Cat added!');
        navigate(`/cat/${catObject.id}`);
    } catch (error) {
        // Catches "QuotaExceededError" if LocalStorage is full
        alert("Storage full! The image might be too large. Try a smaller image.");
        console.error(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto pb-10">
      <h1 className="text-3xl font-bold text-stone-800 mb-6">
        {isEditMode ? `Edit ${formData.name}` : 'Add a New Big Cat'}
      </h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 space-y-8">
        
        {/* SECTION 1: BASIC INFO */}
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-orange-600 border-b border-orange-100 pb-2">Basic Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-stone-600 mb-2">Name</label>
                    <input required name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-stone-600 mb-2">Scientific Name</label>
                    <input required name="scientificName" value={formData.scientificName} onChange={handleChange} className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                </div>
            </div>

            {/* --- NEW: IMAGE HANDLING --- */}
            <div>
                <label className="block text-sm font-bold text-stone-600 mb-2">Cat Image</label>
                
                {/* 1. Toggle Tabs */}
                <div className="flex gap-4 mb-3">
                    <button 
                        type="button" 
                        onClick={() => setImageMode('url')}
                        className={`text-sm font-bold px-4 py-2 rounded-full transition-colors ${imageMode === 'url' ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'}`}
                    >
                        🔗 Image URL
                    </button>
                    <button 
                        type="button" 
                        onClick={() => setImageMode('upload')}
                        className={`text-sm font-bold px-4 py-2 rounded-full transition-colors ${imageMode === 'upload' ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'}`}
                    >
                        📂 Upload File
                    </button>
                </div>

                {/* 2. Inputs based on Toggle */}
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                    {imageMode === 'url' ? (
                        <input 
                            name="imageUrl" 
                            value={formData.imageUrl} 
                            onChange={handleChange} 
                            placeholder="https://example.com/image.jpg" 
                            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none bg-white" 
                        />
                    ) : (
                        <div>
                            <input 
                                type="file" 
                                accept="image/*"
                                onChange={handleFileChange} 
                                className="w-full text-sm text-stone-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200" 
                            />
                            <p className="text-xs text-stone-400 mt-2">Max size: 2MB (Storage limit)</p>
                        </div>
                    )}

                    {/* 3. Image Preview */}
                    {formData.imageUrl && (
                        <div className="mt-4">
                            <p className="text-xs uppercase font-bold text-stone-400 mb-2">Preview</p>
                            <img 
                                src={formData.imageUrl} 
                                alt="Preview" 
                                className="h-40 w-full object-cover rounded-lg border border-stone-300" 
                            />
                        </div>
                    )}
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-stone-600 mb-2">Description (Overview)</label>
                <textarea required name="description" value={formData.description} onChange={handleChange} rows="3" className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"></textarea>
            </div>
        </div>

        {/* SECTION 2: STATS */}
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-orange-600 border-b border-orange-100 pb-2">Vital Stats</h2>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-bold text-stone-600 mb-2">Lifespan</label>
                    <input required name="lifespan" value={formData.lifespan} onChange={handleChange} className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-stone-600 mb-2">Speed</label>
                    <input required name="speed" value={formData.speed} onChange={handleChange} className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-stone-600 mb-2">Weight</label>
                    <input required name="weight" value={formData.weight} onChange={handleChange} className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                </div>
            </div>
        </div>

        {/* SECTION 3: DYNAMIC SECTIONS */}
        <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-orange-100 pb-2">
                <h2 className="text-xl font-bold text-orange-600">Custom Sections</h2>
                <button type="button" onClick={addSection} className="text-sm font-bold text-orange-600 hover:bg-orange-50 px-3 py-1 rounded-lg transition-colors">
                    + Add Section
                </button>
            </div>
            
            <div className="space-y-6">
                {formData.sections.map((section, index) => (
                    <div key={index} className="bg-stone-50 p-4 rounded-xl border border-stone-200 relative">
                        {formData.sections.length > 1 && (
                            <button type="button" onClick={() => removeSection(index)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm font-bold px-2">✕ Remove</button>
                        )}
                        <div className="space-y-3">
                            <div>
                                <label className="block text-xs uppercase font-bold text-stone-400 mb-1">Section Title</label>
                                <input value={section.title} onChange={(e) => handleSectionChange(index, 'title', e.target.value)} placeholder="e.g. Hunting Habits" className="w-full p-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase font-bold text-stone-400 mb-1">Content (Paragraphs)</label>
                                <textarea value={section.content} onChange={(e) => handleSectionChange(index, 'content', e.target.value)} rows="4" placeholder="Type here. Press Enter for new paragraphs." className="w-full p-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"></textarea>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <button type="submit" className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl hover:bg-orange-700 transition-colors shadow-md text-lg">
            {isEditMode ? 'Update Cat' : 'Save New Cat'}
        </button>

      </form>
    </div>
  );
}

export default AddCat;
