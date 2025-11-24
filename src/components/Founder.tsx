import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Card } from '@/components/ui/card';
import founderImage from '@/assets/founder.png';

export function Founder() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-5xl mx-auto p-8 md:p-12 bg-card border-2">
          <div className="flex flex-col md:flex-row items-stretch gap-8">
            <div className="shrink-0 md:w-80">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img 
                  src={founderImage} 
                  alt="Caroline Pires - Founder" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {t.founder.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {t.founder.description}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
