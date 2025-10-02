import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Card } from '@/components/ui/card';
import { Palette, Cog } from 'lucide-react';

export function Offer() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            {t.offer.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="p-8 bg-card border-2 hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              {t.offer.creative.title}
            </h3>
            <p className="text-muted-foreground">
              {t.offer.creative.description}
            </p>
          </Card>

          <Card className="p-8 bg-card border-2 hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <div className="mb-4 inline-flex p-3 rounded-2xl bg-secondary/10">
              <Cog className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              {t.offer.automation.title}
            </h3>
            <p className="text-muted-foreground">
              {t.offer.automation.description}
            </p>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.offer.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
