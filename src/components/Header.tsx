import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Languages, Menu, X, ExternalLink } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logoBlack from '@/assets/logo-black.png';

export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslation(language);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <>
      {/* Desktop/Tablet Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-sm shadow-[var(--shadow-soft)]'
            : 'bg-background'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <img src={logoBlack} alt="NU Studios" className="h-11 w-auto" />
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('services-detail')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.work}
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.pricing}
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.howItWorks}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.faq}
              </button>
              <a
                href="https://vimeo.com/1139981506"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                Showreel <ExternalLink className="h-3 w-3" />
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="gap-2 hidden md:flex"
              >
                <Languages className="h-4 w-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </Button>
              
              {/* Desktop Book Call Button */}
              <Button onClick={() => scrollToSection('contact')} className="hidden md:flex">
                {t.nav.bookCall}
              </Button>

              {/* Mobile Menu Trigger */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[80vw] sm:w-[350px]">
                  <div className="flex flex-col gap-6 mt-8">
                    <button
                      onClick={() => scrollToSection('services-detail')}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                    >
                      {t.nav.services}
                    </button>
                    <button
                      onClick={() => scrollToSection('work')}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                    >
                      {t.nav.work}
                    </button>
                    <button
                      onClick={() => scrollToSection('pricing')}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                    >
                      {t.nav.pricing}
                    </button>
                    <button
                      onClick={() => scrollToSection('how-it-works')}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                    >
                      {t.nav.howItWorks}
                    </button>
                    <button
                      onClick={() => scrollToSection('faq')}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                    >
                      {t.nav.faq}
                    </button>
                    <a
                      href="https://vimeo.com/1139981506"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      Showreel <ExternalLink className="h-4 w-4" />
                    </a>
                    <div className="pt-6 border-t border-border">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={toggleLanguage}
                        className="gap-2 w-full justify-start"
                      >
                        <Languages className="h-4 w-4" />
                        <span className="text-sm font-medium">{language.toUpperCase()}</span>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet CTA Banner */}
      <div className="md:hidden sticky top-16 z-40 bg-primary border-t-2 border-b-2 border-black">
        <button
          onClick={() => scrollToSection('contact')}
          className="w-full py-3 px-4 text-center"
        >
          <p className="text-sm font-bold text-black">BOOK YOUR DISCOVERY CALL</p>
          <p className="text-xs text-black/70">20-30 minutes</p>
        </button>
      </div>
    </>
  );
}
