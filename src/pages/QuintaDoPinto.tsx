import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Clapperboard, Camera } from 'lucide-react';
import heroImage from '../assets/quinta-do-pinto-header.jpg';
import moodboardImage from '@/assets/quinta-moodboard.jpg';
import theIdeaGif from '@/assets/quinta-the-idea.gif';
import beforeImage from '@/assets/quinta-before.png';
import afterImage from '@/assets/quinta-after.png';
import nusLogo from '@/assets/nus-logo-round.png';
import saltLilyThumbnail from '@/assets/quinta-after.png';

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
        <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Hero Background Image - no overlay so image is fully visible */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Quinta do Pinto winery estate at sunrise" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-8 xl:px-[100px] py-20 md:py-32">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px] mx-auto text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 text-white drop-shadow-lg">
                Quinta do Pinto
                <span className="block text-3xl md:text-4xl lg:text-5xl font-normal italic mt-2 bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">
                  AI Content for Wine Brands
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Launch-ready visuals and video — created fast, without losing the soul of the wine.
              </p>
            </div>
          </div>
        </section>

        {/* The Brief */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                    The <span className="italic">brief</span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Quinta do Pinto, a distinguished Portuguese winery with deep roots in the Lisbon wine region, 
                    approached us ahead of a new wine launch. They needed launch content that would translate the 
                    craftsmanship and character of their winemaking into scroll-stopping social visuals — without 
                    the time, cost, or complexity of a traditional production shoot. The timeline was tight, the 
                    expectations high, and the product deserved more than stock photography.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src={moodboardImage} 
                    alt="Creative moodboard for Quinta do Pinto wine content" 
                    className="w-full lg:max-w-[85%] lg:ml-auto rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Did - Redesigned like How It Works */}
        <section className="py-20 md:py-32 bg-muted/20">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                  What <span className="italic">We Did</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Three deliverables designed to maximise launch impact
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 - AI-first creative direction */}
              <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                    <Bot className="w-7 h-7 text-foreground" />
                  </div>
                  <span className="text-5xl font-display font-bold text-muted-foreground/30">01</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-first creative direction</h3>
                <p className="text-muted-foreground">
                  Concept development and visual strategy tailored to the wine's unique identity.
                </p>
              </div>

              {/* Card 2 - Launch video for social */}
              <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                    <Clapperboard className="w-7 h-7 text-foreground" />
                  </div>
                  <span className="text-5xl font-display font-bold text-muted-foreground/30">02</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Launch video for social</h3>
                <p className="text-muted-foreground">
                  A cinematic short-form video designed for Instagram Reels and Stories.
                </p>
              </div>

              {/* Card 3 - 2D stills */}
              <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                    <Camera className="w-7 h-7 text-foreground" />
                  </div>
                  <span className="text-5xl font-display font-bold text-muted-foreground/30">03</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">2D stills for posts, stories, and web</h3>
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
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src={theIdeaGif} 
                    alt="Wine bottle on cement vat texture showing the creative concept" 
                    className="w-full max-w-md md:max-w-[400px] lg:max-w-[480px] md:mx-0 rounded-lg shadow-xl"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                    The <span className="italic">idea</span>
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
            </div>
          </div>
        </section>

        {/* From Bottle to Launch Content */}
        <section className="py-20 md:py-32 bg-muted/20">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                From bottle to <span className="italic">launch content</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
                The client provided standard product photography. We transformed it into a complete visual 
                campaign — maintaining fidelity to the original bottle while elevating every frame.
              </p>
              
              {/* Before/After Comparison */}
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                <div className="space-y-4">
                  <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden border border-border shadow-sm">
                    <img 
                      src={beforeImage} 
                      alt="Original product photo of Quinta do Pinto wine bottle" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">Before — Original product photo</p>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden border border-border shadow-xl">
                    <img 
                      src={afterImage} 
                      alt="Launch-ready AI-enhanced content of Quinta do Pinto wine bottle" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">After — Launch-ready content</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Attention to Detail */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                    Attention to <span className="italic">detail</span>
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
                <div className="relative">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full md:w-[63%] md:ml-auto rounded-lg shadow-xl"
                  >
                    <source src="/videos/quinta-attention-to-detail.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 md:py-32 bg-muted/20">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <div className="mb-16 text-left">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                  Results <span className="italic">Matter</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                  Quinta do Pinto launched with a cohesive content suite: one cinematic video and a set of 
                  high-fidelity stills ready for Instagram, stories, web banners, and beyond.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  The turnaround was fast. The output was consistent. And the content respected the product 
                  — which, for a winery, is the only result that matters.
                </p>
              </div>
              
              {/* Results Videos Grid - full width of container */}
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8 w-full">
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-xl">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/quinta-results-01.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-xl">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/quinta-results-02.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-xl">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/quinta-results-03.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Why This Works for Wine Brands */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                    Why this <span className="italic">works for wine brands</span>
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
                <div className="lg:mt-16">
                  {/* Placeholder image container */}
                  <div className="w-full aspect-[4/3] bg-muted rounded-lg flex items-center justify-center border border-border relative">
                    <span className="text-muted-foreground/50 text-sm">Image placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About NU Studios */}
        <section className="py-20 md:py-32 bg-muted/20">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
                <img 
                  src={nusLogo} 
                  alt="NU Studios logo" 
                  className="w-24 h-24 md:w-auto md:h-auto md:max-h-[180px] rounded-full object-contain mx-auto md:mx-0"
                />
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                    About <span className="italic">NU Studios</span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    NU Studios is an AI-first creative agency that creates and automates content. We combine 
                    18 years of VFX and visual storytelling experience with modern AI tools to deliver 
                    agency-quality work — faster and at a fraction of traditional costs. Our focus is on 
                    craftsmanship, restraint, and results that respect your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to transform your <span className="italic">wine content?</span>
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

        {/* Project Navigation */}
        <ProjectNavigation 
          nextProject={{
            title: 'Salt Lily Jewellery',
            slug: '/work/salt_lily_showcase',
            thumbnail: saltLilyThumbnail
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default QuintaDoPinto;
