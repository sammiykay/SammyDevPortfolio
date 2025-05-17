import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  technologies: string[];
  link: string;
}

export const ProjectCard = ({ title, category, image, technologies, link }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{category}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-gray-200 px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <a 
          href={link} 
          className="text-primary hover:underline font-medium flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};
