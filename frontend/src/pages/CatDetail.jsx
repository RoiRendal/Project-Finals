import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [cat, setCat] = useState(null);

  useEffect(() => {
    const savedCats = JSON.parse(localStorage.getItem('customCats') || '[]');
    const allCats = [...initialCats, ...savedCats];
    const foundCat = allCats.find((c) => c.id === id);
    setCat(foundCat);
  }, [id]);

  const handleDelete = () => {
    const confirmDelete = window.confirm(`WARNING: \n\nAre you sure you want to permanently delete the entry for "${cat.name}"? \n\nThis action cannot be undone.`);
    
    if (confirmDelete) {
        const savedCats = JSON.parse(localStorage.getItem('customCats') || '[]');
        const updatedCats = savedCats.filter((c) => c.id !== id);
        localStorage.setItem('customCats', JSON.stringify(updatedCats));
        alert('ENTRY DELETED.');
        navigate('/');
    }
  };

  if (!cat) return (
    <div className="flex flex-col items-center justify-center h-64 font-mono">
        <div className="text-4xl animate-bounce">💾</div>
        <div className="mt-4 text-xl font-bold">LOADING DATA...</div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto pb-10">
      
      {/* === TOP BAR: NAVIGATION & ACTIONS === */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <Link to="/" className="inline-block bg-white border-2 border-black px-4 py-2 font-mono font-bold text-sm shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            &lt;&lt; RETURN_TO_ROOT
        </Link>

        {cat.isCustom && (
            <div className="flex gap-4">
                <Link 
                    to={`/edit/${cat.id}`}
                    className="bg-blue-300 border-2 border-black px-4 py-2 font-mono font-bold text-sm shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2"
                >
                    <span>✎</span> EDIT_FILE
                </Link>
                <button 
                    onClick={handleDelete}
                    className="bg-red-500 text-white border-2 border-black px-4 py-2 font-mono font-bold text-sm shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2"
                >
                    <span>✖</span> DELETE
                </button>
            </div>
        )}
      </div>

      {/* === MAIN DOSSIER CONTAINER === */}
      <div className="border-4 border-black bg-white p-6 md:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
        
        {/* Decorative 'Paper Clip' effect */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gray-300 border-x-4 border-t-4 border-black hidden md:block"></div>

        {/* HEADER SECTION */}
        <div className="border-b-4 border-black pb-6 mb-8">

            <div className="flex flex-col md:flex-row gap-6 items-start">
                
                {/* TITLE & INFO */}
                <div className="flex-1">
                    <div className="font-mono text-xs font-bold bg-black text-white inline-block px-2 py-1 mb-2">
                        FILE ID: {cat.id.toUpperCase()}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 leading-none">
                        {cat.name}
                    </h1>
                    <p className="text-xl font-serif italic text-gray-600 border-l-4 border-yellow-400 pl-4">
                        {cat.scientificName}
                    </p>
                </div>

                {/* STAMP (Visual decoration) */}
                <div className="border-4 border-red-600 text-red-600 font-black p-2 transform rotate-12 opacity-80 text-center leading-none text-sm uppercase">
                    Classified<br/>Document
                </div>
            </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* === LEFT COLUMN: CONTENT === */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* HERO IMAGE (Polaroid Style) */}
            <div className="bg-gray-100 p-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] rotate-1">
                <div className="border-2 border-black overflow-hidden bg-gray-300">
                     <img src={cat.image} alt={cat.name} className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>

                <div className="mt-2 font-mono text-[10px] md:text-xs text-gray-500 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    
                    <span className="font-bold whitespace-nowrap shrink-0">
                        FIG A. VISUAL RECORD
                    </span>
                    
                    {cat.attribution && (
                        <span className="italic sm:text-right wrap-break-word break-all leading-tight text-gray-400">
                            Source: {cat.attribution}
                        </span>
                    )}
                    
                </div>
            </div>

            {/* OVERVIEW */}
            <div id="overview" className="scroll-mt-32">
                <h3 className="text-2xl font-black uppercase mb-4 bg-yellow-300 border-2 border-black inline-block px-3 py-1 shadow-[4px_4px_0px_0px_#000]">
                    1.0 Overview
                </h3>
                <p className="text-lg leading-relaxed font-serif text-justify">
                    {cat.description}
                </p>
            </div>

            {/* FUN FACTS */}
            {cat.funFacts && (
                <div id="fun-facts" className="bg-yellow-100 p-6 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative scroll-mt-32 transform -rotate-1">
                    {/* Tape visual */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-yellow-200 opacity-50 border-x border-white"></div>
                    
                    <h3 className="font-black text-xl mb-4 underline decoration-2 decoration-black">
                        NOTES & TRIVIA:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 font-mono text-sm md:text-base">
                        {cat.funFacts.map((fact, index) => (
                            <li key={index}>{fact}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* DYNAMIC SECTIONS */}
            {cat.sections && cat.sections.map((section, index) => {
                const sectionId = generateSlug(section.title);
                return (
                    <div key={index} id={sectionId} className="scroll-mt-32">
                        <h3 className="text-2xl font-black uppercase mb-4 bg-white border-2 border-black inline-block px-3 py-1 shadow-[4px_4px_0px_0px_#000]">
                            {index + 2}.0 {section.title}
                        </h3>
                        <div className="space-y-4">
                            {section.content.map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-lg leading-relaxed font-serif text-justify">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                );
            })}
          </div>

          {/* === RIGHT COLUMN: SIDEBAR === */}
          <div className="order-first lg:order-last lg:sticky lg:top-24 space-y-8">
             
             {/* TOC: "INDEX CARD" STYLE */}
             <div className="hidden lg:block bg-white border-2 border-black p-5 shadow-[6px_6px_0px_0px_#000]">
                <h3 className="font-mono font-bold border-b-2 border-black pb-2 mb-3 text-sm bg-gray-100 px-1">
                    {'>'} INDEX_DIRECTORY
                </h3>
                <nav className="space-y-1 font-mono text-sm">
                    <a href="#overview" className="block p-1 hover:bg-black hover:text-white transition-colors">
                        [1.0] Overview
                    </a>
                    {cat.funFacts && (
                        <a href="#fun-facts" className="block p-1 hover:bg-black hover:text-white transition-colors">
                            [REF] Notes/Trivia
                        </a>
                    )}
                    {cat.sections && cat.sections.map((section, index) => (
                        <a 
                            key={index} 
                            href={`#${generateSlug(section.title)}`}
                            className="block p-1 hover:bg-black hover:text-white transition-colors truncate"
                        >
                            [{index + 2}.0] {section.title}
                        </a>
                    ))}
                </nav>
             </div>

             {/* STATS: "DATA SHEET" STYLE */}
             <div className="bg-stone-100 border-2 border-black p-0 shadow-[6px_6px_0px_0px_#000]">
                <div className="bg-black text-white p-2 font-mono font-bold text-center border-b-2 border-black">
                    VITAL_STATISTICS
                </div>
                <div className="p-4">
                    <ul className="space-y-0 text-sm font-mono">
                        {Object.entries(cat.stats).map(([key, value], index) => (
                            <li key={key} className={`flex justify-between py-2 border-b border-gray-400 ${index === Object.keys(cat.stats).length - 1 ? 'border-b-0' : ''}`}>
                                <span className="font-bold uppercase">{formatLabel(key)}:</span>
                                <span className="text-right text-blue-800">{value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Barcode visual (Fake) */}
                <div className="h-8 bg-white border-t-2 border-black flex items-center justify-center overflow-hidden">
                     <div className="text-[10px] tracking-[3px] font-sans">|| | ||| || ||| || |||</div>
                </div>
             </div>

          </div>

        </div>
        
        {/* FOOTER OF DOSSIER */}
        <div className="mt-12 pt-6 border-t-4 border-black font-mono text-gray-500 uppercase">
            <Link to="/" className="font-mono font-bold text-lg md:text-sm hover:underline decoration-2 decoration-blue-600">
                &lt;&lt; RETURN_HOME
            </Link>
            <div className="text-xs text-center">
                /// END OF FILE {cat.id} /// AUTHORIZED PERSONNEL ONLY ///
            </div>
        </div>

      </div>
    </div>
  );
}

export default CatDetail;
