import { Section, Container, FadeIn } from '../ui/Section';
import { Mail, Instagram, Globe, Phone } from 'lucide-react';

export function Footer() {
  return (
    <Section id="contact" className="bg-[#050505] border-t border-white/5 !py-20 overflow-hidden relative">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
              Let's build<br />something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-amber-500">exceptional.</span>
            </h2>
            <p className="text-gray-400 font-light max-w-md mb-8 text-lg">
              Ready to transform Your Space Doctor into India's leading urban lifestyle authority? Let's discuss this execution plan in detail.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="bg-charcoal/80 backdrop-blur-md p-10 rounded-3xl border border-white/10 space-y-8 relative z-10">
            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">Reach Out</h3>
            
            <a href="mailto:abhishek.gujar1202@gmail.com" className="flex items-center gap-5 text-gray-300 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center border border-white/5 group-hover:border-brand/30 group-hover:bg-brand/10 transition-colors">
                <Mail className="w-5 h-5 group-hover:text-brand transition-colors" />
              </div>
              <span className="font-light text-lg">abhishek.gujar1202@gmail.com</span>
            </a>
            
            <a href="tel:+917400310443" className="flex items-center gap-5 text-gray-300 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center border border-white/5 group-hover:border-brand/30 group-hover:bg-brand/10 transition-colors">
                <Phone className="w-5 h-5 group-hover:text-brand transition-colors" />
              </div>
              <span className="font-light text-lg">+91 74003 10443</span>
            </a>

            <a href="https://www.instagram.com/icreatepixels" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-gray-300 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center border border-white/5 group-hover:border-brand/30 group-hover:bg-brand/10 transition-colors">
                <Instagram className="w-5 h-5 group-hover:text-brand transition-colors" />
              </div>
              <span className="font-light text-lg">@icreatepixels</span>
            </a>

            <a href="https://www.icreatepixels.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-gray-300 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center border border-white/5 group-hover:border-brand/30 group-hover:bg-brand/10 transition-colors">
                <Globe className="w-5 h-5 group-hover:text-brand transition-colors" />
              </div>
              <span className="font-light text-lg">www.icreatepixels.in</span>
            </a>
          </FadeIn>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-brand" />
             <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">iCreatePixels</p>
          </div>
          <p className="text-gray-600 text-xs uppercase tracking-widest">Strategic Proposal for Your Space Doctor © {new Date().getFullYear()}</p>
        </div>
      </Container>
    </Section>
  );
}
