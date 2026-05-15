import { Section, Container, FadeIn } from '../ui/Section';

export function BrandPositioning() {
  return (
    <Section className="bg-[#111] relative overflow-hidden py-32 md:py-48">
       {/* Cinematic light sweep */}
       <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-bl from-brand/5 via-transparent to-transparent pointer-events-none" />

      <Container className="text-center">
        <FadeIn>
          <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-8 font-medium">The Transformation</p>
          <div className="flex flex-col items-center justify-center gap-10">
            <h3 className="text-4xl md:text-6xl font-semibold text-[#444] line-through opacity-80 decoration-[3px]">Storage Company</h3>
            <div className="w-[1px] h-20 md:h-24 bg-gradient-to-b from-brand/80 to-transparent" />
            <h2 className="text-4xl md:text-6xl lg:text-[76px] font-medium text-white max-w-5xl leading-[1.1] tracking-tight">
              India's Trusted Space & Lifestyle Manager.
            </h2>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
