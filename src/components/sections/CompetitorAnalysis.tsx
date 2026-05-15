import { Section, Container, FadeIn } from '../ui/Section';
import { X, Check } from 'lucide-react';

export function CompetitorAnalysis() {
  const norms = [
    { label: "Visuals", value: "Basic, stock-like photos" },
    { label: "Storytelling", value: "Focus on boxes and cheap prices" },
    { label: "Trust Factor", value: "Faceless corporations, hidden teams" },
    { label: "Brand Feel", value: "A utility you use when forced to move" }
  ];

  const future = [
    { label: "Visuals", value: "High-quality, cinematic videos" },
    { label: "Storytelling", value: "Focus on real people and their lives" },
    { label: "Trust Factor", value: "Visible experts and a trusted founder" },
    { label: "Brand Feel", value: "A premium lifestyle service" }
  ];

  return (
    <Section className="bg-dark relative overflow-hidden">
      {/* Background glow for the future section side */}
      <div className="absolute top-1/2 right-0 w-1/2 h-full bg-brand/5 blur-[120px] pointer-events-none -translate-y-1/2" />
      
      <Container>
        <div className="mb-16 md:mb-24 max-w-3xl relative z-10">
          <FadeIn>
            <h2 className="text-sm tracking-[0.2em] text-brand uppercase mb-4">04 / Competitive Landscape</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">The Storytelling Gap.</h3>
            <p className="text-xl text-gray-400">
              Everyone else is just talking about boxes and prices. No one is telling stories that actually connect with customers emotionally. Here is how we separate you from the noise.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
          {/* The Industry Norm */}
          <FadeIn delay={0.2} className="bg-charcoal/50 border border-white/5 p-8 md:p-12 rounded-3xl flex flex-col h-full hover:border-[#333] transition-colors relative">
            <div className="mb-12 pb-8 border-b border-white/10">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                The Status Quo
              </h4>
              <h3 className="text-3xl text-white font-medium">Generic Competitors</h3>
            </div>
            
            <ul className="space-y-10 flex-1">
              {norms.map((item, idx) => (
                <li key={idx} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/5 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <X className="w-4 h-4 text-gray-500" />
                  </div>
                  <div>
                    <h5 className="text-xs uppercase tracking-widest text-gray-500 mb-2">{item.label}</h5>
                    <p className="text-gray-300 text-lg md:text-xl font-light">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Your Space Doctor */}
          <FadeIn delay={0.3} className="bg-gradient-to-b from-brand/20 to-charcoal border border-brand/30 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-[0_0_50px_rgba(255,92,0,0.1)] flex flex-col h-full group">
            {/* Inner subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand/30 transition-all duration-700" />
            
            <div className="mb-12 pb-8 border-b border-brand/20 relative z-10">
              <h4 className="text-xs uppercase tracking-widest text-brand mb-3 font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse shadow-[0_0_8px_rgba(255,92,0,0.8)]" />
                The Future
              </h4>
              <h3 className="text-3xl text-white font-medium">Your Space Doctor</h3>
            </div>
            
            <ul className="space-y-10 relative z-10 flex-1">
              {future.map((item, idx) => (
                <li key={idx} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-brand-light" />
                  </div>
                  <div>
                    <h5 className="text-xs uppercase tracking-widest text-brand/70 mb-2">{item.label}</h5>
                    <p className="text-white text-lg md:text-xl font-normal">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
