import { Link } from "react-router-dom";

function Navbar() {
    return (
      /* sticky top-0 z-10 so the navbar stays with us even when scrolling */
      <nav className="p-4 bg-white shadow-sm sticky top-0 z-10 border-b border-stone-200">

        {/* Making the "logo" clickable! */}
        <Link to="/" className="font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
          🦁 BigCats<span className="text-orange-600">Wiki</span>
        </Link>

        <Link>{/* We can just keep adding more and more and more...` */}</Link>

      </nav>
    );
}

export default Navbar;