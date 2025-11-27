import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Languages, Menu, X, ExternalLink } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logoBlack from '@/assets/logo-black.png';
import { Link } from 'react-router-dom'; // Import Link for navigation to new pages

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
    // Close the mobile menu when scrolling
    setMobileMenuOpen(false); 
    
    // Wait a brief moment before scrolling to allow menu to close (optional but helpful)
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
  };
  
  // Helper function to determine the other language
  const otherLanguage = language === 'en' ? 'pt' : 'en';

  return (
    <>
      {/* Fix #8: Tablet Menu Fix - CTA Banner positioned at the TOP (z-50) */}
      <div 
        className="md:hidden fixed top-0 left-0 right-0 z-50 bg-primary border-b-2 border-black"
        onClick={() => scrollToSection('contact')} // CTA Link Fix
      >
        <button
          className="w-full py-2 px-4 text-center"
        >
          <p className="text-xs font-bold text-black">BOOK YOUR DISCOVERY CALL</p>
          <p className="text-[10px] text-black/70">20-30 minutes</p>
        </button>
      </div>

      {/* Desktop/Tablet Header */}
      <header
        className={`sticky z-40 w-full transition-all duration-300 md:top-0 top-[42px] ${ // Adjusted top position to account for the new banner
          isScrolled
            ? 'bg-card/95 backdrop-blur-sm shadow-[var(--shadow-soft)]'
            : 'bg-background'
        }`}
      >
        <div className="content-wrapper"> {/* Added content-wrapper here for desktop */}
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              {/* Fix #12: Logo must link back to the MAIN LANDING PAGE URL */}
              <Link to="/">
                <img src={logoBlack} alt="NU Studios" className="h-11 w-auto" />
              </Link>
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
                onClick={() => scrollToSection('pricing')} // Fix #10: Ensures scroll to pricing
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
            </nav>

            <div className="flex items-center gap-3">
              {/* Language Button for Desktop/Tablet */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleLanguage(otherLanguage)}
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
                {/* Fix #8: Mobile menu aesthetic and functionality fixes */}
                {/* Added mobile-menu-container class for CSS styling (Fix #8) */}
                <SheetContent side="right" className="w-[80vw] sm:w-[350px] mobile-menu-container">
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
                      onClick={() => scrollToSection('pricing')} // Fix #10: Ensures scroll to pricing
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

                    {/* Fix #8: Language buttons in mobile menu (clearly visible PT option) */}
                    <div className="pt-6 border-t border-border flex flex-col gap-2">
                      <Button
                        variant={language === 'en' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => toggleLanguage('en')}
                        className="gap-2 w-full justify-start"
                      >
                        <Languages className="h-4 w-4" />
                        <span className="text-sm font-medium">ENGLISH (EN)</span>
                      </Button>
                      <Button
                        variant={language === 'pt' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => toggleLanguage('pt')}
                        className="gap-2 w-full justify-start"
                      >
                        <Languages className="h-4 w-4" />
                        <span className="text-sm font-medium">PORTUGUÊS (PT)</span>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
