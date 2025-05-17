import { motion } from "framer-motion";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { SkillBar } from "@/components/ui/SkillBar";
import { Briefcase, Code } from "lucide-react";

const Resume = () => {
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
        staggerChildren: 0.15
      }
    }
  };

  const workHistory = [
    {
      title: "Backend Developer",
      company: "Novaji",
      period: "2023",
      description: "Enhanced key web application features through proficient Python coding, API integration, and efficient database management."
    },
    {
      title: "Full Stack Web Developer",
      company: "ExecutiveHaven",
      period: "2023-Present",
      description: "Developed and maintained the website using React and Django, demonstrating full stack expertise."
    },
    {
      title: "Full Stack Web Developer",
      company: "Bezal",
      period: "2023-Present",
      description: "Worked on creating a seamless landing page and an e-learning system."
    }
  ];

  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 75 },
    { name: "Python", percentage: 80 },
    { name: "Django", percentage: 75 }
  ];

  const additionalSkills = [
    {
      category: "Frontend",
      skills: ["React", "Vue", "Bootstrap", "Tailwind"]
    },
    {
      category: "Backend",
      skills: ["Django", "Flask", "Node.js", "SQL"]
    }
  ];

  return (
    <section id="resume" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Resume</h2>
          <div className="section-divider"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My professional journey and technical expertise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work History */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Briefcase className="mr-3 text-primary" />
              Work History
            </h3>
            
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {workHistory.map((job, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <TimelineItem
                    title={job.title}
                    company={job.company}
                    period={job.period}
                    description={job.description}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Code className="mr-3 text-primary" />
              Skills
            </h3>
            
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <SkillBar
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {additionalSkills.map((skillSet, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium mb-2">{skillSet.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
