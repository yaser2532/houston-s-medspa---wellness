import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ArrowUp } from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MembershipOverview } from './components/MembershipOverview';
import { MembershipTiers } from './components/MembershipTiers';
import { SavingsCalculator } from './components/SavingsCalculator';
import { ServicesMenu } from './components/ServicesMenu';
import { FinancingSection } from './components/FinancingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationsSection } from './components/LocationsSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SalesPreviewDrawer } from './components/SalesPreviewDrawer';

function MedspaWebsite() {
  const { theme } = useTheme();
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Membership Consultation');
  const [salesDrawerOpen, setSalesDrawerOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Measure scroll reactivity for React Spring animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollable > 0) {
        setScrollProgress(Math.min(Math.max(scrollY / totalScrollable, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // React Spring physics for the top scroll-progress indicator
  const scrollSpring = useSpring({
    width: `${scrollProgress * 100}%`,
    opacity: scrollProgress > 0.005 ? 1 : 0,
    config: { tension: 280, friction: 28 },
  });

  // React Spring physics for the Back-to-Top floating button
  const backToTopSpring = useSpring({
    opacity: scrollProgress > 0.12 ? 1 : 0,
    transform: scrollProgress > 0.12 ? 'translateY(0) scale(1)' : 'translateY(1.5rem) scale(0.75)',
    pointerEvents: (scrollProgress > 0.12 ? 'auto' : 'none') as any,
    config: { tension: 300, friction: 24 },
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div
      className={`website-template ${
        theme === 'dark' ? 'dark-theme dark' : 'light-theme light'
      } min-h-screen flex flex-col font-sans transition-colors duration-300 relative`}
    >
      {/* React Spring Animated Scroll Progress Bar at the very top */}
      <animated.div
        style={scrollSpring}
        className="fixed top-0 left-0 h-[0.1875rem] bg-gradient-to-r from-[#bfa16a] via-[#e2cca4] to-[#bfa16a] z-50 shadow-[0_0_0.5rem_rgba(191,161,106,0.6)] pointer-events-none"
      />

      {/* Primary Navigation & Sales Redesign Bar */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenSalesNotes={() => setSalesDrawerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Spring Floating effects */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* Core Membership Pillars & Explainer */}
        <MembershipOverview onOpenBooking={() => handleOpenBooking()} />

        {/* 3 Tier Programs: Express, Lavish, VIB */}
        <MembershipTiers onSelectTier={(tier) => handleOpenBooking(`${tier} Membership`)} />

        {/* Interactive Member Savings & Token Calculator */}
        <SavingsCalculator onOpenBooking={(service) => handleOpenBooking(service)} />

        {/* Clinical Services & Treatments Catalog */}
        <ServicesMenu onSelectService={(service) => handleOpenBooking(service)} />

        {/* Cherry Financing & Payment Plans */}
        <FinancingSection onOpenBooking={() => handleOpenBooking('Cherry Financing Inquiry')} />

        {/* Client Reviews (532 Verified Google Reviews) */}
        <TestimonialsSection />

        {/* Downtown & Champions Locations & Live Hours */}
        <LocationsSection onOpenBooking={() => handleOpenBooking()} />

        {/* Membership FAQs, Policies & Etiquette */}
        <FaqSection />

        {/* Bottom CTA Conversion Banner */}
        <CtaSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* React Spring Back-to-Top Floating Button */}
      <animated.button
        style={backToTopSpring}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-20 sm:bottom-8 right-6 z-40 p-3 rounded-full border shadow-xl transition-colors ${
          theme === 'dark'
            ? 'bg-[#23221f] text-[#d8c5a2] border-[#403d35] hover:border-[#bfa16a] hover:text-[#bfa16a]'
            : 'bg-[#ffffff] text-[#8c734b] border-[#ded7c8] hover:border-[#bfa16a] hover:text-[#bfa16a]'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </animated.button>

      {/* Interactive Consultation / Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />

      {/* Sales Redesign & Pitch Drawer */}
      <SalesPreviewDrawer
        isOpen={salesDrawerOpen}
        onClose={() => setSalesDrawerOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MedspaWebsite />
    </ThemeProvider>
  );
}
