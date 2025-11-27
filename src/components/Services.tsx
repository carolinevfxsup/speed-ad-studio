import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import aiContentFrame from '@/assets/ai-content-frame.png';
import automationImage from '@/assets/automation-02.png';
import vfxFrame from '@/assets/vfx-frame-01.png';

export function Services() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const openVideo = (url: string) => {
    setVideoUrl(url);
  };

  const closeVideo = () => {
    setVideoUrl(null);
  };

  return (
    <section id="services-detail" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* AI Content Creation */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-display mb-6">
              <span className="font-bold">AI</span>{' '}
              <span className="italic">Content Creation</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As an AI-first studio, we use cutting-edge tools to generate or enhance creative, but we also work with real footage and product photography when a hybrid approach delivers more impact. Whether fully AI-generated, human-shot, or a blend of both, we design, direct, and deliver scroll-stopping content that feels authentic, premium, and built for scale.
            </p>
            <Button 
              onClick={() => openVideo('https://player.vimeo.com/video/1140751488')}
              className="gap-2"
            >
              <Play className="h-4 w-4" /> PLAY
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <div 
              className="aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer group relative"
              onClick={() => openVideo('https://player.vimeo.com/video/1140751488')}
            >
              <img 
                src={aiContentFrame} 
                alt="AI Content Creation" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-primary border-2 border-black flex items-center justify-center">
                  <Play className="h-8 w-8 text-black ml-1" fill="black" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Automations */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-1">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src={automationImage} 
                alt="AI Automations" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-2">
            <h2 className="text-4xl font-display mb-6">
              <span className="font-bold">AI</span>{' '}
              <span className="italic">Automations</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Transform how you operate. Our AI automation solutions free up valuable time and resources, eliminating tedious tasks and empowering your team to achieve more with less effort.
            </p>
            <ul className="text-lg text-muted-foreground space-y-3 mb-6">
              <li>• Content Repurposing</li>
              <li>• Content distribution and scheduling</li>
              <li>• AI blogging and SEO automations</li>
            </ul>
            <Button 
              onClick={() => window.location.href = '/automations'}
              className="bg-primary text-black border-2 border-black hover:bg-white hover:text-black gap-2"
            >
              View Full List <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* VFX Solutions */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-display mb-6">
              <span className="font-bold">VFX</span>{' '}
              <span className="italic">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Selected VFX work delivered by NU Studios Ltd. partnerships.
            </p>
            <ul className="text-lg text-muted-foreground space-y-3 mb-6">
              <li>• VFX consulting & supervision (on set & off)</li>
              <li>• Script breakdowns & budgeting</li>
              <li>• Compositing & shot production</li>
              <li>• Delivering full VFX shots/projects/productions either directly or through industry</li>
            </ul>
            <Button 
              onClick={() => openVideo('https://player.vimeo.com/video/1139981506')}
              className="gap-2"
            >
              <Play className="h-4 w-4" /> PLAY
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <div 
              className="aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer group relative"
              onClick={() => openVideo('https://player.vimeo.com/video/1139981506')}
            >
              <img 
                src={vfxFrame} 
                alt="VFX Solutions" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-primary border-2 border-black flex items-center justify-center">
                  <Play className="h-8 w-8 text-black ml-1" fill="black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={!!videoUrl} onOpenChange={closeVideo}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          {videoUrl && (
            <div className="aspect-video">
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
