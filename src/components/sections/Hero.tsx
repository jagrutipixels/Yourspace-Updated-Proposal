import { motion } from 'motion/react';
import { Container } from '../ui/Section';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/80 to-dark z-10" />
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        />
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-brand/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-900/10 blur-[150px] rounded-full" />
      </div>

      <Container className="relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="text-sm font-medium text-brand-light tracking-wide uppercase">Strategic Growth Proposal</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-8 leading-[1.1] text-white"
        >
          Transforming Space <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Into Lifestyle.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 font-light leading-relaxed"
        >
          A 90-day plan to help <span className="text-white font-medium">Your Space Doctor</span> become the most trusted and recognized name for storage and space management in India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-4 rounded-full bg-brand text-white font-medium tracking-wide hover:bg-brand-light transition-colors w-full sm:w-auto flex items-center justify-center gap-2 group">
            Explore the Vision
            <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </motion.div>
      </Container>
      
      {/* Decorative animated elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-brand/50 to-transparent animate-pulse" />
    </section>
  );
}
