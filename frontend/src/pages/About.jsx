import { Link } from 'react-router-dom';
import myProfilePic from '../assets/images/profile.png'; 

function About() {
  return (
    // FIX 1: Added px-4 to prevent edge touching on mobile
    <div className="max-w-4xl mx-auto pb-10 px-4">
      
      {/* HEADER: Thinner border on mobile */}
      <div className="mb-6 md:mb-8 border-l-4 md:border-l-8 border-black pl-4 md:pl-6">
        <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">
            System_Info
        </h1>
        <p className="font-mono text-xs md:text-sm mt-2 text-gray-600">
            // FILE: README.TXT // ACCESS: PUBLIC
        </p>
      </div>

      {/* RETURN BUTTON */}
      <Link to="/" className="mb-8 inline-block bg-white border-2 border-black px-4 py-2 font-mono font-bold text-sm shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            &lt;&lt; RETURN_TO_ROOT
      </Link>

      {/* MAIN CONTAINER: Reduced padding (p-4 vs p-10) */}
      <div className="border-4 border-black bg-white p-4 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative space-y-8 md:space-y-10">
        
        {/* SECTION 1: MISSION */}
        <div className="space-y-4">
            {/* Header scales down */}
            <h2 className="text-sm md:text-xl font-black bg-black text-white inline-block px-3 py-1 uppercase transform -rotate-1">
                1.0 Mission Statement
            </h2>
            {/* Text size: text-base (mobile) -> text-lg (desktop) */}
            <div className="border-2 border-black p-4 md:p-6 bg-yellow-50 font-serif text-base md:text-lg leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                <p>
                    <span className="font-bold text-xl md:text-2xl float-left mr-2 mt-[-5px] md:mt-[-10px]">T</span>
                    he Wild Cat Database is a static digital archive dedicated to the preservation and education of the world's most majestic felines. 
                    Designed with a "Brutalist / Web 1.0" philosophy, this system prioritizes raw data density and high-contrast accessibility over modern minimalist trends.
                </p>
            </div>
        </div>

        {/* SECTION 2: TECH STACK */}
        <div>
            <h2 className="text-lg md:text-xl font-black border-b-4 border-black pb-2 uppercase mb-4 md:mb-6 flex justify-between items-end">
                <span>2.0 Tech Specs</span>
                <span className="font-mono text-[10px] md:text-xs">V.1.0.0</span>
            </h2>
            
            {/* Gap reduced to gap-3 on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {['React', 'Vite', 'Tailwind', 'Router'].map((tech) => (
                    <div key={tech} className="border-2 border-black p-2 md:p-3 text-center hover:bg-black hover:text-white transition-colors cursor-help group">
                        <div className="font-mono text-[10px] md:text-xs font-bold mb-1 group-hover:text-yellow-300">STACK</div>
                        <div className="font-black text-lg md:text-xl uppercase">{tech}</div>
                    </div>
                ))}
            </div>
        </div>

        {/* SECTION 3: DEVELOPER ID CARD */}
        <div className="bg-gray-100 border-2 border-black border-dashed p-4 md:p-6 flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            
            {/* PROFILE PICTURE: Smaller on mobile (w-24 vs w-32) */}
            <div className="shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-300 border-4 border-white shadow-[0_0_0_4px_#000] overflow-hidden rotate-[-2deg]">
                    <img 
                        src={myProfilePic} 
                        alt="Developer" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                    />
                </div>
            </div>
            
            <div className="flex-1 text-center md:text-left space-y-3 w-full">
                <h3 className="text-xl md:text-2xl font-black uppercase bg-yellow-300 inline-block px-2">The Developer</h3>
                <p className="font-serif italic text-base md:text-lg leading-tight">
                    "You learn, and then you build. Build and make mistakes. Learn from mistakes and build again." <br/> <br/>
                    "Fan of retro aesthetics."
                </p>
                
                <div className="flex gap-2 justify-center md:justify-start pt-2">
                    <span className="bg-blue-600 text-white text-[10px] md:text-xs font-bold px-2 py-1 font-mono">IT314</span>
                    <span className="bg-green-600 text-white text-[10px] md:text-xs font-bold px-2 py-1 font-mono">PROJECT</span>
                </div>

                {/* SOCIAL LINKS: Flex-col on very small screens if needed, or flex-row wrap */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4">
                    <a href="https://github.com/RoiRendal" target="_blank" rel="noreferrer" className="flex items-center gap-2 border-2 border-black bg-white px-3 py-1 font-mono text-[10px] md:text-xs font-bold hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0_0_#000] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]">
                        <span>📂</span> GITHUB
                    </a>
                </div>
            </div>
        </div>

        {/* FOOTER ACTIONS */}
        <div className="pt-6 border-t-4 border-black flex justify-between items-center">
            <Link to="/" className="font-mono font-bold text-xs md:text-sm hover:underline decoration-2 decoration-blue-600">
                &lt;&lt; RETURN_HOME
            </Link>
            <div className="font-mono text-[10px] md:text-xs text-gray-400">
                END_OF_FILE
            </div>
        </div>

      </div>
    </div>
  );
}

export default About;
