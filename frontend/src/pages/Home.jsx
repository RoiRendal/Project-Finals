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
    <div className="max-w-6xl mx-auto space-y-12 pb-10">
      
      {/* HERO SECTION */}
      <div className="bg-stone-900 rounded-3xl overflow-hidden relative shadow-xl mx-4 md:mx-0">
        {/* Background Image */}
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2000&auto=format&fit=crop" 
                alt="Lion Background" 
                className="w-full h-full object-cover opacity-40"
            />
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-8 md:p-16 text-center text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Discover the <span className="text-orange-500">Wild</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto">
                Explore this mini encyclopedia of the world's most majestic big cats. 
            </p>
            <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto">
                Learn about their habitats, behaviors, and some niche facts.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
                <Link to="/quiz" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-bold transition-all">
                    Test Your Knowledge
                </Link>
                <Link to="/add" className="bg-white hover:bg-stone-100 text-stone-900 px-6 py-3 rounded-full font-bold transition-all">
                    Contribute
                </Link>
            </div>
        </div>
      </div>

      {/* GRID SECTION */}
      <div className="px-4 md:px-0">
        <h2 className="text-3xl font-bold text-stone-800 mb-6 border-l-4 border-orange-500 pl-4">
            Meet the Cats
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allCats.map((cat) => (
            <Link to={`/cat/${cat.id}`} key={cat.id} className="group block h-full">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                
                {/* Image Aspect Ratio */}
                <div className="aspect-4/3 overflow-hidden bg-stone-100 relative">
                    <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Badge for Custom Cats */}
                    {cat.isCustom && (
                        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                            Community
                        </span>
                    )}
                </div>

                <div className="p-5 flex-1 flex flex-col">
                    <div className="flex-1">
                        <h2 className="text-xl font-bold text-stone-800 mb-1 group-hover:text-orange-600 transition-colors">
                            {cat.name}
                        </h2>
                        <p className="text-stone-500 text-xs italic mb-3 font-serif">
                            {cat.scientificName}
                        </p>
                        {/* Truncate description to 2 lines */}
                        <p className="text-stone-600 text-sm line-clamp-2">
                            {cat.description}
                        </p>
                    </div>
                    
                    {/* Mini Stats Row */}
                    <div className="mt-4 pt-4 border-t border-stone-100 flex justify-between text-xs text-stone-400 font-medium uppercase tracking-wider">
                        <span>{cat.stats.speed}</span>
                        <span>{cat.stats.weight}</span>
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
