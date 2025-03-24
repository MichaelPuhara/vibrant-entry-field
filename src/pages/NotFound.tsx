
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const [language, setLanguage] = useState<"en" | "mi">("en");

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const content = {
    en: {
      title: "404",
      message: "Oops! Page not found",
      description: "The page you're looking for doesn't exist or has been moved.",
      button: "Return to Home"
    },
    mi: {
      title: "404",
      message: "Auē! Kāore i kitea te whārangi",
      description: "Kāore te whārangi e rapuhia ana e koe, kua neke rānei.",
      button: "Hoki ki te Kāinga"
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 font-heading">{currentContent.title}</h1>
        <p className="text-2xl text-foreground/80 mb-3 font-heading">{currentContent.message}</p>
        <p className="text-foreground/60 mb-6">{currentContent.description}</p>
        <a href="/" className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/80 transition-colors mb-6">
          {currentContent.button}
        </a>
        
        <div className="mt-4 flex justify-center space-x-4">
          <button 
            onClick={() => setLanguage("en")} 
            className={`px-3 py-1 rounded ${language === "en" ? "bg-secondary text-white" : "bg-muted text-foreground"}`}
          >
            English
          </button>
          <button 
            onClick={() => setLanguage("mi")} 
            className={`px-3 py-1 rounded ${language === "mi" ? "bg-secondary text-white" : "bg-muted text-foreground"}`}
          >
            Te Reo Māori
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
