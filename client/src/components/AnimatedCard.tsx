import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  onClick?: () => void;
}

export function AnimatedCard({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.6,
  onClick 
}: AnimatedCardProps) {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className={className}
      onClick={onClick}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
    >
      {children}
    </motion.div>
  );
} 