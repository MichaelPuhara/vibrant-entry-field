import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, MessageSquare, Linkedin } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "mi">("en");
  const isMobile = useIsMobile();

  const navItems = {
    en: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact", icon: MessageSquare },
    ],
    mi: [
      { name: "Kāinga", href: "#home" },
      { name: "Mō Mātou", href: "#about" },
      { name: "Ratonga", href: "#services" },
      { name: "Kaupapa", href: "#projects" },
      { name: "Whakapā", href: "#contact", icon: MessageSquare },
    ]
  };

  const externalLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/kahucode/" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "mi" : "en");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentNavItems = navItems[language];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 font-mono">
          <Logo size="sm" />
          <span className="text-xl font-semibold">kahu.code</span>
        </a>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="px-2 py-1 text-sm rounded-md bg-muted hover:bg-accent transition-colors"
                aria-label="Toggle language"
              >
                {language === "en" ? "Te Reo" : "English"}
              </button>
              <button
                className="p-2 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {menuOpen && (
              <div className="fixed inset-0 top-16 bg-white/95 backdrop-blur-md flex flex-col z-40 animate-fade-in">
                <div className="flex flex-col space-y-4 p-6">
                  {currentNavItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-foreground hover:text-primary text-2xl py-2 transition-colors flex items-center gap-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.icon && <item.icon size={20} />}
                      {item.name}
                    </a>
                  ))}
                  <div className="h-px w-full bg-gray-200 my-4"></div>
                  {externalLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary text-lg py-2 transition-colors flex items-center gap-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      <item.icon size={18} />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center">
            <div className="flex space-x-6 mr-6">
              {currentNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left flex items-center gap-1"
                >
                  {item.icon && <item.icon size={16} />}
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex space-x-4 border-l pl-6 border-gray-200">
              {externalLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  title={item.name}
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
            <button
              onClick={toggleLanguage}
              className="ml-6 px-3 py-1 text-sm rounded-md bg-muted hover:bg-accent transition-colors"
              aria-label="Toggle language"
            >
              {language === "en" ? "Te Reo" : "English"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
