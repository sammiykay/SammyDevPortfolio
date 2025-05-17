import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
// Import the profile image directly
const profileImg = "./src/assets/profile.jpg";

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={profileImg}
              alt="Kayode Ola - Software Engineer"
              className="rounded-2xl shadow-lg mx-auto max-w-xs md:max-w-md"
            />
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 md:pl-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn} className="mb-3">
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                Software Engineer
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Kayode Ola</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-gray-600 mb-6">
              I'm a full-stack developer specialized in creating visually stunning websites, 
              robust web solutions, automation tools, and trading scripts.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg" 
                className="rounded-full"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="rounded-full hover:text-primary hover:border-primary"
              >
                <a href="#portfolio">View My Work</a>
              </Button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="mt-8 flex items-center gap-4">
              <a 
                href="mailto:kayodeola47@gmail.com" 
                className="text-gray-600 hover:text-primary transition"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
