
import { useEffect, useRef, useState } from "react";

const FoundingTeam = () => {
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
      id="team"
      ref={sectionRef}
      className="py-20 bg-kahu-bg-blue"
    >
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center">
          Meet the Founding Team
        </h2>
        <div className="section-divider mx-auto"></div>
        
        <p className="text-center text-xl italic font-heading mt-4 mb-10">
          Nō Ngāti Kahungunu me Ngāti Porou māua
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
          {/* Xaviere */}
          <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Founder & CEO</h3>
                  <h4 className="text-2xl font-bold mt-1">Xaviere Murray-Puhara</h4>
                </div>
                <div className="text-kahu-blue">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Xaviere is a passionate te reo Māori revitaliser, AI enthusiast and
                real-life API, connecting people and technology, to opportunity.
                Two-time Co-founder of kahu.code and Tech Taniwha.
              </p>
              
              <p className="text-gray-700 font-semibold">
                Recently graduated with a postgraduate Diploma in Māori
                Language Fluency
              </p>
            </div>
          </div>
          
          {/* Michael */}
          <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Founder & CTO</h3>
                  <h4 className="text-2xl font-bold mt-1">Michael Puhara</h4>
                </div>
                <div className="text-kahu-blue">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Michael is a self-taught developer and Co-founder of kahu.code,
                specialising in AI, language models and reo revitalisation. An educator
                at MAGS and Massey, he merges technical innovation with practical
                application.
              </p>
              
              <p className="text-gray-700 font-semibold">
                Winner of the Innovator Tipu Award from Te Hapori Matihiko in 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingTeam;
