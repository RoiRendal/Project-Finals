import { Link } from 'react-router-dom';
import myProfilePic from '../assets/images/profile.png';

function About() {
  return (
    <div className="max-w-4xl mx-auto pb-10 px-4">
      
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
            </div>
        </div>

        {/* SECTION 2: TECH STACK */}
        <div>
            <h2 className="text-xl font-black border-b-4 border-black pb-2 uppercase mb-6 flex justify-between items-end">
                <span>2.0 Technical Specifications</span>
                <span className="font-mono text-xs">V.1.0.0</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['React', 'Vite', 'Tailwind', 'Router'].map((tech) => (
                    <div key={tech} className="border-2 border-black p-3 text-center hover:bg-black hover:text-white transition-colors cursor-help group">
                        <div className="font-mono text-xs font-bold mb-1 group-hover:text-yellow-300">STACK</div>
                        <div className="font-black text-xl uppercase">{tech}</div>
                    </div>
                ))}
            </div>
        </div>

        {/* SECTION 3: DEVELOPER ID CARD (UPDATED) */}
        <div className="bg-gray-100 border-2 border-black border-dashed p-6 flex flex-col md:flex-row gap-8 items-center">
            
            {/* PROFILE PICTURE */}
            <div className="shrink-0">
                <div className="w-32 h-32 bg-gray-300 border-4 border-white shadow-[0_0_0_4px_#000] overflow-hidden rotate-[-2deg]">
                    {/* REPLACE src WITH YOUR VARIABLE: src={myProfilePic} */}
                    <img 
                        src={myProfilePic} 
                        alt="Developer" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                    />
                </div>
            </div>
            
            <div className="flex-1 text-center md:text-left space-y-3">
                <h3 className="text-2xl font-black uppercase bg-yellow-300 inline-block px-2">The Developer</h3>
                <p className="font-serif italic text-lg leading-tight">
                    "Building distinct digital experiences with modern tools and retro aesthetics."
                </p>
                
                <div className="flex gap-2 justify-center md:justify-start pt-2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 font-mono">IT314</span>
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 font-mono">FINALS</span>
                </div>

                {/* SOCIAL LINKS */}
                <div className="flex gap-3 justify-center md:justify-start pt-4">
                    <a href="https://github.com/RoiRendal" target="_blank" rel="noreferrer" className="flex items-center gap-2 border-2 border-black bg-white px-3 py-1 font-mono text-xs font-bold hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0_0_#000] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]">
                        <span>📂</span> GITHUB
                    </a>
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
