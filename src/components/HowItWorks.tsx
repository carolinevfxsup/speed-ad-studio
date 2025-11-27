import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Card } from '@/components/ui/card';
import { Phone, Clapperboard, Rocket } from 'lucide-react';
import number1 from '@/assets/number-1.png';
import number2 from '@/assets/number-2.png';
import number3 from '@/assets/number-3.png';

export function HowItWorks() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const steps = [
    {
      number: number1,
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
      Icon: Phone,
    },
    {
      number: number2,
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
      Icon: Clapperboard,
    },
    {
      number: number3,
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
      Icon: Rocket,
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

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.Icon;
            return (
              <Card
                key={i}
                className="p-8 bg-card border-2 hover:border-primary transition-all duration-300 shadow-[var(--shadow-card)]"
              >
                <div className="mb-6 flex flex-col items-start gap-4">
                  <img 
                    src={step.number} 
                    alt={`Step ${i + 1}`} 
                    className="w-24 h-24 object-contain"
                  />
                  <div className="p-4 rounded-xl bg-primary border-2 border-black">
                    <Icon className="h-8 w-8 text-black" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
