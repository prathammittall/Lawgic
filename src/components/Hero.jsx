import React, { useEffect, useState, useRef } from 'react';
import { FaSearch, FaBalanceScale, FaGavel } from 'react-icons/fa';

function Hero() {
  const [isBalanced, setIsBalanced] = useState(true);
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef(null);
  const balanceRef = useRef(null);

  // Animation for the balance scale
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBalanced(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-20 sm:py-32" style={{ backgroundColor: '#f3eee5' }}>
      <div className="container mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left side with logo and text */}
          <div className="lg:col-span-6 flex flex-col items-center text-center">
            <div className="mb-8">
              <h1 className="text-[#251c1a] text-6xl md:text-7xl font-bold tracking-tighter">
                <span className="text-8xl md:text-9xl">L</span>awgic
              </h1>
              <div className="h-1 w-16 bg-[#251c1a] my-4 mx-auto"></div>
              <p className="text-[#251c1a]/80 text-xl md:text-2xl font-light italic">
                Think Law. Think Logic.
              </p>
            </div>
            
            <p className="text-[#251c1a]/70 text-lg mb-8 max-w-lg mx-auto">
              Navigate the complexities of law with precision and clarity. 
              The most advanced legal search engine powered by AI.
            </p>
            
            {/* Search Bar */}
            <div 
              ref={searchRef}
              className={`w-full max-w-xl relative mx-auto transition-all duration-300 ${
                searchFocus ? 'shadow-lg' : 'shadow-md'
              }`}
            >
              <div className={`bg-white rounded-full p-2 pl-6 flex items-center transition-all duration-300 ${
                searchFocus ? 'ring-2 ring-[#251c1a]' : ''
              }`}>
                <input type="text" placeholder="Search legal cases, documents, precedents..." className="bg-transparent w-full py-3 outline-none text-[#251c1a] placeholder-[#251c1a]/50" onFocus={() => setSearchFocus(true)} onBlur={() => setSearchFocus(false)} value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/><a href='https://lawgic-login-auth.vercel.app/'><button className={`ml-2 rounded-full p-4 flex items-center justify-center transition-all ${searchFocus ? 'bg-[#251c1a] text-white' : 'bg-[#251c1a]/10 tex[#251c1a]'}`}><FaSearch className={`${searchFocus ? 'scale-110' : ''} transition-transform`} />
                </button></a>
              </div>
            </div>
            
            <div className="mt-4 text-[#251c1a]/60 text-sm">
              Try searching: "recent supreme court decisions" or "contract templates"
            </div>
          </div>
          
          {/* Right side with balance scale (visible on all screens) */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div ref={balanceRef} className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px]">
              {/* Background circle */}
              <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full border-8 border-[#251c1a]/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              
              {/* Central pole */}
              <div className="absolute left-1/2 top-[15%] h-[70%] w-4 sm:w-6 bg-[#251c1a] rounded-t-full transform -translate-x-1/2">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#251c1a] flex items-center justify-center">
                  <FaGavel className="text-[#f3eee5] text-lg sm:text-xl" />
                </div>
                
                <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#251c1a]/20 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping opacity-30"></div>
              </div>
              
              {/* The balance beam */}
              <div className={`absolute top-[30%] left-1/2 w-[220px] sm:w-[320px] h-4 sm:h-6 bg-gradient-to-r from-[#251c1a] via-[#3a2e2b] to-[#251c1a] rounded-full transform -translate-x-1/2 origin-center transition-transform duration-1000 ${
                isBalanced ? 'rotate-0' : 'rotate-[5deg]'
              }`}>
                {/* Left scale plate */}
                <div className={`absolute left-0 -bottom-[100px] sm:-bottom-[140px] w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-full border-6 sm:border-8 border-[#251c1a] transition-transform duration-1000 ${
                  !isBalanced ? 'transform -translate-y-4' : ''
                }`}>
                  <div className="absolute inset-0 rounded-full bg-[#251c1a]/5 backdrop-blur-sm"></div>
                  
                  {/* Law symbol */}
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="text-[#251c1a] text-2xl sm:text-3xl font-bold">LAW</div>
                    <div className="text-xs text-[#251c1a]/70 mt-1">§ Precedent</div>
                  </div>
                </div>
                
                {/* Right scale plate */}
                <div className={`absolute right-0 -bottom-[100px] sm:-bottom-[140px] w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-full border-6 sm:border-8 border-[#251c1a] transition-transform duration-1000 ${
                  isBalanced ? 'transform -translate-y-4' : ''
                }`}>
                  <div className="absolute inset-0 rounded-full bg-[#251c1a]/5 backdrop-blur-sm"></div>
                  
                  {/* Logic symbol */}
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="text-[#251c1a] text-2xl sm:text-3xl font-bold">LOGIC</div>
                    <div className="text-xs text-[#251c1a]/70 mt-1">∴ Reasoning</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative patterns */}
              <svg className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 text-[#251c1a]/10" viewBox="0 0 100 100">
                <path fill="currentColor" d="M0,0 L100,0 L100,100 Z" />
              </svg>
              <svg className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 text-[#251c1a]/10" viewBox="0 0 100 100">
                <path fill="currentColor" d="M0,100 L0,0 L100,100 Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes circle-animation {
          0% { stroke-dashoffset: 339.3; }
          100% { stroke-dashoffset: 37.3; }
        }
        
        .circle-animation {
          animation: circle-animation 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Hero;