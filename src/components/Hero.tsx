import { ChevronDown } from 'lucide-react';
import logoLime from '@/assets/logo-lime.png';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';

export function Hero() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 min-h-[70vh] md:min-h-screen">
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

      {/* Logo overlay centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <img 
          src={logoLime} 
          alt="NU Studios" 
          className="w-64 md:w-96 h-auto mb-4"
        />
        <p className="text-lg md:text-2xl font-display font-medium text-primary drop-shadow-lg">
          {t.hero.subhead}
        </p>
      </div>

      {/* Bouncy scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary drop-shadow-lg" strokeWidth={2.5} />
      </div>

    </section>
  );
}
