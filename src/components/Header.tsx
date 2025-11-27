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
        className={`sticky z-40 w-full transition-all duration-300 xl:top-0 top-[42px] ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-sm shadow-[var(--shadow-soft)]'
            : 'bg-background'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="cursor-pointer">
                <img src={logoBlack} alt="NU Studios" className="h-11 w-auto" />
              </a>
            </div>

            <nav className="hidden xl:flex items-center gap-6">
              <button
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    window.location.href = '/#services-detail';
                  } else {
                    scrollToSection('services-detail');
                  }
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    window.location.href = '/#work';
                  } else {
                    scrollToSection('work');
                  }
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.work}
              </button>
              <button
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    window.location.href = '/#pricing';
                  } else {
                    scrollToSection('pricing');
                  }
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.pricing}
              </button>
              <button
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    window.location.href = '/#how-it-works';
                  } else {
                    scrollToSection('how-it-works');
                  }
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.howItWorks}
              </button>
              <button
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    window.location.href = '/#faq';
                  } else {
                    scrollToSection('faq');
                  }
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.faq}
              </button>
            </nav>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="gap-2 hidden xl:flex"
              >
                <Languages className="h-4 w-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </Button>
              
              {/* Desktop Book Call Button */}
              <Button onClick={() => scrollToSection('contact')} className="hidden xl:flex">
                {t.nav.bookCall}
              </Button>

              {/* Mobile Menu Trigger */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="xl:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80vw] sm:w-[350px] bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
                  <div className="flex flex-col gap-6 mt-8">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (window.location.pathname !== '/') {
                          window.location.href = '/#services-detail';
                        } else {
                          scrollToSection('services-detail');
                        }
                      }}
                      className="text-lg font-medium text-foreground hover:bg-muted/50 transition-colors text-left py-3 px-4 rounded-md"
                    >
                      {t.nav.services}
                    </button>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (window.location.pathname !== '/') {
                          window.location.href = '/#work';
                        } else {
                          scrollToSection('work');
                        }
                      }}
                      className="text-lg font-medium text-foreground hover:bg-muted/50 transition-colors text-left py-3 px-4 rounded-md"
                    >
                      {t.nav.work}
                    </button>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (window.location.pathname !== '/') {
                          window.location.href = '/#pricing';
                        } else {
                          scrollToSection('pricing');
                        }
                      }}
                      className="text-lg font-medium text-foreground hover:bg-muted/50 transition-colors text-left py-3 px-4 rounded-md"
                    >
                      {t.nav.pricing}
                    </button>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (window.location.pathname !== '/') {
                          window.location.href = '/#how-it-works';
                        } else {
                          scrollToSection('how-it-works');
                        }
                      }}
                      className="text-lg font-medium text-foreground hover:bg-muted/50 transition-colors text-left py-3 px-4 rounded-md"
                    >
                      {t.nav.howItWorks}
                    </button>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (window.location.pathname !== '/') {
                          window.location.href = '/#faq';
                        } else {
                          scrollToSection('faq');
                        }
                      }}
                      className="text-lg font-medium text-foreground hover:bg-muted/50 transition-colors text-left py-3 px-4 rounded-md"
                    >
                      {t.nav.faq}
                    </button>
                    <div className="pt-6 border-t border-border">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setLanguage('en');
                            setMobileMenuOpen(false);
                          }}
                          className={`px-4 py-2 rounded-md font-medium transition-colors flex-1 ${
                            language === 'en' ? 'bg-primary text-black' : 'bg-muted/50 hover:bg-muted'
                          }`}
                        >
                          EN
                        </button>
                        <button
                          onClick={() => {
                            setLanguage('pt');
                            setMobileMenuOpen(false);
                          }}
                          className={`px-4 py-2 rounded-md font-medium transition-colors flex-1 ${
                            language === 'pt' ? 'bg-primary text-black' : 'bg-muted/50 hover:bg-muted'
                          }`}
                        >
                          PT
                        </button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet CTA Banner - positioned above header */}
      <div className="xl:hidden fixed top-0 left-0 right-0 z-50 bg-primary border-b-2 border-black">
        <button
          onClick={() => {
            if (window.location.pathname !== '/') {
              window.location.href = '/#contact';
            } else {
              scrollToSection('contact');
            }
          }}
          className="w-full py-2 px-4 text-center"
        >
          <p className="text-xs font-bold text-black">BOOK YOUR DISCOVERY CALL</p>
          <p className="text-[10px] text-black/70">20-30 minutes</p>
        </button>
      </div>
    </>
  );
}
