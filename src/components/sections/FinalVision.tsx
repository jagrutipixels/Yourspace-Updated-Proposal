import { Section, Container, FadeIn } from '../ui/Section';

export function FinalVision() {
  return (
    <Section className="bg-dark min-h-[80vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505] z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand/5 blur-[150px] rounded-full" />
      </div>

      <Container className="relative z-20 text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-12 text-white leading-[1.1]">
            We don't just want people to <span className="text-gray-500 italic font-light">know</span> Your Space Doctor.
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-16 text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-amber-500 leading-[1.1]">
            We want them to feel it.
          </h2>
        </FadeIn>

        <FadeIn delay={0.4} className="max-w-2xl mx-auto">
          <p className="text-xl text-gray-400 font-light mb-16">
            From a logistics provider to an urban lifestyle movement. This is the strategic creative partnership that scales your brand alongside your warehouses.
          </p>

          <button className="px-10 py-5 rounded-full bg-white text-dark font-medium tracking-wide hover:bg-gray-200 transition-colors inline-block w-full sm:w-auto">
            Discuss the Retainership
          </button>
        </FadeIn>
      </Container>
      
      {/* Footer minimal */}
      <div className="absolute bottom-6 left-0 w-full text-center text-gray-700 text-sm tracking-widest uppercase">
        Confidential Strategic Proposal • 2026
      </div>
    </Section>
  );
}
