import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cats as initialCats } from '../data/cats';

function Home() {
  const [allCats, setAllCats] = useState(initialCats);

  useEffect(() => {
    const savedCats = JSON.parse(localStorage.getItem('customCats') || '[]');
    if (savedCats.length > 0) {
      setAllCats([...initialCats, ...savedCats]);
    }
  }, []);

  return (
    <div className="space-y-12 pb-10">
      
      {/* 
        === HERO SECTION: "THE BILLBOARD" ===
      */}
      <div className="border-4 border-black bg-cyan-300 p-6 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        
        {/* Decorative 'X' pattern in background */}
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <div className="text-9xl font-black font-mono leading-none">
                X_X<br/>0_0<br/>^_^
            </div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left space-y-4">
                <div className="inline-block bg-yellow-300 border-2 border-black px-2 py-1 font-mono text-xs font-bold mb-2 transform -rotate-2">
                    /// EST. 2025 /// FINAL PROJECT
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none drop-shadow-[4px_4px_0_#FFF]">
                    The Big Cat <br/>
                    <span className="text-pink-600">Database</span>
                </h1>
                <p className="text-lg md:text-xl font-serif font-bold bg-white inline-block border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    Welcome to the ultimate archive of wild felines.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                    <Link to="/quiz" className="bg-pink-500 text-white border-2 border-black px-6 py-3 font-mono font-bold hover:bg-pink-600 hover:shadow-[4px_4px_0px_0px_#000] transition-all uppercase">
                        [Start Quiz]
                    </Link>
                    <Link to="/add" className="bg-white text-black border-2 border-black px-6 py-3 font-mono font-bold hover:bg-gray-100 hover:shadow-[4px_4px_0px_0px_#000] transition-all uppercase">
                        [+ Add Entry]
                    </Link>
                </div>
            </div>

            {/* Retro Image Frame */}
            <div className="w-full md:w-1/3">
                <div className="bg-white border-4 border-black p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <img 
                        src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=600&auto=format&fit=crop" 
                        alt="Lion Roar" 
                        className="w-full h-full object-cover border-2 border-black grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="text-center font-mono text-xs font-bold mt-2 bg-black text-white py-1">
                        IMG_REF: LION_01.JPG
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* 
        === THE GRID === 
      */}
      <div>
        <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-black text-black bg-yellow-300 border-2 border-black px-4 py-1 shadow-[4px_4px_0px_0px_#000] inline-block uppercase transform -rotate-1">
                Directory Listing
            </h2>
            <div className="h-1 bg-black flex-1"></div>
            <div className="h-4 w-4 bg-black"></div>
            <div className="h-4 w-4 bg-black"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allCats.map((cat) => (
            <Link to={`/cat/${cat.id}`} key={cat.id} className="group block h-full">
                {/* 
                   === THE RETRO CARD ===
                */}
                <div className="bg-white border-4 border-black h-full flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200">
                
                {/* Header Bar of Card */}
                <div className="bg-black text-white px-3 py-1 flex justify-between items-center border-b-4 border-black">
                    <span className="font-mono text-xs uppercase truncate">ID: {cat.id}</span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500 border border-white"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500 border border-white"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500 border border-white"></div>
                    </div>
                </div>

                {/* Image Area */}
                <div className="aspect-[4/3] overflow-hidden border-b-4 border-black relative bg-gray-200">
                    <img 
                        src={cat.image} 
                        alt={cat.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Retro "New" Badge */}
                    {cat.isCustom && (
                        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 border-l-2 border-b-2 border-black animate-pulse">
                            USER_UPLOAD
                        </div>
                    )}
                </div>

                {/* Content Area */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-black mb-1 font-serif group-hover:underline decoration-2 decoration-pink-500 underline-offset-2 uppercase">
                            {cat.name}
                        </h2>
                        <p className="text-gray-500 text-xs font-mono mb-4 border-b-2 border-gray-200 pb-2">
                            LATIN: {cat.scientificName}
                        </p>
                        <p className="text-black text-sm font-serif line-clamp-3 leading-tight">
                            {cat.description}
                        </p>
                    </div>
                    
                    {/* Stats Table Look */}
                    <div className="mt-4 pt-2 border-t-2 border-dashed border-black">
                        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                            <div className="bg-gray-100 p-1 border border-black text-center">
                                <span className="block font-bold">SPD</span>
                                {cat.stats.speed}
                            </div>
                            <div className="bg-gray-100 p-1 border border-black text-center">
                                <span className="block font-bold">WGT</span>
                                {cat.stats.weight}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </Link>
            ))}
        </div>
      </div>

    </div>
  );
}

export default Home;
