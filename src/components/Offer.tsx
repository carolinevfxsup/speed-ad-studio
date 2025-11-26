import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Card } from '@/components/ui/card';
import { Video, Bot, Palette, Settings } from 'lucide-react';

export function Offer() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const features = [
    {
      icon: Video,
      title: t.offer.cinematicAd.title,
      description: t.offer.cinematicAd.description,
    },
    {
      icon: Bot,
      title: t.offer.automation.title,
      description: t.offer.automation.description,
    },
    {
      icon: Palette,
      title: t.offer.direction.title,
      description: t.offer.direction.description,
    },
    {
      icon: Settings,
      title: t.offer.customSystems.title,
      description: t.offer.customSystems.description,
    },
  ];

  const titleWords = t.offer.title.split(' ');

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            <span className="font-bold">{titleWords[0]}</span>{' '}
            <span className="italic">{titleWords.slice(1).join(' ')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="p-6 bg-card hover:shadow-[var(--shadow-card)] transition-all duration-300 border group"
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-display">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
