// src/pages/CatDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { cats } from '../data/cats';

// HELPER: Formats stats keys (biteForce -> Bite Force)
const formatLabel = (key) => {
    const result = key.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
};

// HELPER: Generates URL-safe IDs (Hunting and Diet -> hunting-and-diet)
const generateSlug = (text) => {
    return text
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
};

function CatDetail() {
  const { id } = useParams();
  const cat = cats.find((c) => c.id === id);

  if (!cat) {
    return <div className="text-center text-2xl mt-10">Cat not found! 😿</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-block mb-6 text-orange-600 hover:underline font-medium">
        &larr; Back to Gallery
      </Link>

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
          
          {/* LEFT COLUMN: Main Content */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Overview Section */}
            <div id="overview" className="scroll-mt-28">
                <h3 className="text-2xl font-bold text-stone-800 mb-3">Overview</h3>
                <p className="text-stone-600 leading-relaxed text-lg">
                    {cat.description}
                </p>
            </div>

            {/* Dynamic Sections */}
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

            {/* Fun Facts */}
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

          {/* 
             RIGHT COLUMN: Sidebar 
             Contains BOTH the TOC and the Stats.
             md:sticky ensures the whole sidebar floats with you.
          */}
          <div className="order-first md:order-last md:sticky md:top-24 space-y-6">
             
             {/* 
                COMPONENT 1: TABLE OF CONTENTS 
                Hidden on mobile (hidden) -> Visible on Desktop (md:block)
                This keeps mobile clean and prioritizes Stats.
             */}
             <div className="hidden md:block bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <h3 className="font-bold text-stone-800 mb-4 border-b border-stone-100 pb-2">
                    Table of Contents
                </h3>
                <nav className="space-y-2">
                    <a href="#overview" className="block text-stone-600 hover:text-orange-600 hover:translate-x-1 transition-all text-sm">
                        Overview
                    </a>
                    
                    {/* Dynamic Links based on Data */}
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

             {/* COMPONENT 2: VITAL STATS */}
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