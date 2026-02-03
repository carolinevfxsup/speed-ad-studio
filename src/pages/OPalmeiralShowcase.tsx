import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, FolderOpen, Eye, Camera, Utensils, Wine, Users, Palette, Hash, ListChecks, Clock, Heart, Handshake, User } from 'lucide-react';
import heroImage from '../assets/palmeiral-header.avif';
import contentImage from '@/assets/palmeiral-content.png';
import danielImage from '@/assets/palmeiral-daniel.webp';
import automationControlImage from '@/assets/palmeiral-automation-control.jpeg';
import postingLogicImage from '@/assets/palmeiral-posting-logic.png';
import humanCheckpointImage from '@/assets/palmeiral-human-checkpoint.png';
import informedImage from '@/assets/palmeiral-informed.png';
import growthImage from '@/assets/palmeiral-growth.png';
import nusLogo from '@/assets/nus-logo-round.png';
import quintaThumbnail from '@/assets/quinta-after.png';

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
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {/* Hero Background Image with Darkening Overlay */}
        <div className="absolute inset-0 -z-10">
          <img 
            src={heroImage} 
            alt="O Palmeiral restaurant" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px] py-20 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight text-white drop-shadow-lg">
              From unused photos to daily Instagram posts — <span className="italic">fully automated.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 drop-shadow-md">
              O Palmeiral had hundreds of great photos sitting in Google Drive. No time to post. No consistency. No growth.
            </p>
            <p className="text-lg text-white/80 mb-10 drop-shadow-md">
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
                className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20"
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Content wasn't missing. <span className="italic">Time was.</span>
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
            <div className="relative">
              <img 
                src={contentImage} 
                alt="Google Drive folder with restaurant photos" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Original Ask */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={danielImage} 
                alt="Daniel, owner of O Palmeiral" 
                className="w-full md:w-[110%] rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                The initial <span className="italic">request</span>
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
        </div>
      </section>

      {/* Automation Without Giving Up Control */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Automation — without <span className="italic">giving up control</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Instead of blindly auto-posting everything, we designed a system that balances automation with approval.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The result:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                    <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  The restaurant stays in control
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                    <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Posting still happens automatically
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                    <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Nothing goes live without sign-off
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mt-8">
                This turned a simple uploader into a content pipeline.
              </p>
            </div>
            <div className="relative">
              <img 
                src={automationControlImage} 
                alt="Automation control system" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section id="system-flow" className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 max-w-3xl" id="how-it-works">
              How the <span className="italic">system works</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8 w-full">
            {/* Step 1 */}
            <div className="bg-background p-8 rounded-xl border">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-foreground">
                <FolderOpen className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Content Source</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>A single Google Drive folder</li>
                <li>Images can be added at any time</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-background p-8 rounded-xl border">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-foreground">
                <Eye className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Automatic Scanning</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>The system continuously scans the folder</li>
                <li>New images are detected automatically</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-background p-8 rounded-xl border">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-foreground">
                <Camera className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Categorisation</h3>
              <p className="text-muted-foreground mb-3">Images are organised into four categories:</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <Utensils className="h-4 w-4 text-foreground" />
                  Food
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Wine className="h-4 w-4 text-foreground" />
                  Drink
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-foreground" />
                  People
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Palette className="h-4 w-4 text-foreground" />
                  Decor
                </div>
              </div>
            </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 w-full">
            {/* Step 4 */}
            <div className="bg-background p-8 rounded-xl border">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-foreground">
                <Hash className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">4. Automated Enhancements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Hashtags generated automatically</li>
                <li>Location tagging</li>
                <li>Alternative text for accessibility</li>
              </ul>
            </div>

            {/* Step 5 */}
            <div className="bg-background p-8 rounded-xl border">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-foreground">
                <ListChecks className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">5. Queue Ready</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Approved posts enter the queue</li>
                <li>Visual preview before publishing</li>
              </ul>
            </div>

            {/* Step 6 */}
            <div className="bg-background p-8 rounded-xl border">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-foreground">
                <Clock className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">6. Scheduled Posting</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Automatic posting at scheduled times</li>
                <li>Consistent daily presence</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Intelligence & Rotation */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Posting logic that <span className="italic">feels human</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Once images are detected, the system:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                    <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Assigns each image to its category
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                    <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Rotates categories automatically
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                    <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Prevents repetitive content (no food-only weeks)
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This ensures a balanced, visually interesting feed over time.
              </p>
            </div>
            <div className="relative">
              <img 
                src={postingLogicImage} 
                alt="Instagram feed showing balanced content rotation" 
                className="w-full md:w-[105%] rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approval & Queue System */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={humanCheckpointImage} 
                alt="Spreadsheet-based review and approval system" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Automation with a <span className="italic">human checkpoint</span>
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
                  <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                    <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Posts enter a scheduled queue
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                    <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Publishing happens automatically, every day, at a set time
                </li>
              </ul>
              <p className="text-lg font-medium">
                Key point: Nothing posts without approval — but nothing needs manual scheduling either.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notifications & Visibility */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Always informed. <span className="italic">Never involved.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The system sends email notifications for:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                    <ArrowRight className="h-4 w-4 text-foreground" />
                  </div>
                  New images detected
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                    <ArrowRight className="h-4 w-4 text-foreground" />
                  </div>
                  Posts ready for approval
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                    <ArrowRight className="h-4 w-4 text-foreground" />
                  </div>
                  Content successfully published
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This keeps the owner informed without requiring constant attention.
              </p>
            </div>
            <div className="relative">
              <img 
                src={informedImage} 
                alt="Email notification showing successful post" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Publishing & Optimisation */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={growthImage} 
                alt="Content system driving organic growth" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Built for organic <span className="italic">growth and discovery</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Every post is automatically enhanced with:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                    <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  AI-generated captions
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                    <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Relevant hashtags
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                    <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Location tagging
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                    <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
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
        </div>
      </section>

      {/* Outcome */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              What changed for <span className="italic">O Palmeiral</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'Daily Instagram posting without effort',
                'Consistent visual storytelling',
                'Improved organic visibility over time',
                'Zero day-to-day workload',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-foreground">
                    <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
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

      {/* NU Studios POV */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                How we approach <span className="italic">automation</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At NU Studios, we don't automate chaos. We design systems that are:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">❤️</span>
                  Thoughtful
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">🤝</span>
                  Reliable
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <User className="h-6 w-6 text-foreground" />
                  Human-aware
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This project shows what happens when AI, automation, and real-world business needs align.
              </p>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <img 
                src={nusLogo} 
                alt="NU Studios logo" 
                className="w-32 h-32 md:w-auto md:h-auto md:max-h-[200px] rounded-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px] text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Want your content to <span className="italic">work while you don't?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Book a discovery call to discuss your automation needs, or reach out to start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/#contact'}
              className="text-lg px-10 gap-2"
            >
              Book a Call
              <ArrowRight className="h-5 w-5" />
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
      </section>

      {/* Project Navigation */}
      <ProjectNavigation 
        prevProject={{
          title: 'Quinta do Pinto',
          slug: '/work/quinta-do-pinto',
          thumbnail: quintaThumbnail
        }}
        nextProject={{
          title: 'Salt Lily Jewellery',
          slug: '/work/salt_lily_showcase',
          thumbnail: quintaThumbnail
        }}
      />

      <Footer />
    </div>
  );
}
