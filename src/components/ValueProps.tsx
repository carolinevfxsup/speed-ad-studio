import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Card } from '@/components/ui/card';
import { Rocket, Sparkles, DollarSign } from 'lucide-react';

export function ValueProps() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const props = [
    {
      icon: Rocket,
      title: t.valueProps.faster.title,
      description: t.valueProps.faster.description,
    },
    {
      icon: Sparkles,
      title: t.valueProps.polish.title,
      description: t.valueProps.polish.description,
    },
    {
      icon: DollarSign,
      title: t.valueProps.budget.title,
      description: t.valueProps.budget.description,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {t.valueProps.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {props.map((prop, i) => (
            <Card
              key={i}
              className="p-8 bg-card hover:shadow-[var(--shadow-card)] transition-all duration-300 border-2"
            >
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10">
                <prop.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {prop.title}
              </h3>
              <p className="text-muted-foreground">{prop.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
