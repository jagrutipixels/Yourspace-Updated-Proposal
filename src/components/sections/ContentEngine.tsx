import { Section, Container, FadeIn } from '../ui/Section';

export function ContentEngine() {
  const contentTypes = [
    {
      title: "Founder-Led Content",
      count: "3 Reels",
      purpose: "Authority, Trust & Credibility",
      details: ["Why the company started", "Urban space problems", "Scaling logistics", "Future vision"],
      style: "Premium, Documentary-style, Conversational"
    },
    {
      title: "UGC / Human-Centered",
      count: "3 Reels",
      purpose: "Relatability & Performance",
      details: ["Moving struggles", "Small apartment problems", "PG/Student issues", "Clutter frustration"],
      style: "Native social feel, Authentic, Hook-heavy"
    },
    {
      title: "Educational Pillars",
      count: "3 Reels",
      purpose: "Service Education & Retention",
      details: ["How self-storage works", "Warehouse walkthroughs", "Business storage basics", "Logistics systems"],
      style: "Informative, Clear, Authoritative"
    }
  ];

  return (
    <Section className="bg-[#0a0a0a] py-24">
      <Container>
        <FadeIn className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-[10px] tracking-[0.25em] text-[#ff5c00] uppercase mb-6 font-medium">08 / The Content Plan</h2>
          <h3 className="text-4xl md:text-5xl font-medium mb-8 text-white tracking-tight">A Plan That Works Harder For You.</h3>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            We don't just post randomly. Every video we make can be re-used as an ad, a short, or a website video. First, we get people to know you, then we ask for their business.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contentTypes.map((type, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-[#0f0f0f] p-10 rounded-[2rem] border border-white/[0.04] flex flex-col h-full shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <div className="text-[10px] uppercase tracking-widest text-[#ff5c00] mb-8 font-medium border border-[#ff5c00]/30 bg-[#ff5c00]/5 px-4 py-1.5 self-start rounded-full">
                {type.count} / Month
              </div>
              <h4 className="text-3xl font-medium text-white mb-4">{type.title}</h4>
              <p className="text-[#ff5c00] text-sm font-medium mb-10">{type.purpose}</p>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {type.details.map((detail, j) => (
                  <li key={j} className="text-gray-400 font-light text-[15px] flex items-start gap-4">
                    <span className="w-1.5 h-1.5 bg-gray-500/50 rounded-full shrink-0 mt-2" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-8 border-t border-white/[0.04] mt-auto">
                <span className="block text-[10px] uppercase tracking-[0.1em] text-gray-500 mb-2 font-medium">Look & Feel</span>
                <span className="text-gray-100 font-medium text-[15px] leading-snug">{type.style}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
