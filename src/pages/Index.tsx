import { useNavigate } from 'react-router-dom'; // <-- NEW: Import useNavigate
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { SocialProof } from '@/components/SocialProof';
import { ValueProps } from '@/components/ValueProps';
import { Offer } from '@/components/Offer';
import { Pricing } from '@/components/Pricing';
import { HowItWorks } from '@/components/HowItWorks';
import { ICP } from '@/components/ICP';
import { Founder } from '@/components/Founder';
import { FAQ } from '@/components/FAQ';
import { CTABanner } from '@/components/CTABanner';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

const Index = () => {
  // 1. Get the navigation function from react-router-dom
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        {/* 2. Pass the navigate function to the Services component */}
        <Services onNavigate={navigate} /> 
        <SocialProof />
        <ValueProps />
        <Offer />
        <Pricing />
        <HowItWorks />
        {/* Hide ICP on desktop, show on mobile/tablet with updated icon styles */}
        <div className="md:hidden">
          <ICP />
        </div>
        <Founder />
        <FAQ />
        <CTABanner />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
