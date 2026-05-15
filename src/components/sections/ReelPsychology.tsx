import { Section, Container, FadeIn } from '../ui/Section';

export function ReelPsychology() {
  return (
    <Section className="bg-[#0f0f0f] relative overflow-hidden py-24">
      {/* Background Graphic */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#ff5c00]/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          <div>
            <FadeIn>
              <h2 className="text-[10px] tracking-[0.25em] text-[#ff5c00] uppercase mb-6 font-medium">12 / Content Anatomy</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 text-white tracking-tight leading-[1.1]">How We Keep People<br/>Watching.</h3>
              <p className="text-xl text-gray-400 font-light mb-12 leading-relaxed max-w-lg">
                Every second is engineered to get more views naturally. We structure videos to stop the scroll, educate seamlessly, and repeat invisibly.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="space-y-8">
              {[
                { step: "01. The Hook", desc: "Grabbing attention within 3 seconds using relatable problems, emotional moments, or surprising thoughts." },
                { step: "02. The Middle", desc: "Delivering value, building trust, and educating the viewer. We explain the problem and introduce the solution naturally." },
                { step: "03. The Ask", desc: "A conversational, natural invitation to learn more, visit the website, or drop a comment." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-1 h-full min-h-[60px] bg-white/[0.08] group-hover:bg-[#ff5c00]/80 transition-colors rounded-full" />
                  <div className="py-1">
                    <h4 className="text-xl font-medium text-white mb-3">{item.step}</h4>
                    <p className="text-gray-400 font-light leading-relaxed text-lg max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </FadeIn>
          </div>

          <div className="relative">
            <FadeIn delay={0.4}>
              <div className="bg-[#141414] border border-white/[0.04] rounded-[2rem] p-10 md:p-12 relative z-10 shadow-2xl">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#0a0a0a] rounded-full flex items-center justify-center border border-white/[0.02] shadow-xl">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#ff5c00] font-medium rotate-90 absolute">Loop</span>
                </div>
                
                <h4 className="text-2xl font-medium text-white mb-6">Videos That Repeat Seamlessly</h4>
                <p className="text-gray-400 font-light mb-12 text-lg leading-relaxed">
                  We edit specific videos so the end perfectly connects back to the beginning, making people watch it twice without realizing.
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[13px] border-b border-white/[0.05] pb-4">
                    <span className="text-gray-500 uppercase tracking-[0.15em] font-medium">Goal</span>
                    <span className="text-white font-medium">Get Pushed by Instagram</span>
                  </div>
                  <div className="flex justify-between items-center text-[13px] border-b border-white/[0.05] pb-4 pt-2">
                    <span className="text-gray-500 uppercase tracking-[0.15em] font-medium">Metric</span>
                    <span className="text-green-400 font-medium">+150% Watch Time</span>
                  </div>
                  <div className="flex justify-between items-center text-[13px] pt-2">
                    <span className="text-gray-500 uppercase tracking-[0.15em] font-medium">Result</span>
                    <span className="text-white font-medium">Cheaper Ads Later</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
