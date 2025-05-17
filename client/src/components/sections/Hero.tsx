import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ChevronDown, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
// Import the profile image directly
const profileImg = "./src/assets/profile.jpg";

const Hero = () => {
  // Enhanced animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const highlightedSkills = [
    "Full Stack Development", 
    "Web Design", 
    "Web Automation", 
    "Trading Scripts"
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-32 bg-gradient-to-b from-background to-secondary/20">
      {/* Decorative elements for modern effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Text content with enhanced animations */}
          <motion.div 
            className="w-full md:w-1/2 pt-10 md:pt-0 md:pr-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                <CheckCircle2 size={14} className="mr-1.5" />
                Software Engineer
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp} 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-5 tracking-tight"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Kayode Ola</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-6 max-w-lg">
              I create exceptional digital experiences through code. Specializing in solutions that combine visual appeal with robust functionality.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-8">
              {highlightedSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-secondary text-foreground px-3 py-1 rounded-lg text-sm border border-border"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-10">
              <Button 
                asChild
                size="lg" 
                className="rounded-lg bg-gradient-to-r from-primary to-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="rounded-lg border-primary text-primary hover:bg-primary/10"
              >
                <a href="#portfolio">View My Work</a>
              </Button>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex items-center gap-5">
              <a 
                href="mailto:kayodeola47@gmail.com" 
                className="bg-secondary hover:bg-secondary/80 text-foreground w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-secondary hover:bg-secondary/80 text-foreground w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-secondary hover:bg-secondary/80 text-foreground w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-secondary hover:bg-secondary/80 text-foreground w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image with enhanced presentation */}
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-primary to-accent opacity-20 blur-xl"></div>
              <div className="relative overflow-hidden rounded-3xl border border-primary/10 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Kayode Ola - Software Engineer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-20"></div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2
          }}
        >
          <a href="#services" className="text-primary hover:text-primary/80 transition-colors">
            <ChevronDown size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
