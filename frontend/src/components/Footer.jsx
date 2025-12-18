import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-200 border-t-4 border-black text-black py-10 mt-auto font-mono">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / About Link */}
        <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            <Link to="/about" className="block h-full">
                <h3 className="text-xl font-bold mb-4 uppercase underline decoration-2 decoration-black underline-offset-4 cursor-pointer hover:text-blue-700">
                    System Info (?)
                </h3>
                <p className="text-sm leading-relaxed cursor-pointer">
                    Click here to view system documentation, mission statement, and developer credits.
                </p>
            </Link>
        </div>

        {/* Navigation & Contact */}
        <div>
            <h4 className="font-bold mb-4 uppercase bg-black text-white inline-block px-2">Directory</h4>
            <ul className="space-y-2 text-sm">
                <li>
                    <Link to="/" className="hover:bg-blue-700 hover:text-white px-1 transition-colors">
                        [Home]
                    </Link>
                </li>
                <li>
                    <Link to="/quiz" className="hover:bg-blue-700 hover:text-white px-1 transition-colors">
                        [Take Quiz]
                    </Link>
                </li>
                <li>
                    <Link to="/add" className="hover:bg-blue-700 hover:text-white px-1 transition-colors">
                        [Add New Entry]
                    </Link>
                </li>
                {/* CONTACT ENTRY */}
                <li className="pt-2 border-t border-gray-400 mt-2">
                    <a href="mailto:rendalroi@gmail.com" className="hover:bg-red-600 hover:text-white px-1 transition-colors font-bold">
                        ✉ [Contact Admin]
                    </a>
                </li>
            </ul>
        </div>

        {/* Credits */}
        <div className="text-right flex flex-col justify-end">
            <p className="text-xs font-bold">
                IT314 FINAL PROJECT
            </p>
            <p className="text-xs mt-1">
                &copy; {currentYear} Roi Rendal
            </p>
            <div className="mt-4 flex justify-end gap-2">
                <div className="border border-black px-2 py-1 text-[10px] bg-yellow-200">
                    HTML 5
                </div>
                <div className="border border-black px-2 py-1 text-[10px] bg-blue-200">
                    CSS 3
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
