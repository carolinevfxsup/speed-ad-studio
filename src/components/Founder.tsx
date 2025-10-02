import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Card } from '@/components/ui/card';
import { User } from 'lucide-react';

export function Founder() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-12 bg-card border-2">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <User className="h-16 w-16 text-primary" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t.founder.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.founder.description}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
