import { Link } from "react-router-dom";

function Navbar() {
    return (
      /* sticky top-0 z-10 so the navbar stays with us even when scrolling */
      <nav className="p-4 bg-white shadow-sm sticky top-0 z-10 border-b border-stone-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">

          {/* Making the "logo" clickable! */}
          <Link to="/" className="font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
            🦁 BigCats<span className="text-orange-600">Wiki</span>
          </Link>

          <div className="space-x-4">
            <Link 
              to="/quiz" 
              className="text-sm font-bold text-orange-600 border border-orange-600 px-4 py-2 rounded-full hover:bg-orange-600 hover:text-white transition-colors"
            >
              Take Quiz
            </Link>

            <Link 
              to="/add" 
              className="text-sm font-bold text-stone-600 hover:text-orange-600 transition-colors"
            >
              + Add Cat
            </Link>
          </div>
          
        </div>
      </nav>
    );
}

export default Navbar;