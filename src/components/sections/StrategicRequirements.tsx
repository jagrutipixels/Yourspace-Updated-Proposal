import { Section, Container, FadeIn } from '../ui/Section';
import { Database, Users } from 'lucide-react';

export function StrategicRequirements() {
  return (
    <Section className="bg-dark">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[10px] tracking-[0.25em] text-[#ff5c00] uppercase mb-6 font-medium">12 / Operations</h2>
          <h3 className="text-4xl font-medium">What We Need To Start.</h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FadeIn delay={0.1} className="bg-charcoal/50 border border-white/5 p-10 rounded-3xl">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Database className="w-5 h-5 text-brand" />
            </div>
            <h4 className="text-2xl font-medium text-white mb-4">Data Access</h4>
            <p className="text-gray-400 font-light mb-6">
              To make sure our ads bring in the best results, we need to see what has worked (and what hasn't) in the past. We use this to improve our plan.
            </p>
            <ul className="space-y-3">
              {['Meta Ads Manager Access', 'Current Analytics & Demographics', 'Instagram Insights', 'Historical Campaign Data'].map((req, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {req}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-charcoal/50 border border-white/5 p-10 rounded-3xl">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Users className="w-5 h-5 text-brand" />
            </div>
            <h4 className="text-2xl font-medium text-white mb-4">Approval System</h4>
            <p className="text-gray-400 font-light mb-6">
              To maintain content consistency, high-velocity production, and seamless communication, we implement a streamlined feedback loop.
            </p>
            <div className="bg-dark p-6 rounded-2xl border border-white/5">
              <h5 className="text-white font-medium mb-2">Dedicated Internal POC</h5>
              <p className="text-sm text-gray-500">
                Assigning a single Point of Contact from Your Space Doctor ensures rapid approvals, coordinated shoot planning, and strategic alignment without bottlenecks.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
