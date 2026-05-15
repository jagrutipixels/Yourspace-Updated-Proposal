import { Section, Container, FadeIn } from '../ui/Section';
import { BarChart3, Target, Zap } from 'lucide-react';

export function PerformanceMarketing() {
  return (
    <Section className="bg-[#0a0a0a] relative py-24">
      <Container>
        <FadeIn className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-[10px] tracking-[0.25em] text-[#ff5c00] uppercase mb-6 font-medium">13 / Paid Strategy</h2>
          <h3 className="text-5xl md:text-6xl font-medium mb-8 text-white tracking-tight leading-[1.1]">Test for Free.<br />Pay to Scale.</h3>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            We see what videos people like for free, and then we put money behind the winners to turn them into ads that bring in customers.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: <Zap className="w-5 h-5 text-[#ff5c00]" />,
              title: "Real People as Ads",
              desc: "Videos of real people look natural, so viewers don't skip them like regular ads. This makes getting customers much cheaper."
            },
            {
              icon: <BarChart3 className="w-5 h-5 text-[#ff5c00]" />,
              title: "Month 1: The Warm Up",
              desc: "We focus our ads initially on getting views and building an audience, so people know who you are before we ask them to buy."
            },
            {
              icon: <Target className="w-5 h-5 text-[#ff5c00]" />,
              title: "Month 2: Getting Customers",
              desc: "We see which videos people watched the most, and put ad money behind them to bring in actual inquiries and bookings."
            }
          ].map((card, i) => (
            <FadeIn key={i} delay={i * 0.15} className="bg-[#0f0f0f] border border-white/[0.04] p-10 rounded-[2rem] hover:border-white/[0.08] transition-colors group">
              <div className="w-12 h-12 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h4 className="text-2xl font-medium text-white mb-4">{card.title}</h4>
              <p className="text-gray-400 font-light text-[15px] leading-relaxed">{card.desc}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="max-w-5xl mx-auto bg-[#0d0d0d] border border-white/[0.04] rounded-[2.5rem] p-10 md:p-16">
          <h4 className="text-center text-[10px] tracking-[0.25em] text-gray-500 uppercase mb-12 font-medium">The Asset Pipeline</h4>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex-1 text-center bg-[#141414] p-8 rounded-3xl border border-white/[0.04] w-full">
               <span className="block text-[#ff5c00] mb-3 text-sm font-medium">01</span>
               <h5 className="text-white text-lg font-medium">Organic Testing</h5>
            </div>
            
            <div className="flex-1 text-center bg-[#141414] p-8 rounded-3xl border border-white/[0.04] w-full">
               <span className="block text-[#ff5c00] mb-3 text-sm font-medium">02</span>
               <h5 className="text-white text-lg font-medium">Data Analysis</h5>
            </div>
            
            <div className="flex-[1.2] text-center bg-[#ff5c00]/[0.05] p-8 rounded-3xl border border-[#ff5c00]/20 w-full shadow-[0_0_30px_rgba(255,92,0,0.05)] pt-10 pb-10">
               <span className="block text-[#ff5c00] mb-3 text-sm font-medium">03</span>
               <h5 className="text-white text-xl font-medium text-[#ff5c00]">Scale via Meta Ads</h5>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
