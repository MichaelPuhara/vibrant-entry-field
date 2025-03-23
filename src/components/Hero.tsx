
import { useEffect, useState } from "react";
import Logo from "./Logo";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen w-full flex flex-col items-center justify-center py-20 bg-kahu-bg-blue relative overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <Logo size="lg" withHeartAnimation={true} />
        </div>
        
        <div className="text-center mt-12 space-y-6 max-w-3xl mx-auto">
          <h1 
            className={`text-4xl md:text-6xl font-heading font-bold transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
          >
            <span className="font-mono">kahu.code</span> Translation and AI Services
          </h1>
          
          <p 
            className={`text-xl md:text-2xl text-muted-foreground transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
          >
            Xaviere Murray-Puhara (CEO) and Michael Puhara (CTO)
          </p>
          
          <div 
            className={`pt-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
          >
            <a 
              href="#services" 
              className="inline-flex items-center px-8 py-3 bg-kahu-blue text-white rounded-md hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
