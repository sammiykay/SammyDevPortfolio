import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
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

  const projects = [
    {
      title: "Helpdesk Ticketing System",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      technologies: ["React", "Django", "SQL"],
      link: "#"
    },
    {
      title: "Bezal Global",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#"
    },
    {
      title: "ExecutiveHaven",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      technologies: ["React", "Django", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Youtube Playlist Downloader",
      category: "Windows Application",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      technologies: ["Python", "Tkinter", "YouTube API"],
      link: "#"
    },
    {
      title: "Tailored Cloth Store",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Crypto Trading Bot",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      technologies: ["Python", "Flask", "Trading APIs"],
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Portfolio</h2>
          <div className="section-divider"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A showcase of my projects and accomplishments.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeIn}>
              <ProjectCard
                title={project.title}
                category={project.category}
                image={project.image}
                technologies={project.technologies}
                link={project.link}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
