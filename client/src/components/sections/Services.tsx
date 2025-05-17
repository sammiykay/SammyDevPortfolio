import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { WebDesignIcon, WebDevIcon, WebAutomationIcon, TradingScriptIcon } from "@/lib/illustrations";

const Services = () => {
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

  const services = [
    {
      icon: <WebDesignIcon />,
      title: "Web Design",
      description: "Creating visually stunning and user-friendly web designs that captivate and engage users."
    },
    {
      icon: <WebDevIcon />,
      title: "Web Development",
      description: "Crafting robust web solutions for exceptional user experiences."
    },
    {
      icon: <WebAutomationIcon />,
      title: "Web Automation",
      description: "Streamlining processes with advanced web automation solutions."
    },
    {
      icon: <TradingScriptIcon />,
      title: "Automated Trading Scripts",
      description: "Developing sophisticated scripts for automated trading."
    }
  ];

  const stats = [
    { value: "15+", label: "Projects Completed" },
    { value: "5+", label: "Satisfied Clients" }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Services</h2>
          <div className="section-divider"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Providing comprehensive solutions across web development and automation domains.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeIn}>
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center shadow-sm"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
