import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Card } from '@/components/ui/card';
import { Video, Bot, Sparkles, Settings } from 'lucide-react';

export function Offer() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const features = [
    {
      icon: Video,
      title: language === 'en' ? 'Cinematic AI Ads' : 'Anúncios Cinematográficos com IA',
      description: language === 'en' 
        ? 'Scroll-stopping UGC, short-form, and static ads tailored to your brand.'
        : 'UGC impactante, formato curto e anúncios estáticos personalizados para sua marca.',
    },
    {
      icon: Bot,
      title: language === 'en' ? 'Done-for-You Automation' : 'Automação Feita para Si',
      description: language === 'en'
        ? 'We automate your creative pipeline — from blogs to posts to visuals.'
        : 'Automatizamos o seu pipeline criativo — desde blogs a posts e visuais.',
    },
    {
      icon: Sparkles,
      title: language === 'en' ? 'Creative Direction' : 'Direção Criativa',
      description: language === 'en'
        ? 'Every asset is guided by 18 years of VFX and storytelling experience.'
        : 'Cada ativo é guiado por 18 anos de experiência em VFX e narrativa.',
    },
    {
      icon: Settings,
      title: language === 'en' ? 'Custom Systems, Yours to Control' : 'Sistemas Personalizados, Sob o Seu Controlo',
      description: language === 'en'
        ? 'Want in-house control? We build and hand over your own AI workflows.'
        : 'Quer controlo interno? Construímos e entregamos seus próprios fluxos de IA.',
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
