import { motion, useScroll } from 'motion/react';
import { useState, useEffect } from 'react';

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'Summary', id: 'summary' },
    { label: 'Operations', id: 'operations' },
    { label: 'Strategy', id: 'strategy' },
    { label: 'Content', id: 'content' },
    { label: 'Performance', id: 'performance' },
    { label: 'Execution', id: 'execution' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white font-medium tracking-wide cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-2 h-2 rounded-full bg-brand group-hover:scale-150 transition-transform" />
          <span>Your Space <span className="text-gray-400">Doctor</span></span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            className="px-5 py-2.5 bg-brand text-white text-[10px] uppercase tracking-widest font-medium rounded-full hover:bg-brand-light transition-colors shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_20px_rgba(234,88,12,0.5)]"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu button could be added here, keeping minimal for now */}
        <div className="lg:hidden">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            className="px-5 py-2 bg-brand text-white text-[10px] uppercase tracking-widest font-medium rounded-full hover:bg-brand-light transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
}
