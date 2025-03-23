
import { useEffect, useRef, useState } from "react";

const ExampleSection = () => {
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
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-6">
            Māori to Māori speech-to-text, for example, Māori content with Māori subtitles.
          </h3>
          <p className="text-xl text-center mb-2">
            He tino pai tēnei tauira mō tō tātau whānau turi i mōhio ai i te reo Māori.
          </p>
          <p className="text-lg text-center text-gray-600 italic mb-10">
            (This example is great for our whānau who are deaf and understand te reo Māori)
          </p>
          
          <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <img
              src="public/lovable-uploads/2a09a8d9-4ec8-403b-af91-2ecb7175a237.png"
              alt="Example of Māori content with Māori subtitles"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleSection;
