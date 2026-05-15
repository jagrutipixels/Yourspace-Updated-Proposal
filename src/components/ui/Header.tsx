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
          className="cursor-pointer group flex items-center bg-white px-3 py-2 rounded-lg transition-transform hover:scale-105"
        >
          <img 
            src="https://raw.githubusercontent.com/jagrutipixels/Yourspace-Updated-Proposal/a302ae15ed666589edee1303550b9df7a593a602/logo.png" 
            alt="Your Space Doctor Logo" 
            className="h-[20px] md:h-[24px] w-auto" 
          />
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
            className="px-5 py-2.5 bg-brand text-white text-[10px] uppercase tracking-widest font-medium rounded-full hover:bg-brand-light transition-colors shadow-[0_0_15px_rgba(255,92,0,0.3)] hover:shadow-[0_0_20px_rgba(255,92,0,0.5)]"
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
