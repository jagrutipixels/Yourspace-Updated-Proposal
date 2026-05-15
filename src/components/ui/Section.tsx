import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { ReactNode, ComponentProps } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32 relative", className)}>
      {children}
    </section>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("max-w-7xl mx-auto px-6 md:px-12 relative z-10", className)}>
      {children}
    </div>
  );
}

export function FadeIn({ children, delay = 0, className, ...props }: { children: ReactNode; delay?: number; className?: string } & Omit<ComponentProps<typeof motion.div>, 'children' | 'className'>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
