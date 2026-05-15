import { Section, Container, FadeIn } from '../ui/Section';

export function ContentPillars() {
  const pillars = [
    { title: "City Space Struggles", style: "RELATABLE", type: "SHORT VIDEOS", desc: "Showing how hard it is to fit a whole life into a small apartment in Mumbai or Bengaluru." },
    { title: "Behind The Scenes", style: "AUTHENTIC & REAL", type: "DOCS/SHORTS", desc: "Showing the massive warehouses, strict security, and how your trucks move across cities." },
    { title: "Happy Customers", style: "EMOTIONAL", type: "STORYTELLING", desc: "Showing the relief people feel when they declutter their homes and lives." },
    { title: "Expert Insights", style: "KNOWLEDGEABLE", type: "CONVERSATIONS", desc: "Interviews about business growth, managing city space, and logistics expertise." },
  ];

  return (
    <Section className="bg-[#0a0a0a] py-24">
      <Container>
        <FadeIn className="mb-20">
          <h2 className="text-[10px] tracking-[0.25em] text-brand uppercase mb-6 font-medium">07 / Storytelling</h2>
          <h3 className="text-4xl md:text-5xl font-medium mb-6 text-white tracking-tight">What We Will Talk About.</h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <FadeIn key={i} delay={i * 0.1} className="group relative overflow-hidden rounded-[24px] bg-[#0f0f0f] border border-white/[0.04] p-8 flex flex-col h-full hover:border-[#222] transition-colors">
               <div className="flex justify-end mb-8">
                 <span className="text-[9px] uppercase tracking-widest text-[#ff5c00] bg-[#ff5c00]/[0.08] px-3 py-1.5 rounded-md font-medium">{pillar.type}</span>
               </div>
               <h4 className="text-2xl font-medium text-white mb-6 leading-tight">{pillar.title}</h4>
               <p className="text-[15px] text-[#888] mb-12 flex-1 font-light leading-relaxed">{pillar.desc}</p>
               <div className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-medium mt-auto">Style: <span className="text-white ml-2">{pillar.style}</span></div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
