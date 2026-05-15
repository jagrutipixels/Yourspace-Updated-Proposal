import { Section, Container, FadeIn } from '../ui/Section';

export function InvestmentValue() {
  return (
    <Section className="bg-[#0f0f0f] border-t border-white/[0.04] relative overflow-hidden py-24 md:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-[#ff5c00]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-[10px] tracking-[0.25em] text-[#ff5c00] uppercase mb-6 font-medium">15 / The Investment</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-12 text-white tracking-tight leading-[1.1]">Building a Brand That Grows.</h3>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-[#141414]/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-16 border border-white/[0.08] relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 p-8 md:p-12 flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-medium">Monthly Retainer</span>
              <span className="text-3xl md:text-5xl font-medium text-white tracking-tight">₹60,000<span className="text-lg md:text-xl text-gray-500 font-light ml-2">/mo</span></span>
            </div>

            <div className="text-left max-w-2xl mt-20 md:mt-0">
               <p className="text-xl md:text-3xl font-light text-gray-300 leading-[1.4] mb-12">
                 You are not just getting "videos." <br className="hidden md:block" />
                 You are investing in a <span className="text-white font-medium border-b-2 border-[#ff5c00]/30 pb-1">complete creative infrastructure.</span>
               </p>

               <ul className="space-y-6 mb-12">
                 {[
                   "A consistent supply of professional video content.",
                   "High-quality storytelling to build brand trust.",
                   "A structured approach to support your overall marketing.",
                   "Developing a premium visual presence for your service."
                 ].map((item, i) => (
                   <li key={i} className="flex gap-5 items-start">
                     <span className="text-[#ff5c00] mt-1 text-lg">✦</span>
                     <span className="text-gray-400 text-[17px] leading-relaxed">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
            
            <div className="pt-10 border-t border-white/[0.06] text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <p className="text-white text-lg font-medium mb-2">Let's build the ecosystem.</p>
                <p className="text-[15px] text-gray-500 font-light">A structured creative partnership.</p>
              </div>
              <button className="px-8 py-4 bg-[#ff5c00] hover:bg-[#ff5c00]/90 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,92,0,0.2)] hover:shadow-[0_0_30px_rgba(255,92,0,0.4)] whitespace-nowrap">
                Initialize Partnership
              </button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
