import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Play } from 'lucide-react';
import { useState } from 'react';
import product1 from '@/assets/product-1.png';
import product2 from '@/assets/product-2.png';
import product3 from '@/assets/product-3.png';
import product4 from '@/assets/product-4.png';
import product5 from '@/assets/product-5.mp4';
import product6 from '@/assets/product-6.mp4';
import product7 from '@/assets/product-7.mp4';
import product8 from '@/assets/product-8.mp4';

export function SocialProof() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const productImages = [product1, product2, product3, product4];
  const productVideos = [product5, product6, product7, product8];
  const demos = Array(8).fill(null);

  return (
    <section id="work" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display md:text-4xl mb-4">
            <span className="font-bold">{t.socialProof.title.split(' ')[0]}</span>{' '}
            <span className="italic">{t.socialProof.title.split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {demos.map((_, i) => (
            <Card
              key={i}
              className="aspect-square bg-gradient-to-br from-muted/50 to-muted/20 border-2 hover:shadow-[var(--shadow-card)] transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => i >= 4 && setSelectedVideo(productVideos[i - 4])}
            >
              {i < 4 ? (
                <img 
                  src={productImages[i]} 
                  alt={`Product showcase ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center relative">
                  <video
                    src={productVideos[i - 4]}
                    className="w-full h-full object-cover"
                    muted
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                    <Play className="w-12 h-12 text-white" fill="white" />
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl w-full p-0 bg-black">
            {selectedVideo && (
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
