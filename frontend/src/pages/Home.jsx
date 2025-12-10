import { Link } from 'react-router-dom';
import { cats } from '../data/cats';

function Home() {
    return (
      /* One Parent Element ONLY */
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-stone-900">
        Discover the Wild
      </h1>
      
      {/* 
        RESPONSIVE GRIDS:
           grid-cols-1 = 1 column  on mobile  (default)
        md:grid-cols-2 = 2 columns on tablets (medium screens)
        lg:grid-cols-4 = 4 columns on laptops (large screens)
        gap-6 = spacing between the cards
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {cats.map((cat) => (
          <Link to={`/cat/${cat.id}`} key={cat.id} className="group">
            {/* Card Container */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              
              {/* Image Area */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text Area */}
              <div className="p-4">
                <h2 className="text-xl font-bold">{cat.name}</h2>
                <p className="text-stone-500 italic text-sm">{cat.scientificName}</p>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
    );
}

export default Home;
