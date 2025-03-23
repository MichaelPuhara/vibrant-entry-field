
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const MissionStatement = () => {
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
      className="py-28 bg-kahu-bg-blue relative"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-mono leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
          >
            Together, we can champion AI to support the revitalisation of te reo Māori and ensure it is accessible to all.
          </h2>
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

export default MissionStatement;
