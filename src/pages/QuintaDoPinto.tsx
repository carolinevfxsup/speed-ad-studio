import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const QuintaDoPinto = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px] py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
                Quinta do Pinto
                <span className="block text-3xl md:text-4xl lg:text-5xl font-normal italic mt-2 bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">
                  AI Content for Wine Brands
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Launch-ready visuals and video — created fast, without losing the soul of the wine.
              </p>
            </div>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
            <div className="w-full h-full bg-gradient-to-br from-primary/5 via-muted/10 to-secondary/5" />
          </div>
        </section>

        {/* The Brief */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                The brief
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Quinta do Pinto, a distinguished Portuguese winery with deep roots in the Lisbon wine region, 
                approached us ahead of a new wine launch. They needed launch content that would translate the 
                craftsmanship and character of their winemaking into scroll-stopping social visuals — without 
                the time, cost, or complexity of a traditional production shoot. The timeline was tight, the 
                expectations high, and the product deserved more than stock photography.
              </p>
            </div>
          </div>
        </section>

        {/* What We Did */}
        <section className="py-20 md:py-32 bg-muted/20">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
                What we did
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">01</span>
                  </div>
                  <h3 className="text-xl font-semibold">AI-first creative direction</h3>
                  <p className="text-muted-foreground">
                    Concept development and visual strategy tailored to the wine's unique identity.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">02</span>
                  </div>
                  <h3 className="text-xl font-semibold">Launch video for social</h3>
                  <p className="text-muted-foreground">
                    A cinematic short-form video designed for Instagram Reels and Stories.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">03</span>
                  </div>
                  <h3 className="text-xl font-semibold">2D stills for posts, stories, and web</h3>
                  <p className="text-muted-foreground">
                    A cohesive set of product imagery for multi-platform use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Idea */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                The idea
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                The wine is aged in cement vats — a distinctive winemaking choice that speaks to both tradition 
                and innovation. We used this as the conceptual anchor for the entire visual direction.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Rather than overdesigning, we kept the aesthetic restrained: raw textures, natural lighting, 
                and compositions that let the bottle and label take centre stage. The cement vat became a 
                subtle backdrop — present but never overwhelming. The result is content that feels grounded, 
                authentic, and premium.
              </p>
            </div>
          </div>
        </section>

        {/* From Bottle to Launch Content */}
        <section className="py-20 md:py-32 bg-muted/20">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                From bottle to launch content
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
                The client provided standard product photography. We transformed it into a complete visual 
                campaign — maintaining fidelity to the original bottle while elevating every frame.
              </p>
              
              {/* Before/After Comparison Placeholder */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Before</p>
                    <p className="text-muted-foreground/60">Original product photo</p>
                  </div>
                </div>
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 via-secondary/10 to-muted rounded-lg flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">After</p>
                    <p className="text-muted-foreground/60">Launch-ready content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Attention to Detail */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Attention to detail
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                AI-generated content often fails in the details: garbled label text, distorted typography, 
                unnatural reflections, or proportions that feel off. These failures break trust instantly — 
                especially for premium products.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                We approached every asset with a VFX compositor's eye. Label legibility was protected. 
                Typography remained crisp. Glass reflections followed optical logic. The bottle's proportions 
                were preserved across every angle and environment.
              </p>
              <ul className="space-y-4">
                {[
                  'Label text remains fully legible in all outputs',
                  'Typography preserved without AI artefacts',
                  'Glass reflections follow natural light behaviour',
                  'Bottle proportions consistent across all assets',
                  'Subtle environmental integration, not compositing errors',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 md:py-32 bg-muted/20">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Results
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                Quinta do Pinto launched with a cohesive content suite: one cinematic video and a set of 
                high-fidelity stills ready for Instagram, stories, web banners, and beyond.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The turnaround was fast. The output was consistent. And the content respected the product 
                — which, for a winery, is the only result that matters.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Works for Wine Brands */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Why this works for wine brands
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Wineries operate on seasonal rhythms. Harvests, releases, and events don't wait for 
                traditional production timelines. AI-powered content creation offers a different model:
              </p>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Speed without compromise</h3>
                  <p className="text-muted-foreground">
                    Launch content in days, not weeks — without sacrificing visual quality.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Repeatability</h3>
                  <p className="text-muted-foreground">
                    Once we establish your visual language, new releases become faster and more consistent.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Automation-ready</h3>
                  <p className="text-muted-foreground">
                    Content pipelines can be systematised for ongoing social presence with minimal effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About NU Studios */}
        <section className="py-20 md:py-32 bg-muted/20">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                About NU Studios
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                NU Studios is an AI-first creative agency that creates and automates content. We combine 
                18 years of VFX and visual storytelling experience with modern AI tools to deliver 
                agency-quality work — faster and at a fraction of traditional costs. Our focus is on 
                craftsmanship, restraint, and results that respect your brand.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to transform your wine content?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                Book a discovery call to discuss your next launch, or reach out to start a conversation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="gap-2"
                >
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <a href="mailto:hello@nustudios.co.uk">
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuintaDoPinto;
