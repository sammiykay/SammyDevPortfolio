import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  name: string;
  percentage: number;
}

export const SkillBar = ({ name, percentage }: SkillBarProps) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <h4 className="font-medium">{name}</h4>
        <span>{percentage}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};
