import { Section, Container, FadeIn } from '../ui/Section';

export function AudiencePsychology() {
  const audiences = [
    {
      title: "Urban Families",
      trigger: "Relocation Stress & Life Changes",
      psyche: "They want peace of mind, safety, and a decluttered life. Storage implies a fresh start."
    },
    {
      title: "SMEs & Startups",
      trigger: "Scaling & Inventory Management",
      psyche: "They need agility, operational efficiency, and a trusted logistics partner."
    },
    {
      title: "Students",
      trigger: "Transitional Phases",
      psyche: "They need affordability and ease during high-stress exam or move-out weeks."
    }
  ];

  return (
    <Section className="bg-dark pt-12 pb-24">
      <Container>
        <div className="mb-24 max-w-4xl">
          <FadeIn>
            <h2 className="text-xs tracking-[0.2em] text-brand uppercase mb-6 font-medium">05 / The Psychology</h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-6 leading-[1.1] text-white tracking-tight">People don't buy space.<br />They buy state-of-mind.</h3>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {audiences.map((aud, i) => (
            <FadeIn key={i} delay={0.1 * i} className="group">
              <div className="h-full border-b border-white/[0.08] pb-10 flex flex-col">
                <h4 className="text-3xl font-medium text-white mb-8">{aud.title}</h4>
                <div className="space-y-6 flex-1">
                  <div>
                    <span className="block text-gray-500/70 uppercase tracking-widest text-[10px] mb-2 font-medium">Trigger</span>
                    <span className="text-gray-200 text-lg leading-snug">{aud.trigger}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500/70 uppercase tracking-widest text-[10px] mb-2 font-medium">Psychology</span>
                    <span className="text-gray-400 text-lg font-light leading-relaxed">{aud.psyche}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
