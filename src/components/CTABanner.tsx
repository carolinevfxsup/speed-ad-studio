import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';

export function CTABanner() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            {t.ctaBanner.title}
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={scrollToContact}>
              {t.ctaBanner.primaryCta}
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a href="mailto:hello@newstudios.ai">
                {t.ctaBanner.secondaryCta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
