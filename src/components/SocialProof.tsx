import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Card } from '@/components/ui/card';

export function SocialProof() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const demos = Array(8).fill(null);

  return (
    <section id="work" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            {t.socialProof.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {demos.map((_, i) => (
            <Card
              key={i}
              className="aspect-square bg-gradient-to-br from-muted/50 to-muted/20 border-2 hover:shadow-[var(--shadow-card)] transition-all duration-300 overflow-hidden group"
            >
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-6xl opacity-20 font-bold">{i + 1}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
