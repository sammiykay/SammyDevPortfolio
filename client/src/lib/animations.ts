import { Variants } from "framer-motion";

export const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5,
      delay 
    }
  }
});

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down', delay = 0): Variants => {
  const directionConfig = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 }
  };
  
  return {
    hidden: { 
      opacity: 0, 
      ...directionConfig[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { 
        duration: 0.5,
        delay
      }
    }
  };
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 }
};
