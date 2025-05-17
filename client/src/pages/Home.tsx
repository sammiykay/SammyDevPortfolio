import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Resume from "@/components/sections/Resume";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

const Home = () => {
  useEffect(() => {
    document.title = "Kayode Ola - Software Engineer Portfolio";
    
    // Scroll to hash location if URL has one on initial load
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
