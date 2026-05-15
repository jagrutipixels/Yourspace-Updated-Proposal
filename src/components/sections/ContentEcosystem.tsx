import { Section, Container, FadeIn } from '../ui/Section';

export function ContentEcosystem() {
  return (
    <Section className="bg-[#0a0a0a] py-24">
      <Container>
        <FadeIn className="mb-24 text-center">
          <h2 className="text-[10px] tracking-[0.25em] text-brand uppercase mb-6 font-medium">06 / Modern Architecture</h2>
          <h3 className="text-4xl md:text-5xl font-medium text-white">How We Reach People.</h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              funnel: "Step 1: Get Noticed",
              focus: "Make them stop and feel something",
              items: ["High-Quality Short Videos", "Relatable Moving Struggles", "Mumbai/City Lifestyle Stories", "Highlighting Space Problems"]
            },
            {
              funnel: "Step 2: Build Trust",
              focus: "Show them how good we are",
              items: ["Founder Insights", "Behind The Scenes Logistics", "Happy Customer Stories", "Helpful Tips & Guides"]
            },
            {
              funnel: "Step 3: Get Customers",
              focus: "Give them a reason to choose us",
              items: ["Customer Testimonials", "Clear Service Ads", "Business Success Stories", "Direct Offers"]
            }
          ].map((level, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-[#0f0f0f] p-10 lg:p-12 rounded-[2rem] border border-white/[0.04] relative overflow-hidden group hover:border-white/[0.08] transition-colors">
              {/* Giant faint number */}
              <div className="absolute top-4 right-8 text-[120px] font-bold text-white/[0.03] leading-none pointer-events-none group-hover:text-white/[0.05] transition-colors">
                {i + 1}
              </div>
              
              <div className="relative z-10">
                <h4 className="text-brand/90 text-xs tracking-[0.15em] uppercase mb-4 font-bold">{level.funnel}</h4>
                <p className="text-white text-2xl lg:text-3xl font-medium mb-12 leading-tight max-w-[220px]">{level.focus}</p>
                <ul className="space-y-5">
                  {level.items.map((item, j) => (
                    <li key={j} className="text-gray-400/80 font-light flex items-center gap-4 text-sm md:text-base">
                      <span className="w-1.5 h-1.5 bg-gray-500/50 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
