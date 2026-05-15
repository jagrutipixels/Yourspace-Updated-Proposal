import { Section, Container, FadeIn } from '../ui/Section';
import { Map, FileSignature, Camera, ShieldCheck } from 'lucide-react';

export function ExecutionFramework() {
  return (
    <Section className="bg-[#0a0a0a] relative overflow-hidden py-24">
      <Container>
        <FadeIn className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-[10px] tracking-[0.25em] text-[#ff5c00] uppercase mb-6 font-medium">14 / Execution Flow</h2>
          <h3 className="text-4xl md:text-5xl font-medium mb-6 text-white tracking-tight">How We Make It Happen smoothly.</h3>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Creativity needs a system. Here is exactly how we plan, prepare, and shoot your content every single month without wasting your time.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <FadeIn delay={0.1} className="bg-[#0f0f0f] p-10 rounded-[2rem] border border-white/[0.04] hover:border-white/[0.08] transition-colors">
            <div className="flex items-center gap-6 mb-6">
               <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center shrink-0">
                 <Map className="w-6 h-6 text-[#ff5c00]" />
               </div>
               <h4 className="text-2xl font-medium text-white">1. Full-Day Location Scouting</h4>
            </div>
            <p className="text-gray-400 font-light text-[15px] leading-relaxed md:pl-[80px]">
              Before we shoot, we conduct a full-day "recce" (scouting visit) to your offices and warehouses. We figure out the best locations, lighting, and travel routes so that the actual shoot day is fast and flawless.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-[#0f0f0f] p-10 rounded-[2rem] border border-white/[0.04] hover:border-white/[0.08] transition-colors">
            <div className="flex items-center gap-6 mb-6">
               <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center shrink-0">
                 <FileSignature className="w-6 h-6 text-[#ff5c00]" />
               </div>
               <h4 className="text-2xl font-medium text-white">2. Script Approval & Lock-in</h4>
            </div>
            <p className="text-gray-400 font-light text-[15px] leading-relaxed md:pl-[80px]">
              We collaborate on a shared Google Doc with your Point of Contact. Scripts are finalized <strong>1 week before</strong> the shoot. Once approved, the content is locked to ensure a smooth shoot day (no last-minute additions on set).
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="bg-[#0f0f0f] p-10 rounded-[2rem] border border-white/[0.04] hover:border-white/[0.08] transition-colors">
            <div className="flex items-center gap-6 mb-6">
               <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center shrink-0">
                 <Camera className="w-6 h-6 text-[#ff5c00]" />
               </div>
               <h4 className="text-2xl font-medium text-white">3. Focused 6-Hour Shoot</h4>
            </div>
            <p className="text-gray-400 font-light text-[15px] leading-relaxed md:pl-[80px]">
              Because everything is pre-planned, we only need a strict 6-hour window to capture an entire month's worth of videos. 
              <span className="block text-sm text-gray-500 italic mt-4 border-t border-white/[0.04] pt-4">
                *Note: Meals for the production crew and creators on set are to be provided by the company.
              </span>
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="bg-[#0f0f0f] p-10 rounded-[2rem] border border-white/[0.04] hover:border-[#ff5c00]/30 transition-colors">
            <div className="flex items-center gap-6 mb-6">
               <div className="w-14 h-14 rounded-2xl bg-[#ff5c00]/10 border border-[#ff5c00]/20 flex items-center justify-center shrink-0">
                 <ShieldCheck className="w-6 h-6 text-[#ff5c00]" />
               </div>
               <h4 className="text-2xl font-medium text-white">4. Getting Started</h4>
            </div>
            <p className="text-gray-400 font-light text-[15px] leading-relaxed md:pl-[80px]">
              To officially start the project, begin script development, book our creators, and block high-end equipment, a <strong className="text-white">60% advance payment</strong> is required to commence the monthly retainer.
            </p>
          </FadeIn>

        </div>
      </Container>
    </Section>
  );
}
