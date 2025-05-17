import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArrowRight } from "lucide-react";
const department = "./src/assets/department.png";
const bezal_ = "./src/assets/bezal_.png";
const odoo = "./src/assets/odoo.png";
const tailor = "./src/assets/tailor.png";
const auction = "./src/assets/auction.png";
const executivehaven = "./src/assets/executivehaven.png";

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
      image: odoo,
      technologies: ["Odoo", "Python", "XML"],
      link: "https://odoo.oilservgroup.systems/"
    },
    {
      title: "Bezal Global",
      category: "Web Application",
      image: bezal_,
      technologies: ["HTML", "CSS", "JavaScript", 'Django'],
      link: "bezalglobal.pythonanywhere.com"
    },
    {
      title: "ExecutiveHaven",
      category: "Web Application",
      image: executivehaven,
      technologies: ["React", "Django", "Django Rest Framework"],
      link: "https://executivehaven.org"
    },
    // {
    //   title: "Youtube Playlist Downloader",
    //   category: "Windows Application",
    //   image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    //   technologies: ["Python", "Tkinter", "YouTube API"],
    //   link: "#"
    // },
    {
      title: "Tailored Cloth Store",
      category: "Web Application",
      image: tailor,
      technologies: ["HTML", "CSS", "Django"],
      link: "https://github.com/sammiykay/cloth_store"
    },
    {
      title: "Department Due Payment",
      category: "Web Application",
      image: department,
      technologies: ["Python", "Django", "HTML & CSS", "Flutterwave"],
      link: "https://github.com/sammiykay/department_due/"
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
         
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
