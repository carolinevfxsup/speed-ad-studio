import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Upload, FolderOpen, Hash, UserCheck, Send, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

// Assets
import heroAfter from '@/assets/salt-lily/Gemini_Generated_Image_gx9357gx9357gx93_1.jpeg';
import femmeHer from '@/assets/salt-lily/FEMME_HER.png';
import jewelryProduct from '@/assets/salt-lily/jewelry_prodoct.jpg';
import necklaceAndHoops from '@/assets/salt-lily/necklace_and_hoops.png';
import sourceStill from '@/assets/salt-lily/baae6b23-4f9e-49d9-8b07-9c5b8efbd951.jpg';
import femmeProductAfter from '@/assets/salt-lily/Salt_lily_FEMME_product.png';
import femmeProductBefore from '@/assets/salt-lily/Salt_lily_FEMME_product_earring.png';
import socialsImg from '@/assets/salt-lily/socials.webp';
import quintaHeader from '@/assets/quinta-do-pinto-header.jpg';
import palmeiralHeader from '@/assets/palmeiral-header.avif';

export default function SaltLilyShowcase() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* 1) HERO — THE BRAND WE BUILT THIS FOR */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 max-w-5xl leading-tight">
            The Brand We <span className="italic">Built This For</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            A full visual and automation system built for Salt Lily—designed to create, manage, and distribute premium jewellery content at scale.
          </p>
        </div>

        {/* Before/After Slider - full width */}
        <div className="w-full">
          {/* NOTE: IMG_5326.HEIC is not browser-compatible. Placeholder used for "before". 
               Replace with a JPG/PNG version when available. */}
          <BeforeAfterSlider
            beforeImage={femmeProductBefore}
            afterImage={heroAfter}
            beforeLabel="Before"
            afterLabel="After"
            className="w-full max-h-[85vh]"
          />
          <p className="text-center text-sm text-muted-foreground mt-3 italic">
            ⚠️ The "Before" image (IMG_5326.HEIC) needs a JPG/PNG version — HEIC is not supported in browsers. Using a placeholder for now.
          </p>
        </div>
      </section>

      {/* Brand Context */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Salt Lily is a modern waterproof jewellery brand with an established Shopify store and an active, engaged Instagram presence. Their visual identity is refined, their audience loyal.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The challenge wasn't creating content—it was producing enough high-quality visuals at scale while maintaining the brand consistency their customers expect.
            </p>
          </div>
        </div>
      </section>

      {/* 2) WHY JEWELLERY IS HARD */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Why Jewellery Is One of the <span className="italic">Hardest Categories for AI</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Jewellery presents unique challenges that expose the limitations of most AI image generation. Reflections on polished metal surfaces, accurate colour representation of gold, silver, and rose gold, the way light interacts with gemstones—these details matter.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach is controlled, human-directed AI. Every output is reviewed, refined, and approved before it represents the brand.
              </p>
            </div>
            <div>
              <img 
                src={femmeHer} 
                alt="FEMME jewellery editorial" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3) FEED-READY IMAGERY */}
      <section id="showcase" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 max-w-3xl">
            Feed-Ready Imagery That <span className="italic">Matches the Brand</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            AI-assisted imagery created specifically for Salt Lily's Instagram grid, matching the look and quality of their existing posts.
          </p>

          {/* Hero image */}
          <div className="mb-8">
            <img 
              src={jewelryProduct} 
              alt="Salt Lily jewellery product" 
              className="w-full rounded-lg"
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img 
              src={necklaceAndHoops} 
              alt="Necklace and hoops lifestyle" 
              className="w-full rounded-lg"
            />
            <img 
              src={heroAfter} 
              alt="AI-generated editorial jewellery" 
              className="w-full rounded-lg object-cover h-full"
            />
          </div>
        </div>
      </section>

      {/* 4) FROM STILL TO VIDEO */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 max-w-3xl">
            From Still Images to <span className="italic">Scroll-Stopping Video</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            Still imagery transformed into video content suitable for Reels, TikTok, and paid social—without traditional filming.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img 
                src={sourceStill} 
                alt="Source still of jewellery on model" 
                className="w-full rounded-lg"
              />
              <p className="text-sm text-muted-foreground text-center">Source still</p>
            </div>
            <div className="space-y-4">
              <video 
                src="/videos/Zoom_out_from_202510151723_w51zs.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full rounded-lg"
              />
              <p className="text-sm text-muted-foreground text-center">Resulting short-form video</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5) PRODUCT IMAGERY — BEFORE/AFTER SLIDERS */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 max-w-3xl">
            Product Imagery <span className="italic">Built for Conversion</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-3xl">
            Lifestyle and close-up images designed for Shopify product and collection pages. These visuals support customer trust, clarity, and conversion.
          </p>

          <div className="space-y-20">
            {/* Slider 1 */}
            <BeforeAfterSlider
              beforeImage={femmeProductBefore}
              afterImage={femmeProductAfter}
              beforeLabel="Product Shot"
              afterLabel="Launch-Ready"
              className="w-full"
            />

            {/* Slider 2 - placeholder (images not uploaded) */}
            <div className="w-full aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Slider 2 — Awaiting images: 94eb8954… → ChunkyFinal</p>
            </div>

            {/* Slider 3 - placeholder (images not uploaded) */}
            <div className="w-full aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Slider 3 — Awaiting images: 5a56838a… → Gemini_nqssyb…</p>
            </div>

            {/* Slider 4 - placeholder */}
            <div className="w-full aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Slider 4 — Images coming tomorrow</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6) THE AI BRAIN BEHIND THE PUBLISHING */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                The AI Brain <span className="italic">Behind the Publishing</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We built a system for Salt Lily that scans their Shopify products and posts daily on Instagram, Facebook and TikTok — and publishes an SEO-optimised blog every day.
              </p>
              <Link 
                to="/work/o_palmeiral_showcase" 
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-lg"
              >
                Want to see what other automations we've built? → O Palmeiral
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div>
              <img 
                src={socialsImg} 
                alt="AI social media automation network" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7) HOW THE AI WORKS FOR SOCIALS */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 max-w-3xl">
            How the AI <span className="italic">Works for Socials</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {[
              { icon: <Upload className="h-6 w-6" />, step: '01', text: 'Generate creatives from brief + brand identity' },
              { icon: <FolderOpen className="h-6 w-6" />, step: '02', text: 'Upload to project drive, categorised' },
              { icon: <Hash className="h-6 w-6" />, step: '03', text: 'AI assigns description, hashtags, alt-text, location' },
              { icon: <UserCheck className="h-6 w-6" />, step: '04', text: 'User approves posts' },
              { icon: <Send className="h-6 w-6" />, step: '05', text: 'AI posts daily across channels' },
              { icon: <Mail className="h-6 w-6" />, step: '06', text: 'Email sent after successful post with link' },
            ].map((item) => (
              <div key={item.step} className="p-6 border border-border rounded-lg bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-display font-bold text-muted-foreground/40">{item.step}</span>
                </div>
                <p className="text-foreground font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8) HOW IT WORKS FOR BLOG AUTOMATION */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 max-w-3xl">
            How It Works for the <span className="italic">Blog Automation</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            <div className="space-y-4">
              {[
                'AI selects a product from the Shopify catalogue',
                'Generates an SEO-optimised blog post with images',
                'Adds internal links, meta tags, and structured data',
                'Publishes to the blog automatically',
                'Blog post links back to the product page',
                'Daily cadence — no manual input required',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-foreground" />
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The blog automation runs independently alongside social posting. Each post is unique, keyword-targeted, and designed to drive organic traffic to Salt Lily's Shopify store.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No templates, no duplicate content — every article is generated fresh from the product catalogue with brand-appropriate tone and imagery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE CONTENT */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              From System to <span className="italic">Published Content</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This system powers real posts already live on Salt Lily's Instagram, including carousel posts and campaign visuals. The content isn't theoretical—it's performing.
            </p>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 max-w-3xl">
            What This <span className="italic">Unlocks for Jewellery Brands</span>
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
                  <Check className="h-4 w-4 text-foreground" />
                </div>
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px] text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Built for <span className="italic">Brands Like Yours</span>
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

      {/* Project Navigation */}
      <ProjectNavigation
        prevProject={{
          title: 'Quinta do Pinto',
          slug: '/work/quinta-do-pinto',
          thumbnail: quintaHeader,
        }}
        nextProject={{
          title: 'O Palmeiral',
          slug: '/work/O_Palmeiral_showcase',
          thumbnail: palmeiralHeader,
        }}
      />

      <Footer />
    </div>
  );
}
