
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const GoalSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="section-heading">
              Our Goal
            </h2>
            <div className="section-divider"></div>
            
            <div className="mt-8 space-y-6">
              <p className={`text-lg transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                Ensuring accurate, inclusive, and accessible use of te reo Māori
                through AI tools, while addressing diverse learning needs, speech
                accuracy, and inclusivity for deaf Māori speakers.
              </p>
              
              <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                <p className="text-lg font-semibold">There are four key elements to consider here:</p>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="font-semibold">(1)</span>
                    <p>People are at different stages of their reo Māori journey and we
                    have individual ways of learning/ different learning styles.</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="font-semibold">(2)</span>
                    <p>Fully human translations can be slow and costly, however fully AI
                    translations are not yet 100% accurate, nor trusted by all individuals</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="font-semibold text-pink-600">(3)</span>
                    <p className="text-pink-600">Te reo Māori is not spoken correctly (speech) in AI assistants and
                    other speech technology</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="font-semibold">(4)</span>
                    <p>Our whānau who speak te reo Māori and are deaf, are often left
                    out (for example with on-screen content).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`mt-10 md:mt-0 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="public/lovable-uploads/75f1e270-901d-44c5-936c-fe22d0990b90.png"
                alt="Article about te reo Māori growth"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute right-10 bottom-10">
        <div className="relative">
          <Logo size="sm" />
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
