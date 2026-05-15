import { Section, Container, FadeIn } from '../ui/Section';

export function ExecutiveSummary() {
  return (
    <Section className="bg-charcoal border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand/5 to-transparent pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <FadeIn>
              <h2 className="text-sm tracking-[0.2em] text-brand uppercase mb-4">01 / Executive Summary</h2>
              <h3 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
                From a basic service to a recognizable brand.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Your Space Doctor has built a strong foundation across Mumbai, Pune, Bengaluru, and beyond. You have the trucks, the warehouses, and the local search presence.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                But right now, the brand just looks like another <span className="text-gray-200">"storage company."</span> To grow across India, we need to make it a brand people <span className="text-brand-light font-medium">know, trust, and feel connected to.</span>
              </p>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Current State", desc: "Great service and warehouses, but basic social media that looks like everyone else.", icon: "box" },
                { title: "The Gap", desc: "Videos don't connect with people, founders aren't seen, brand doesn't feel premium.", icon: "alert-circle" },
                { title: "Our Vision", desc: "High-quality videos, stories about real people, and showing your team's expertise.", icon: "eye" },
                { title: "The Outcome", desc: "A trusted national brand for moving and storage that people remember.", icon: "map" },
              ].map((item, idx) => (
                <div key={idx} className="bg-dark/50 p-8 rounded-2xl border border-white/5 hover:border-brand/30 transition-colors group">
                  <h4 className="text-xl font-medium text-white mb-3 group-hover:text-brand-light transition-colors">{item.title}</h4>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
