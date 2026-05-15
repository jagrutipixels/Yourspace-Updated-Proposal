import { Section, Container, FadeIn } from '../ui/Section';

export function CinematicCampaigns() {
  const campaigns = [
    { title: "Life Between Moves", concept: "A highly emotional portrayal of transitional life stages. Moving isn't just logistics; it's leaving an old life for a new one." },
    { title: "Mumbai Has No Space", concept: "Fast-paced, high-energy, slightly anxious edit of tight urban living, resolving gracefully into the serenity of a Your Space Doctor unit." },
    { title: "Behind Every Box Is A Story", concept: "Macro shots of heirlooms, documents, and business inventory. Focusing on the 'value' of what is stored rather than the 'box' itself." },
    { title: "India's Expanding Grid", concept: "A visually striking network visualization campaign showing trucks moving at night between our cities. Positioning us as a national backend." },
  ];

  return (
    <Section className="bg-dark">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-sm tracking-[0.2em] text-brand uppercase mb-4">09 / Creative Execution</h2>
           <h3 className="text-4xl md:text-5xl font-medium mb-6">Cinematic Campaigns.</h3>
           <p className="text-xl text-gray-400">Moving past 'functional' videos to create brand films that feel like streaming documentaries.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campaigns.map((camp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-charcoal/30 border border-white/5 rounded-3xl p-8 hover:bg-charcoal transition-colors">
                 <h4 className="text-2xl font-medium text-white mb-4">{camp.title}</h4>
                 <p className="text-gray-400 leading-relaxed font-light">{camp.concept}</p>
                 <div className="mt-8 flex gap-2">
                   <span className="text-[10px] uppercase tracking-widest text-brand px-3 py-1 rounded-full border border-brand/20">Creative concept</span>
                 </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
