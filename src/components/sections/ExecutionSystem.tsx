import { Section, Container, FadeIn } from '../ui/Section';

export function ExecutionSystem() {
  const roadmap = [
    { month: "Phase 01", title: "Establishing Presence", tasks: ["Visual Identity Refresh", "Developing Trust-Focused Content", "Creating Founder & Team Videos", "Deploying Awareness Campaigns"] },
    { month: "Phase 02", title: "Testing & Optimization", tasks: ["Analyzing Performance Data", "Identifying Top Content Formats", "Testing Organic Winners as Ads", "Refining Creative Angles"] },
    { month: "Phase 03", title: "Scaling Operations", tasks: ["Developing Service-Specific Videos", "Expanding Ad Reach Across Hubs", "Deploying Conversion-Focused Ads", "Scaling Budgets on Winning Creatives"] },
  ];

  return (
    <Section className="bg-[#0a0a0a] overflow-hidden relative py-24">
       <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.04] -translate-y-1/2 hidden lg:block z-0" />
      <Container className="relative z-10">
        <FadeIn className="text-center mb-24">
          <h2 className="text-[10px] tracking-[0.25em] text-[#ff5c00] uppercase mb-6 font-medium">10 / The Blueprint</h2>
          <h3 className="text-5xl font-medium tracking-tight text-white mb-6">Strategic Execution Roadmap.</h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmap.map((stage, i) => (
            <FadeIn key={i} delay={i * 0.2} className="relative group">
              <div className="bg-[#0f0f0f] border border-white/[0.04] p-10 rounded-[2rem] h-full relative z-10 hover:border-white/[0.08] transition-colors">
                 <div className="text-[#ff5c00] text-[10px] tracking-widest font-medium mb-3 uppercase">{stage.month}</div>
                 <h4 className="text-3xl font-medium text-white mb-8 leading-tight">{stage.title}</h4>
                 <ul className="space-y-6">
                   {stage.tasks.map((task, j) => (
                     <li key={j} className="flex gap-4 text-gray-400 font-light text-[15px] items-start">
                       <span className="text-white/[0.15] font-medium font-mono text-sm mt-0.5">0{j+1}</span>
                       <span className="leading-relaxed">{task}</span>
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
