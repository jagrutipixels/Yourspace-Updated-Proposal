import { Section, Container, FadeIn } from '../ui/Section';
import { motion } from 'motion/react';

export function MarketOpportunity() {
  return (
    <Section className="bg-[#0a0a0a] relative py-24 border-b border-white/[0.04]">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-24">
          <FadeIn>
            <h2 className="text-[10px] tracking-[0.25em] text-[#ff5c00] uppercase mb-6 font-medium">02 / Market Reality</h2>
            <h3 className="text-5xl md:text-6xl font-medium mb-8 text-white tracking-tight leading-[1.1]">The Demand is Massive.<br />So is the Noise.</h3>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Having extra space used to be a luxury, but in busy cities today, it's a necessity. While the market is growing rapidly, so is the competition. To win, you need content that makes you the obvious choice.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              metric: "2.5X",
              title: "Business Growth",
              desc: "As businesses expand, they need storage. Your content needs to position you as their premium B2B logistics partner, not just a storage unit.",
              delay: 0.1
            },
            {
              metric: "40%",
              title: "More People Moving",
              desc: "People moving cities are stressed. High-quality video content builds the trust they need to hand their entire life over to your team.",
              delay: 0.2
            },
            {
              metric: "Smaller",
              title: "City Homes",
              desc: "As apartments shrink, storage becomes a lifestyle need. Your brand needs to be top-of-mind before they even realize they need space.",
              delay: 0.3
            }
          ].map((stat, i) => (
            <FadeIn key={i} delay={stat.delay} className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-[#ff5c00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
              <div className="relative p-10 h-full border border-white/[0.04] bg-[#0f0f0f] rounded-[2rem] overflow-hidden group-hover:border-[#ff5c00]/30 transition-colors flex flex-col">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#ff5c00]/10 rounded-full blur-3xl" />
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: stat.delay + 0.2 }}
                  className="text-5xl lg:text-7xl font-medium text-white mb-6 tracking-tight"
                >
                  {stat.metric}
                </motion.div>
                <h4 className="text-2xl font-medium text-white mb-4">{stat.title}</h4>
                <p className="text-[#888] text-[15px] leading-relaxed font-light mt-auto">{stat.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
