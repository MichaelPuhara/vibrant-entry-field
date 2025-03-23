
import { useEffect, useRef, useState } from "react";

const ProjectsSection = () => {
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
      id="projects"
      ref={sectionRef}
      className="py-20 bg-kahu-bg-blue"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Text-to-Text */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <h3 className="text-2xl text-pink-600 font-bold mb-6">Text-to-Text</h3>
            
            <div className="space-y-4">
              <p className="text-xl font-semibold">kahu.code Translation Tools to help you on your reo Māori journey</p>
              
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <p className="text-kahu-blue text-lg font-medium">Whakawhiti Reo = direct translations</p>
                <p className="text-kahu-blue text-lg font-medium">Kaiawhina Reo = a friend in your reo Māori journey</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <img 
                  src="public/lovable-uploads/7fbe23aa-5a54-43ea-9075-9b15dc047a72.png" 
                  alt="Whakawhiti Reo screenshot" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <img 
                  src="public/lovable-uploads/34af536a-0e4d-4c30-86d7-ef37ec988769.png" 
                  alt="Kaiawhina Reo screenshot" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="mt-6 bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                <p className="font-semibold mb-2">Please note,</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>These tools currently hold around an 80% translation accuracy rate.</li>
                  <li>It is not recommended to use content translated in these tools for external, business or educational use.</li>
                  <li>It is recommended that any content taken from these tools are reviewed by humans knowledgeable in te reo Māori, before the final version is used externally, in business or in education.</li>
                  <li>These tools are great to help you in your reo Māori journey.</li>
                  <li>Whakawhiti Reo is more accurate than Google Translate.</li>
                  <li>Sign into ChatGPT for free to start using these tools.</li>
                  <li>Search for Whakawhiti Reo and/or Kaiawhina Reo in the ChatGPT store, or click on the images above.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Speech-to-Speech */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <h3 className="text-2xl text-pink-600 font-bold mb-6">Speech-to-Speech</h3>
            
            <div className="space-y-4">
              <p className="text-xl font-semibold">kōrero mai</p>
              <p className="text-lg">a speech-to-speech prototype (te reo Māori and English for new learners)</p>
              
              <div className="mt-4">
                <img 
                  src="public/lovable-uploads/f16b1195-191f-4a75-b0da-0c049eccb295.png" 
                  alt="Eleven Labs speech-to-speech prototype" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="mt-6">
                <p className="text-xl font-medium mb-2">voice clone = Michael Puhara</p>
              </div>
              
              <div className="mt-2 bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                <p className="font-semibold mb-2">Please note,</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>The speech-to-speech prototype with Eleven Labs</li>
                  <li>The Agent is a clone of Michael Puhara's voice</li>
                  <li>It is primarily cloned in reo Māori, built on a model which is created for English and a few other widely spoken languages, therefore other languages may have a slight "accent"</li>
                  <li>The reo Māori pronunciation is not 100%, however we have seen huge improvements over the last year and it only continues to get better.</li>
                </ul>
              </div>
              
              <div className="mt-4 bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                <p className="font-semibold mb-2">Please note the same guidelines as the GPT tools +</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>When conversing with this AI agent, you will be asked if you are happy to be recorded before using the agent.</li>
                  <li>This data is stored by ElevenLabs.</li>
                  <li>We have recently discovered we have access to these recordings, transcriptions and corresponding timestamps in the ElevenLabs portal.</li>
                  <li>Rest assured, we do not want to listen to/read through the kōrero, we are just letting you all know.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* AcademyEX Project */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div>
              <div className="flex flex-col items-center mb-8">
                <img 
                  src="public/lovable-uploads/daa522d2-41bd-4b2c-8404-9aded3ae40b7.png" 
                  alt="kahu.code x academyEX collaboration" 
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <img 
                    src="public/lovable-uploads/9dbd1831-ae33-4210-abdf-afad92cae313.png" 
                    alt="Digital Passport logo" 
                    className="w-32 h-auto"
                  />
                  <img 
                    src="public/lovable-uploads/89854f40-b812-4e7b-aafd-5594c94052af.png" 
                    alt="Ministry of Social Development and AcademyEX logos" 
                    className="w-32 h-auto"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Project:</h3>
              <p className="text-lg mb-6">
                We translated just under 30,000 words in just over two-weeks, returned in .vtt format, re-synced to original video for the Digital Skills AI Course
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">Testimonial from academyEX:</h3>
              <blockquote className="text-lg italic">
                "kahu.code has been an incredible partner in bringing our Digital Passport AI Skills course to life in te reo Māori. Their expertise in translation and subtitling has made our content more accessible, ensuring a richer learning experience for our Māori learners. Their commitment to language and technology is truly invaluable."
              </blockquote>
            </div>
          </div>
          
          <div className="mt-16">
            <div className={`transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
              <h3 className="text-2xl text-pink-600 font-bold mb-6">An example of the Text-to-Text content for the AI Skills course, source and target</h3>
              <div className="mt-4">
                <img 
                  src="public/lovable-uploads/402ef067-fd50-4e9d-90a1-fe49011197ca.png" 
                  alt="Example of Text-to-Text translation" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
