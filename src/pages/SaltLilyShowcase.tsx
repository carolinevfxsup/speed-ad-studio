import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

export default function SaltLilyShowcase() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Video Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-muted/30 to-background">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px] relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 max-w-5xl mx-auto leading-tight">
            Scaling Jewellery Content Without Losing Brand Integrity
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
            A full visual and automation system built for Salt Lily—designed to create, manage, and distribute premium jewellery content at scale.
          </p>
          <p className="text-lg text-white/70 mb-10">
            From photoreal AI imagery to hands-off social and SEO automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('showcase')}
              className="text-lg px-8"
            >
              View the Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.location.href = '/#contact'}
              className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Book a Call
            </Button>
          </div>
        </div>
        {/* Placeholder for video background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
      </section>

      {/* Brand Context Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              The Brand We Built This For
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Salt Lily is a modern waterproof jewellery brand with an established Shopify store and an active, engaged Instagram presence. Their visual identity is refined, their audience loyal.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The challenge wasn't creating content—it was producing enough high-quality visuals at scale while maintaining the brand consistency their customers expect. Every piece needed to feel intentional, premium, and unmistakably Salt Lily.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Why Jewellery Is One of the Hardest Categories for AI
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Jewellery presents unique challenges that expose the limitations of most AI image generation. Reflections on polished metal surfaces, accurate colour representation of gold, silver, and rose gold, the way light interacts with gemstones—these details matter.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Add to that the complexity of jewellery on skin—proportion, scale, the trust signals that come from seeing how a piece actually looks when worn—and you have a category where generic AI approaches consistently fail.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our approach is controlled, human-directed AI. Every output is reviewed, refined, and approved before it represents the brand. Automation serves the creative vision—not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Showcase Section I - Social-Ready Imagery */}
      <section id="showcase" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 max-w-3xl">
            Feed-Ready Imagery That Matches the Brand
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            AI-assisted imagery created specifically for Salt Lily's Instagram grid, matching the look and quality of their existing posts. Each image is designed to feel native to their feed—not like an outsourced asset.
          </p>
          
          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Before: Product Reference</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">Basic product photography</p>
            </div>
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border-2 border-primary/20">
                <span className="text-muted-foreground">After: Editorial AI Imagery</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">Final social-ready visual</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section II - Models to Video */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 max-w-3xl">
            From Still Images to Scroll-Stopping Video
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            Still imagery transformed into video content suitable for Reels, TikTok, and paid social—without traditional filming. The same brand integrity, now in motion.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Still image of jewellery on model</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">Source still</p>
            </div>
            <div className="space-y-4">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border-2 border-primary/20">
                <span className="text-muted-foreground">Cinematic video ad</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">Resulting short-form video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section III - Website Imagery */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 max-w-3xl">
            Product Imagery Built for Conversion
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            Lifestyle and close-up images designed for Shopify product and collection pages. These visuals support customer trust, clarity, and conversion for jewellery e-commerce.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Product {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Content Reference */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              From System to Published Content
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This system powers real posts already live on Salt Lily's Instagram, including carousel posts and campaign visuals. The content isn't theoretical—it's performing.
            </p>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mt-8">
              <span className="text-muted-foreground">Live Instagram post example</span>
            </div>
          </div>
        </div>
      </section>

      {/* Automation & Distribution System */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 max-w-3xl">
            The System Behind the Aesthetics
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            Creativity is manual. Distribution is automated. The pipeline handles cloud storage, spreadsheet-based review, automated posting to Instagram, TikTok, Facebook, and automated blog and SEO publishing.
          </p>
          
          {/* Flow Diagram */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 py-12">
            {['Create', 'Review', 'Approve', 'Store', 'Distribute'].map((step, i) => (
              <div key={step} className="flex items-center gap-4 md:gap-8">
                <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium">
                  {step}
                </div>
                {i < 4 && <ArrowRight className="h-5 w-5 text-muted-foreground hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Value */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 max-w-3xl">
            What This Unlocks for Jewellery Brands
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {[
              'Consistent premium visuals',
              'Faster campaign cycles',
              'Fewer photoshoots',
              'Scalable content output',
              'Reduced creative bottlenecks',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px] text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Built for Brands Like Yours
          </h2>
          <p className="text-xl text-background/80 mb-10 max-w-2xl mx-auto">
            Salt Lily is one example of a scalable system designed for jewellery brands that care about quality and growth.
          </p>
          <Button 
            size="lg" 
            onClick={() => window.location.href = '/#contact'}
            className="text-lg px-10 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Book a Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
