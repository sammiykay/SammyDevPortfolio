interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const TimelineItem = ({ title, company, period, description }: TimelineItemProps) => {
  return (
    <div className="timeline-item">
      <div className="flex justify-between mb-2">
        <h4 className="text-xl font-medium">{title}</h4>
        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
          {period}
        </span>
      </div>
      <h5 className="text-lg text-gray-700 mb-2">{company}</h5>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
