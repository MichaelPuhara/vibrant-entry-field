
import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import Logo from "./Logo";

const ServicesSection = () => {
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
      id="services"
      ref={sectionRef}
      className="py-20 bg-kahu-bg-blue"
    >
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center">
          What Services Do We Offer To Help?
        </h2>
        <div className="section-divider mx-auto"></div>
        
        <div className="mt-16 space-y-12 max-w-4xl mx-auto">
          {/* Translation Services */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <h3 className="text-2xl font-semibold mb-4">Translation and Captioning Services:</h3>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-kahu-blue mt-1 flex-shrink-0" />
                <span>Māori to English translations, for example, Māori content with English subtitles.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-kahu-blue mt-1 flex-shrink-0" />
                <span>English to Māori translations, for example, English content with Māori subtitles.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-kahu-blue mt-1 flex-shrink-0" />
                <span>Māori to Māori speech-to-text, for example, Māori content with Māori subtitles.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-kahu-blue mt-1 flex-shrink-0" />
                <span>Translation to enable bi-lingual content output, for example, translating English copy for Social Media posts on an ongoing basis.</span>
              </li>
            </ul>
          </div>
          
          {/* Workshops */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <h3 className="text-2xl font-semibold mb-4">Wānanga (Workshops) and Speaking Engagements:</h3>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-kahu-blue mt-1 flex-shrink-0" />
                <span>Wānanga and speaking engagements from one or both of our humans, around topics such as: AI, te reo Māori, AI + te reo Māori, emerging technologies.</span>
              </li>
            </ul>
          </div>
          
          {/* Custom AI Projects */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <h3 className="text-2xl font-semibold mb-4">Custom AI projects</h3>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-kahu-blue mt-1 flex-shrink-0" />
                <span>We are also able to consult and collaborate on custom AI projects. Our CTO, Michael Puhara has extensive experience in the field of AI and development, for example, he has just built a Small Language Model, locally hosted on his computer. He is also skilled in the Microsoft environment, through self-taught use of the tools in the Microsoft for Startups Founders Hub.</span>
              </li>
            </ul>
          </div>
          
          <div className={`mt-8 pt-4 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <p className="text-lg">
              Together, we can normalise the use of te reo Māori in mainstream spaces, such as workplaces, TV, <span className="font-semibold">online education</span>, film and social media, in turn revitalising our reo rangatira; te reo Māori.
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

export default ServicesSection;
