import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AddCat() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [imageMode, setImageMode] = useState('url');

  const [formData, setFormData] = useState({
    name: '',
    scientificName: '',
    description: '',
    imageUrl: '',
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
        if (catToEdit.image.startsWith('data:')) {
            setImageMode('upload');
        }
      }
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        if (file.size > 2000000) {
            alert("ERROR: FILE_SIZE_EXCEEDED (LIMIT: 2MB)");
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({ ...formData, imageUrl: reader.result });
        };
        reader.readAsDataURL(file);
    }
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.imageUrl) {
        alert("ERROR: MISSING_IMAGE_SOURCE");
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
      image: formData.imageUrl,
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
        alert(isEditMode ? 'DATABASE UPDATED.' : 'NEW ENTRY LOGGED.');
        navigate(`/cat/${catObject.id}`);
    } catch (error) {
        alert("CRITICAL ERROR: STORAGE_QUOTA_EXCEEDED");
    }
  };

  const inputClass = "w-full p-2 md:p-3 border-2 border-black font-mono text-sm md:text-base focus:bg-yellow-100 focus:outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] transition-all rounded-none appearance-none";
  const labelClass = "block text-[10px] md:text-xs font-bold text-white bg-black inline-block px-2 py-1 mb-1 font-mono uppercase tracking-wider";

  return (
    <div className="max-w-4xl mx-auto pb-10 px-4 md:px-0">
      
      {/* HEADER */}
      <div className="mb-8 border-l-4 md:border-l-8 border-black pl-4 md:pl-6">
        {/* UPDATED: Fluid text size */}
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            {isEditMode ? 'System Update' : 'New Entry'}
        </h1>
        <p className="font-mono text-xs md:text-sm mt-2 text-gray-600">
            // TERMINAL_ID: USER_GUEST // MODE: WRITE
        </p>
      </div>
      
      {/* FORM CONTAINER */}
      <form onSubmit={handleSubmit} className="border-4 border-black bg-white p-4 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] space-y-8 md:space-y-10 relative">
        
        {/* Screw Decorations */}
        <div className="hidden md:flex absolute top-2 left-2 w-3 h-3 border border-black rounded-full items-center justify-center bg-gray-200"><div className="w-full h-[1px] bg-black rotate-45"></div></div>
        <div className="hidden md:flex absolute top-2 right-2 w-3 h-3 border border-black rounded-full items-center justify-center bg-gray-200"><div className="w-full h-[1px] bg-black rotate-45"></div></div>
        <div className="hidden md:flex absolute bottom-2 left-2 w-3 h-3 border border-black rounded-full items-center justify-center bg-gray-200"><div className="w-full h-[1px] bg-black rotate-45"></div></div>
        <div className="hidden md:flex absolute bottom-2 right-2 w-3 h-3 border border-black rounded-full items-center justify-center bg-gray-200"><div className="w-full h-[1px] bg-black rotate-45"></div></div>

        {/* SECTION 1: IDENTIFICATION */}
        <div className="space-y-6">
            <h2 className="text-lg md:text-xl font-black border-b-4 border-black pb-2 uppercase flex justify-between items-end">
                <span>1.0 Identification</span>
                <span className="text-[10px] bg-black text-white px-2 py-1 font-mono">REQ*</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                    <label className={labelClass}>Subject Name</label>
                    <input required name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="e.g. SNOW LEOPARD" />
                </div>
                <div>
                    <label className={labelClass}>Scientific Designation</label>
                    <input required name="scientificName" value={formData.scientificName} onChange={handleChange} className={inputClass} placeholder="e.g. PANTHERA UNCIA" />
                </div>
            </div>
        </div>

        {/* SECTION 2: VISUAL DATA */}
        <div className="space-y-6">
            <h2 className="text-lg md:text-xl font-black border-b-4 border-black pb-2 uppercase">2.0 Visual Record</h2>
            
            <div className="p-3 md:p-4 bg-gray-100 border-2 border-black border-dashed">
                {/* Custom Tabs: Flex wrap allows graceful breaking on tiny screens */}
                <div className="flex flex-wrap gap-0 mb-4 border-b-2 border-black">
                    <button 
                        type="button" 
                        onClick={() => setImageMode('url')}
                        className={`font-mono font-bold text-xs md:text-sm px-3 md:px-4 py-2 border-t-2 border-x-2 border-black mr-[-2px] ${imageMode === 'url' ? 'bg-black text-white relative z-10' : 'bg-white text-gray-400 hover:bg-gray-200'}`}
                    >
                        LINK_SOURCE
                    </button>
                    <button 
                        type="button" 
                        onClick={() => setImageMode('upload')}
                        className={`font-mono font-bold text-xs md:text-sm px-3 md:px-4 py-2 border-t-2 border-x-2 border-black ${imageMode === 'upload' ? 'bg-black text-white relative z-10' : 'bg-white text-gray-400 hover:bg-gray-200'}`}
                    >
                        LOCAL_UPLOAD
                    </button>
                </div>

                <div className="space-y-4">
                    {imageMode === 'url' ? (
                        <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="HTTP://..." className={inputClass} />
                    ) : (
                        <input type="file" accept="image/*" onChange={handleFileChange} className="block w-full text-xs md:text-sm font-mono text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-2 file:border-black file:text-xs file:font-bold file:bg-yellow-300 file:text-black hover:file:bg-yellow-400" />
                    )}
                    
                    {formData.imageUrl && (
                        <div className="border-2 border-black p-2 bg-white inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] max-w-full">
                            <p className="font-mono text-xs font-bold mb-1">PREVIEW_RENDER:</p>
                            <img src={formData.imageUrl} alt="Preview" className="h-24 md:h-32 w-auto object-cover border border-black" />
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* SECTION 3: SPECIFICATIONS */}
        <div className="space-y-6">
            <h2 className="text-lg md:text-xl font-black border-b-4 border-black pb-2 uppercase">3.0 Specifications</h2>
            
            <div>
                <label className={labelClass}>Overview / Abstract</label>
                <textarea required name="description" value={formData.description} onChange={handleChange} rows="3" className={inputClass}></textarea>
            </div>

            {/* Grid 1 -> 3 cols */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className={labelClass}>Lifespan</label>
                    <input required name="lifespan" value={formData.lifespan} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                    <label className={labelClass}>Max Speed</label>
                    <input required name="speed" value={formData.speed} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                    <label className={labelClass}>Mass/Weight</label>
                    <input required name="weight" value={formData.weight} onChange={handleChange} className={inputClass} />
                </div>
            </div>
        </div>

        {/* SECTION 4: EXTENDED DATA */}
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b-4 border-black pb-2 gap-2 sm:gap-0">
                <h2 className="text-lg md:text-xl font-black uppercase">4.0 Extended Data</h2>
                <button type="button" onClick={addSection} className="text-xs md:text-sm font-mono font-bold bg-yellow-300 border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_#000] hover:translate-y-[1px] hover:shadow-none transition-all w-full sm:w-auto">
                    + APPEND_SECTION
                </button>
            </div>
            
            <div className="space-y-6">
                {formData.sections.map((section, index) => (
                    <div key={index} className="bg-gray-50 p-3 md:p-4 border-2 border-black relative">
                        {formData.sections.length > 1 && (
                            <button type="button" onClick={() => removeSection(index)} className="absolute top-2 right-2 bg-red-500 text-white font-mono text-[10px] md:text-xs border border-black px-2 hover:bg-red-600">
                                DELETE
                            </button>
                        )}
                        <div className="space-y-4 pt-6 md:pt-0">
                            <div>
                                <label className="font-mono text-[10px] md:text-xs font-bold text-gray-500 uppercase">Block Title</label>
                                <input value={section.title} onChange={(e) => handleSectionChange(index, 'title', e.target.value)} className={inputClass} placeholder="HEADER..." />
                            </div>
                            <div>
                                <label className="font-mono text-[10px] md:text-xs font-bold text-gray-500 uppercase">Block Data</label>
                                <textarea value={section.content} onChange={(e) => handleSectionChange(index, 'content', e.target.value)} rows="3" className={inputClass} placeholder="CONTENT..."></textarea>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* SUBMIT */}
        <div className="pt-6 border-t-4 border-black">
            <button type="submit" className="w-full bg-green-500 text-black border-2 border-black py-3 md:py-4 font-mono font-black text-lg md:text-xl uppercase tracking-widest shadow-[6px_6px_0px_0px_#000] md:shadow-[8px_8px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-green-400 transition-all flex items-center justify-center gap-2">
                {isEditMode ? 'OVERWRITE_DATA' : 'INITIATE_UPLOAD'}
            </button>
        </div>

      </form>
    </div>
  );
}

export default AddCat;
