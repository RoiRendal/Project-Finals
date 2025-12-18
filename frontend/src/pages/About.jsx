import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="max-w-4xl mx-auto pb-10">
      
      {/* HEADER */}
      <div className="mb-8 border-l-8 border-black pl-6">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            System_Info
        </h1>
        <p className="font-mono text-sm mt-2 text-gray-600">
            // FILE: README.TXT // ACCESS: PUBLIC
        </p>
      </div>

      <div className="border-4 border-black bg-white p-6 md:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative space-y-10">
        
        {/* SECTION 1: MISSION */}
        <div className="space-y-4">
            <h2 className="text-xl font-black bg-black text-white inline-block px-3 py-1 uppercase transform -rotate-1">
                1.0 Mission Statement
            </h2>
            <div className="border-2 border-black p-6 bg-yellow-50 font-serif text-lg leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                <p>
                    <span className="font-bold text-2xl float-left mr-2 mt-[-10px]">T</span>
                    he Big Cat Database is a static digital archive dedicated to the preservation and education of the world's most majestic felines. 
                    Designed with a "Brutalist / Web 1.0" philosophy, this system prioritizes raw data density and high-contrast accessibility over modern minimalist trends.
                </p>
                <p className="mt-4 font-mono text-xs text-gray-500 border-t border-black pt-2">
                    * OPTIMIZED FOR NETSCAPE NAVIGATOR 4.0 AND HIGHER.
                </p>
            </div>
        </div>

        {/* SECTION 2: TECH STACK (Grid of boxes) */}
        <div>
            <h2 className="text-xl font-black border-b-4 border-black pb-2 uppercase mb-6 flex justify-between items-end">
                <span>2.0 Technical Specifications</span>
                <span className="font-mono text-xs">V.1.0.0</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Tech Item */}
                <div className="border-2 border-black p-3 text-center hover:bg-black hover:text-white transition-colors cursor-help group">
                    <div className="font-mono text-xs font-bold mb-1 group-hover:text-yellow-300">CORE</div>
                    <div className="font-black text-xl uppercase">React</div>
                </div>
                <div className="border-2 border-black p-3 text-center hover:bg-black hover:text-white transition-colors cursor-help group">
                    <div className="font-mono text-xs font-bold mb-1 group-hover:text-yellow-300">BUILD</div>
                    <div className="font-black text-xl uppercase">Vite</div>
                </div>
                <div className="border-2 border-black p-3 text-center hover:bg-black hover:text-white transition-colors cursor-help group">
                    <div className="font-mono text-xs font-bold mb-1 group-hover:text-yellow-300">STYLE</div>
                    <div className="font-black text-xl uppercase">Tailwind</div>
                </div>
                <div className="border-2 border-black p-3 text-center hover:bg-black hover:text-white transition-colors cursor-help group">
                    <div className="font-mono text-xs font-bold mb-1 group-hover:text-yellow-300">ROUTING</div>
                    <div className="font-black text-xl uppercase">Router</div>
                </div>
            </div>
        </div>

        {/* SECTION 3: DEVELOPER ID CARD */}
        <div className="bg-gray-100 border-2 border-black border-dashed p-6 flex flex-col md:flex-row gap-6 items-center">
            {/* Avatar Placeholder */}
            <div className="w-24 h-24 bg-black border-4 border-white shadow-[0_0_0_2px_#000] flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
            </div>
            
            <div className="flex-1 text-center md:text-left space-y-2">
                <h3 className="text-2xl font-black uppercase">The Developer</h3>
                <p className="font-serif italic">
                    "Building distinct digital experiences with modern tools and retro aesthetics."
                </p>
                <div className="flex gap-2 justify-center md:justify-start mt-2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 font-mono">IT314</span>
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 font-mono">FINALS</span>
                </div>
            </div>
        </div>

        {/* FOOTER ACTIONS */}
        <div className="pt-6 border-t-4 border-black flex justify-between items-center">
            <Link to="/" className="font-mono font-bold text-sm hover:underline decoration-2 decoration-blue-600">
                &lt;&lt; RETURN_HOME
            </Link>
            <div className="font-mono text-xs text-gray-400">
                END_OF_FILE
            </div>
        </div>

      </div>
    </div>
  );
}

export default About;
