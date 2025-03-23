
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
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
      id="about"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-8">
            Ko wai mātau? Who are we?
          </h2>
          <div className="section-divider mx-auto"></div>
          
          <div className="mt-12 space-y-8">
            <p className={`text-lg leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
              kahu.code is a Māori-owned, father-daughter-AI run software company specialising in 
              Translation and Captioning Services, at scale.
            </p>
            
            <p className={`text-lg leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
              Backed by tangata whenua (humans native to Aotearoa), our AI technology gives us the speed 
              and agility for a fast turnaround on large scale translation projects, whilst maintaining and
              upholding the mana and integrity of our reo rangatira, through thorough human review and
              checking of the translations.
            </p>
            
            <p className={`text-lg leading-relaxed transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
              With our love of combining te ao hangarau (the tech world) and te ao Māori at the centre of what
              we do, it is only natural that we have a deep appreciation for reo hangarau (the language of tech),
              and so we specialise in that, too.
            </p>
            
            <p className={`text-lg leading-relaxed transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
              Committed to integrating AI with the richness of te ao Māori, we believe that we are forging a
              path for our anamata - our future generations, those that will grow up with two native languages
              in this ever-evolving world: our reo rangatira and reo hangarau.
            </p>
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

export default AboutSection;
