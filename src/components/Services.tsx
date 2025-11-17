import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* AI Content Creation */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              AI Content Creation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We craft everything from authentic, UGC‑style posts to polished, agency‑quality ad creatives—static or animated—to match your brand's aesthetic across every platform. Our AI tools don't just create content; they uncover trending topics within your niche and generate SEO‑optimised blog posts enriched with relevant links and metadata to boost rankings. Choose to use your own visuals or let us produce on‑brand AI imagery—either way, we handle the entire process to deliver content that engages audiences and grows your organic reach.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="AI Content Creation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* AI Automations */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div className="order-1">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="AI Automations" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-2">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              AI Automations
            </h2>
            <ul className="text-lg text-muted-foreground space-y-3 mb-6">
              <li>• AI content creation that matches your brand</li>
              <li>• Content Repurposing</li>
              <li>• Content distribution and scheduling</li>
              <li>• AI blogging and SEO automations</li>
            </ul>
            <Button variant="link" className="p-0 h-auto text-primary">
              See full list <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* VFX Solutions */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              VFX Solutions
            </h2>
            <ul className="text-lg text-muted-foreground space-y-3 mb-6">
              <li>• Full VFX productions</li>
              <li>• Script breakdowns and budgeting</li>
              <li>• VFX Supervision</li>
              <li>• Compositing</li>
            </ul>
            <p className="text-sm text-muted-foreground italic">
              New Showreel coming soon.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <video
                controls
                className="w-full h-full object-cover"
              >
                <source src="/placeholder.svg" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
