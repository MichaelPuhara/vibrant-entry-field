
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const CallToAction = () => {
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
      id="contact"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center">
          Call to Action
        </h2>
        <div className="section-divider mx-auto"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="space-y-8">
              <p className="text-xl">
                Join us on this journey, we would love your help with any of the following:
              </p>
              
              <ol className="space-y-4 list-decimal pl-6">
                <li className="text-lg font-semibold">Collaborating with us on a project!</li>
                <li className="text-lg">Connections/introductions to people who could be interested in our services</li>
                <li className="text-lg">Investment/funding options you are aware of, to scale our business in the realms of AI and Large Language Models.</li>
              </ol>
              
              <p className="text-xl font-medium mt-8">
                "He waka eke noa"
              </p>
              <p className="text-lg">
                We're all in this together.
              </p>
              
              <div className="pt-4">
                <p className="text-lg font-semibold">
                  AI-powered / Backed by tangata whenua / Scalable /
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-3xl md:text-4xl lg:text-5xl font-mono leading-tight">
                Join us in championing AI-powered solutions that revitalise te reo Māori and ensure it is accessible to all.
              </p>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex items-center justify-center p-4">
              <img
                src="public/lovable-uploads/840edf7b-97da-42be-b062-5398759d2139.png"
                alt="Founders standing in front of traditional Māori carved artwork"
                className="w-full h-auto object-cover rounded-lg"
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

export default CallToAction;
