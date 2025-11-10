import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Zap, Calendar, Globe } from 'lucide-react';

export function Hero() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 py-20 md:py-32">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90"
        >
          <source src="/header.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <Badge variant="secondary" className="gap-2">
              <Zap className="h-3 w-3" />
              {t.hero.badges.fast}
            </Badge>
            <Badge variant="secondary" className="gap-2">
              <Calendar className="h-3 w-3" />
              {t.hero.badges.noSub}
            </Badge>
            <Badge variant="secondary" className="gap-2">
              <Globe className="h-3 w-3" />
              {t.hero.badges.bilingual}
            </Badge>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {t.hero.headline}
          </h1>

          <p className="mb-8 text-lg text-muted-foreground md:text-xl lg:text-2xl">
            {t.hero.subhead}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto"
            >
              {t.hero.primaryCta}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('pricing')}
              className="w-full sm:w-auto"
            >
              {t.hero.secondaryCta}
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            {t.hero.trustLine}
          </p>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
    </section>
  );
}
