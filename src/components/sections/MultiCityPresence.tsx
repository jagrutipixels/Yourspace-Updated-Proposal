import { Section, Container, FadeIn } from '../ui/Section';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export function MultiCityPresence() {
  const citiesInfo = [
    { name: "Vadodara", x: 25, y: 20 },
    { name: "Bhiwandi", x: 35, y: 40 },
    { name: "Mumbai", x: 20, y: 55 },
    { name: "Navi Mumbai", x: 45, y: 60 },
    { name: "Pune", x: 60, y: 75 },
    { name: "Bengaluru", x: 75, y: 90 }
  ];

  const connections = [
    { from: "Vadodara", to: "Bhiwandi" },
    { from: "Bhiwandi", to: "Mumbai" },
    { from: "Bhiwandi", to: "Navi Mumbai" },
    { from: "Mumbai", to: "Pune" },
    { from: "Navi Mumbai", to: "Pune" },
    { from: "Pune", to: "Bengaluru" }
  ];

  return (
    <Section className="bg-[#0a0a0a] border-t border-white/[0.04] relative overflow-hidden py-24">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff5c00]/30 via-transparent to-transparent rounded-full mix-blend-screen" />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <FadeIn>
              <h2 className="text-[10px] tracking-[0.25em] text-[#ff5c00] uppercase mb-6 font-medium">03 / Scale & Operations</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 text-white tracking-tight leading-[1.1]">Scaling Operations<br/>Needs Scaling Trust.</h3>
              <p className="text-xl text-gray-400 font-light mb-12 leading-relaxed">
                As Your Space Doctor expands across India, you can't rely solely on word-of-mouth. Content is the most scalable way to build local trust in a new city before you even open your doors.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="flex flex-wrap gap-4">
              {citiesInfo.map((city, idx) => (
                <div key={idx} className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#141414] border border-white/[0.04] hover:border-[#ff5c00]/40 transition-colors">
                  <MapPin className="w-5 h-5 text-[#ff5c00]" />
                  <span className="text-gray-200 font-medium text-sm tracking-wide">{city.name}</span>
                </div>
              ))}
            </FadeIn>
          </div>

          <div className="relative h-[450px] lg:h-[600px] rounded-[2.5rem] border border-white/[0.04] bg-[#0f0f0f] overflow-hidden flex flex-col items-center justify-center shadow-2xl p-8 group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 group-hover:opacity-10 transition-opacity" />
            
            <div className="relative w-full max-w-sm h-full mx-auto my-8">
              {/* Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 overflow-visible">
                {connections.map((conn, i) => {
                  const fromCity = citiesInfo.find(c => c.name === conn.from);
                  const toCity = citiesInfo.find(c => c.name === conn.to);
                  if (!fromCity || !toCity) return null;
                  
                  return (
                    <motion.line
                      key={i}
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                      x1={`${fromCity.x}%`}
                      y1={`${fromCity.y}%`}
                      x2={`${toCity.x}%`}
                      y2={`${toCity.y}%`}
                      stroke="#ff5c00" 
                      strokeWidth="2" 
                      strokeDasharray="6 6"
                    />
                  );
                })}
              </svg>

              {/* Nodes */}
              {citiesInfo.map((city, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + (i * 0.1), type: "spring" }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 cursor-pointer group z-10"
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                >
                  <div className="relative flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#ff5c00] rounded-full shadow-[0_0_15px_rgba(255,92,0,0.8)] relative z-10" />
                    <div className="w-12 h-12 bg-[#ff5c00]/20 rounded-full absolute animate-ping" style={{ animationDuration: '3s', animationDelay: `${i * 0.5}s` }} />
                  </div>
                  
                  <div className="bg-[#141414]/90 backdrop-blur-md border border-white/[0.05] px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                    <span className="text-sm text-white font-medium">{city.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute bottom-8 left-8 flex gap-6 text-[10px] uppercase tracking-widest text-gray-500 font-medium bg-[#141414]/80 px-6 py-3 rounded-xl border border-white/[0.04] backdrop-blur-md z-20">
              <span className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#ff5c00] animate-pulse shadow-[0_0_8px_rgba(255,92,0,0.8)]"/> Active Hub</span>
              <span className="flex items-center gap-3"><div className="w-6 h-[2px] bg-[#ff5c00] opacity-50"/> Route</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
