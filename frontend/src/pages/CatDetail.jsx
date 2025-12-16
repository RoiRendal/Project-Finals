// src/pages/CatDetail.jsx
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { cats as initialCats } from '../data/cats';

const formatLabel = (key) => {
    const result = key.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
};

const generateSlug = (text) => {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};

function CatDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook for redirection
  const [cat, setCat] = useState(null);

  useEffect(() => {
    const savedCats = JSON.parse(localStorage.getItem('customCats') || '[]');
    const allCats = [...initialCats, ...savedCats];
    const foundCat = allCats.find((c) => c.id === id);
    setCat(foundCat);
  }, [id]);

  // DELETE FEATURE: The Logic
  const handleDelete = () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${cat.name}? This cannot be undone.`);
    
    if (confirmDelete) {
        // 1. Get current list
        const savedCats = JSON.parse(localStorage.getItem('customCats') || '[]');
        
        // 2. Filter out THIS cat
        const updatedCats = savedCats.filter((c) => c.id !== id);
        
        // 3. Save back to storage
        localStorage.setItem('customCats', JSON.stringify(updatedCats));
        
        // 4. Redirect home
        alert('Cat deleted successfully.');
        navigate('/');
    }
  };

  if (!cat) return <div className="text-center text-2xl mt-10 p-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Header Area: Back Link + Delete Button */}
      <div className="flex justify-between items-center mb-6">
        <Link to="/" className="text-orange-600 hover:underline font-medium">
            &larr; Back to Gallery
        </Link>

        {/* DELETE FEATURE: The Button 
            Only show this if 'cat.isCustom' is true.
        */}
        {cat.isCustom && (
            <button 
                onClick={handleDelete}
                className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-bold border border-red-200 hover:bg-red-600 hover:text-white transition-all"
            >
                🗑 Delete Cat
            </button>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-lg">
        
        {/* Hero Image */}
        <div className="h-64 md:h-96 w-full relative rounded-t-2xl overflow-hidden">
            <img src={cat.image} alt={cat.name} className="w-full h-full object-cover"/>
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-6 pt-20">
                <h1 className="text-4xl md:text-5xl font-bold text-white">{cat.name}</h1>
                <p className="text-stone-200 italic text-xl">{cat.scientificName}</p>
            </div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            
            <div id="overview" className="scroll-mt-28">
                <h3 className="text-2xl font-bold text-stone-800 mb-3">Overview</h3>
                <p className="text-stone-600 leading-relaxed text-lg">
                    {cat.description}
                </p>
            </div>

            {cat.sections && cat.sections.map((section, index) => {
                const sectionId = generateSlug(section.title);
                return (
                    <div key={index} id={sectionId} className="scroll-mt-28">
                        <h3 className="text-xl font-bold text-stone-800 mb-3 pb-2 border-b border-stone-200">
                            {section.title}
                        </h3>
                        <div className="space-y-4">
                            {section.content.map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-stone-600 leading-relaxed text-lg">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                );
            })}

            {cat.funFacts && (
                <div id="fun-facts" className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 mt-6 scroll-mt-28">
                    <h3 className="font-bold text-orange-800 mb-3 text-lg">Did You Know?</h3>
                    <ul className="list-disc list-inside space-y-2 text-stone-700">
                        {cat.funFacts.map((fact, index) => (
                            <li key={index}>{fact}</li>
                        ))}
                    </ul>
                </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="order-first md:order-last md:sticky md:top-24 space-y-6">
             
             {/* TOC (Hidden on custom cats usually as they don't have sections, but safe to keep) */}
             <div className="hidden md:block bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <h3 className="font-bold text-stone-800 mb-4 border-b border-stone-100 pb-2">
                    Table of Contents
                </h3>
                <nav className="space-y-2">
                    <a href="#overview" className="block text-stone-600 hover:text-orange-600 hover:translate-x-1 transition-all text-sm">
                        Overview
                    </a>
                    {cat.sections && cat.sections.map((section, index) => (
                        <a 
                            key={index} 
                            href={`#${generateSlug(section.title)}`}
                            className="block text-stone-600 hover:text-orange-600 hover:translate-x-1 transition-all text-sm"
                        >
                            {section.title}
                        </a>
                    ))}
                    {cat.funFacts && (
                        <a href="#fun-facts" className="block text-stone-600 hover:text-orange-600 hover:translate-x-1 transition-all text-sm">
                            Did You Know?
                        </a>
                    )}
                </nav>
             </div>

             <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                <h3 className="font-bold text-stone-400 uppercase tracking-widest text-sm mb-4">
                    Vital Stats
                </h3>
                <ul className="space-y-3">
                    {Object.entries(cat.stats).map(([key, value]) => (
                        <li key={key} className="flex justify-between border-b border-stone-200 pb-2">
                            <span className="text-stone-600 text-sm">{formatLabel(key)}</span>
                            <span className="font-semibold text-stone-900 text-right text-sm">{value}</span>
                        </li>
                    ))}
                </ul>
             </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default CatDetail;
