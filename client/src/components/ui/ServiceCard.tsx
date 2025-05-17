import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
