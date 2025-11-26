import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export function Pricing() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const packages = [
    {
      name: t.pricing.starter.name,
      price: t.pricing.starter.price,
      features: t.pricing.starter.features,
      highlighted: false,
    },
    {
      name: t.pricing.growth.name,
      price: t.pricing.growth.price,
      features: t.pricing.growth.features,
      highlighted: false,
    },
    {
      name: t.pricing.scale.name,
      price: t.pricing.scale.price,
      features: t.pricing.scale.features,
      highlighted: true,
      badge: t.pricing.scale.badge,
    },
    {
      name: t.pricing.bespoke.name,
      price: t.pricing.bespoke.price,
      features: t.pricing.bespoke.features,
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display md:text-4xl mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, i) => (
            <Card
              key={i}
              className={`p-8 flex flex-col relative transition-all duration-300 group ${
                pkg.highlighted
                  ? 'bg-primary/5 border-primary border-2 shadow-[var(--shadow-elevated)]'
                  : 'bg-card border-2'
              } hover:border-black hover:border-4 hover:bg-primary hover:[&_button]:bg-white`}
            >
              {pkg.badge && (
                <Badge className="absolute top-4 right-4 bg-secondary">
                  {pkg.badge}
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-bold text-foreground">
                  {pkg.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                variant={pkg.highlighted ? 'default' : 'outline'}
                className="w-full"
              >
                {t.pricing.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
