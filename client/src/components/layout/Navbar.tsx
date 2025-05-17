import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Menu, X, Code, Home, Briefcase, Layout, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();

  // Define section icons
  const sectionIcons = {
    home: <Home size={16} />,
    services: <Layout size={16} />,
    resume: <Briefcase size={16} />,
    portfolio: <Code size={16} />,
    contact: <Mail size={16} />
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      setIsScrolled(window.scrollY > 20);
      
      // Track active section
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      sections.forEach((section) => {
        // Use HTMLElement type assertion for DOM properties
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setLocation(`/#${sectionId}`, { replace: true });
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full backdrop-blur-md z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-background/90 shadow-lg" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="text-2xl font-bold"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sammiy</span>
          <span className="text-foreground">kay</span>
        </motion.a>

        <div className="hidden md:flex space-x-1">
          {["home", "services", "resume", "portfolio", "contact"].map(
            (section, index) => (
              <motion.a
                key={section}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className={`flex items-center px-4 py-2 mx-1 rounded-lg transition-all ${
                  activeSection === section 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "hover:bg-secondary text-foreground hover:text-primary"
                }`}
              >
                <span className="mr-2">{sectionIcons[section as keyof typeof sectionIcons]}</span>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            )
          )}
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md shadow-lg absolute w-full overflow-hidden"
          >
            <div className="container mx-auto py-4 flex flex-col space-y-2">
              {["home", "services", "resume", "portfolio", "contact"].map(
                (section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section);
                    }}
                    className={`flex items-center px-4 py-3 rounded-lg ${
                      activeSection === section 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-secondary text-foreground"
                    }`}
                  >
                    <span className="mr-3">{sectionIcons[section as keyof typeof sectionIcons]}</span>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
