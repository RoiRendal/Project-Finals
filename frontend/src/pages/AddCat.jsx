// src/pages/AddCat.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCat() {
  const navigate = useNavigate();

  // 1. Form State
  const [formData, setFormData] = useState({
    name: '',
    scientificName: '',
    description: '',
    imageUrl: '', // We'll use a link since we can't upload files
    lifespan: '',
    speed: '',
    weight: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 2. Create the new Cat Object
    const newCat = {
      id: formData.name.toLowerCase().replace(/ /g, '-'), // Generate ID from name
      name: formData.name,
      scientificName: formData.scientificName,
      description: formData.description,
      image: formData.imageUrl || "https://placehold.co/600x400?text=No+Image", // Fallback image
      stats: {
        lifespan: formData.lifespan,
        speed: formData.speed,
        weight: formData.weight
      },
      sections: [], // Empty sections for custom cats to keep it simple
      isCustom: true // useful flag
    };

    // 3. Save to LocalStorage
    // Get existing custom cats or start empty array
    const existingCats = JSON.parse(localStorage.getItem('customCats') || '[]');
    const updatedCats = [...existingCats, newCat];
    
    localStorage.setItem('customCats', JSON.stringify(updatedCats));

    // 4. Redirect home
    alert('Cat added successfully!');
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-stone-800 mb-6">Add a New Big Cat</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 space-y-6">
        
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-bold text-stone-600 mb-2">Name</label>
                <input required name="name" onChange={handleChange} placeholder="e.g. Snow Leopard" className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
            </div>
            <div>
                <label className="block text-sm font-bold text-stone-600 mb-2">Scientific Name</label>
                <input required name="scientificName" onChange={handleChange} placeholder="e.g. Panthera uncia" className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
            </div>
        </div>

        {/* Image URL */}
        <div>
            <label className="block text-sm font-bold text-stone-600 mb-2">Image URL</label>
            <input required name="imageUrl" onChange={handleChange} placeholder="https://..." className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
            <p className="text-xs text-stone-400 mt-1">Paste a direct link to an image (ends in .jpg or .png)</p>
        </div>

        {/* Description */}
        <div>
            <label className="block text-sm font-bold text-stone-600 mb-2">Description</label>
            <textarea required name="description" onChange={handleChange} rows="3" className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"></textarea>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
            <div>
                <label className="block text-sm font-bold text-stone-600 mb-2">Lifespan</label>
                <input required name="lifespan" onChange={handleChange} placeholder="10-12 yrs" className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
            </div>
            <div>
                <label className="block text-sm font-bold text-stone-600 mb-2">Speed</label>
                <input required name="speed" onChange={handleChange} placeholder="60 km/h" className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
            </div>
            <div>
                <label className="block text-sm font-bold text-stone-600 mb-2">Weight</label>
                <input required name="weight" onChange={handleChange} placeholder="50 kg" className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
            </div>
        </div>

        <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-orange-700 transition-colors">
            Add Cat to Wiki
        </button>

      </form>
    </div>
  );
}

export default AddCat;
