import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, FolderOpen, Eye, Check, Send, Camera, Utensils, Wine, Users, Palette } from 'lucide-react';

export default function OPalmeiralShowcase() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
              From unused photos to daily Instagram posts — fully automated.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              O Palmeiral had hundreds of great photos sitting in Google Drive. No time to post. No consistency. No growth.
            </p>
            <p className="text-lg text-muted-foreground mb-10">
              We built a system that runs Instagram automatically — without losing control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('system-flow')}
                className="text-lg px-8"
              >
                View the system flow
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('how-it-works')}
                className="text-lg px-8"
              >
                See what automation looks like
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Reality Behind the Problem */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Content wasn't missing. Time was.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              O Palmeiral already had what most restaurants don't:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-lg">
                <div className="h-2 w-2 rounded-full bg-primary" />
                A large library of high-quality photos
              </li>
              <li className="flex items-center gap-3 text-lg">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Regularly updated visual content
              </li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              What they didn't have:
            </p>
            <ul className="space-y-3 mb-8 text-muted-foreground">
              <li className="flex items-center gap-3 text-lg">
                <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                Time to post daily
              </li>
              <li className="flex items-center gap-3 text-lg">
                <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                A system for consistency
              </li>
              <li className="flex items-center gap-3 text-lg">
                <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                A way to stay visible without manual effort
              </li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Instagram simply wasn't happening — even though the content existed.
            </p>
          </div>
        </div>
      </section>

      {/* The Original Ask */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              The initial request
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Dan, the owner of O Palmeiral, came to us with a straightforward question:
            </p>
            <blockquote className="border-l-4 border-primary pl-6 py-2 mb-8">
              <p className="text-xl md:text-2xl font-medium italic">
                "I have a Google Drive folder full of photos. Can you make it post automatically to Instagram?"
              </p>
            </blockquote>
            <p className="text-lg text-muted-foreground">
              No social media managers. No daily decisions. No extra work.
            </p>
          </div>
        </div>
      </section>

      {/* Automation Without Giving Up Control */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Automation — without giving up control
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Instead of blindly auto-posting everything, we designed a system that balances automation with approval.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The result:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                The restaurant stays in control
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                Posting still happens automatically
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                Nothing goes live without sign-off
              </li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mt-8">
              This turned a simple uploader into a content pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section id="system-flow" className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 max-w-3xl" id="how-it-works">
            How the system works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
            {/* Step 1 */}
            <div className="bg-background p-8 rounded-xl border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <FolderOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Content Source</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>A single Google Drive folder</li>
                <li>Images can be added at any time</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-background p-8 rounded-xl border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Automatic Scanning</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>The system continuously scans the folder</li>
                <li>New images are detected automatically</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-background p-8 rounded-xl border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Categorisation</h3>
              <p className="text-muted-foreground mb-3">Images are organised into four categories:</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <Utensils className="h-4 w-4 text-primary" />
                  Food
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Wine className="h-4 w-4 text-primary" />
                  Drink
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  People
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Palette className="h-4 w-4 text-primary" />
                  Decor
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Intelligence & Rotation */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Posting logic that feels human
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Once images are detected, the system:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                Assigns each image to its category
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                Rotates categories automatically
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                Prevents repetitive content (no food-only weeks)
              </li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This ensures a balanced, visually interesting feed over time.
            </p>
          </div>
        </div>
      </section>

      {/* Approval & Queue System */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Automation with a human checkpoint
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Before anything goes live:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-lg text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                New images are added to a post queue
              </li>
              <li className="flex items-center gap-3 text-lg text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                Captions, hashtags, location, and alt text are generated
              </li>
              <li className="flex items-center gap-3 text-lg text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                Dan receives an email notification
              </li>
              <li className="flex items-center gap-3 text-lg text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                Posts can be approved or held
              </li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Once approved:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                Posts enter a scheduled queue
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                Publishing happens automatically, every day, at a set time
              </li>
            </ul>
            <p className="text-lg font-medium">
              Key point: Nothing posts without approval — but nothing needs manual scheduling either.
            </p>
          </div>
        </div>
      </section>

      {/* Notifications & Visibility */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Always informed. Never involved.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The system sends email notifications for:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-lg">
                <Send className="h-5 w-5 text-primary" />
                New images detected
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Send className="h-5 w-5 text-primary" />
                Posts ready for approval
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Send className="h-5 w-5 text-primary" />
                Content successfully published
              </li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This keeps the owner informed without requiring constant attention.
            </p>
          </div>
        </div>
      </section>

      {/* Publishing & Optimisation */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Built for organic growth and discovery
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Every post is automatically enhanced with:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                AI-generated captions
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                Relevant hashtags
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                Location tagging
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                Accessibility alt text
              </li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Posts can be routed to:
            </p>
            <ul className="space-y-3 mb-8 text-muted-foreground">
              <li className="flex items-center gap-3 text-lg">
                <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                Instagram Feed
              </li>
              <li className="flex items-center gap-3 text-lg">
                <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                Instagram Stories
              </li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Instagram receives consistent, structured signals — the kind platforms reward.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              What changed for O Palmeiral
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'Daily Instagram posting without effort',
                'Consistent visual storytelling',
                'Improved organic visibility over time',
                'Zero day-to-day workload',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mt-8">
              Marketing now runs quietly in the background.
            </p>
          </div>
        </div>
      </section>

      {/* Bigger Picture */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              This is infrastructure, not social media
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This project isn't about posting more. It's about building a system that:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                Saves time
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                Scales effortlessly
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                Works even when the owner is busy
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* NU Studios POV */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              How we approach automation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At NU Studios, we don't automate chaos. We design systems that are:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                Thoughtful
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                Reliable
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Check className="h-5 w-5 text-primary" />
                Human-aware
              </li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This project shows what happens when AI, automation, and real-world business needs align.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px] text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">
            Want your content to work while you don't?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/#contact'}
              className="text-lg px-10 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Book a Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = '/#work'}
              className="text-lg px-10 bg-transparent border-background/30 text-background hover:bg-background/10"
            >
              View more projects
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
