import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Card } from '@/components/ui/card';
import { Search, Hammer, Rocket } from 'lucide-react';

export function HowItWorks() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const steps = [
    {
      icon: Search,
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
      number: '01',
    },
    {
      icon: Hammer,
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
      number: '02',
    },
    {
      icon: Rocket,
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
      number: '03',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display md:text-4xl mb-4">
            <span className="font-bold">{t.howItWorks.title.split(' ')[0]}</span>{' '}
            <span className="italic">{t.howItWorks.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-20 left-[16.666%] right-[16.666%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20" />

          {steps.map((step, i) => (
            <Card
              key={i}
              className="p-8 bg-card border-2 hover:shadow-[var(--shadow-card)] transition-all duration-300 relative"
            >
              <div className="text-8xl font-bold bg-primary border-2 border-black absolute top-4 right-4 w-20 h-20 flex items-center justify-center rounded-lg">
                <span className="text-black">{step.number}</span>
              </div>

              <div className="mb-4 inline-flex p-4 rounded-2xl bg-primary border-2 border-black relative z-10">
                <step.icon className="h-9 w-9 text-black" strokeWidth={2} />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
