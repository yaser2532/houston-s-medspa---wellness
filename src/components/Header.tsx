import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Phone, MapPin, Clock, Calendar, Menu, X, Sparkles, ShieldCheck, Sun, Moon } from 'lucide-react';
import { MEDSPA_INFO } from '../data/medspaData';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenSalesNotes: () => void;
}

const NAV_ITEMS = [
  { id: 'memberships', label: 'Memberships' },
  { id: 'calculator', label: 'Savings Calculator' },
  { id: 'services', label: 'Treatments & Services' },
  { id: 'financing', label: 'Financing' },
  { id: 'reviews', label: `Reviews (${MEDSPA_INFO.reviewCount})` },
  { id: 'locations', label: 'Locations' },
  { id: 'faqs', label: 'FAQ' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenSalesNotes }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const scrollDelta = scrollY - lastScrollY.current;
      if (scrollY <= 20 || scrollDelta < -8) {
        setIsHeaderVisible(true);
      } else if (scrollDelta > 8) {
        setIsHeaderVisible(false);
        setMobileMenuOpen(false);
      }
      lastScrollY.current = scrollY;

      // Scroll Spy for Nav Items
      const sections = ['hero', ...NAV_ITEMS.map(i => i.id)];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // React Spring physics animation for header elevation on scroll
  const headerSpring = useSpring({
    boxShadow: isScrolled
      ? theme === 'dark'
        ? '0 0.625rem 1.875rem -0.625rem rgba(0,0,0,0.85)'
        : '0 0.625rem 1.5625rem -0.625rem rgba(22,22,20,0.08)'
      : '0 0 0 0 rgba(0,0,0,0)',
    config: { tension: 280, friction: 30 },
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <animated.header
      style={headerSpring}
      className={`sticky top-0 z-40 backdrop-blur-md transition-[transform,background-color,border-color] duration-500 ease-out border-b ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        theme === 'dark'
          ? 'bg-[#161614]/95 text-[#fbfaf8] border-[#2d2b27]'
          : 'bg-[#ffffff]/95 text-[#161614] border-[#e8e3d8]'
      }`}
    >
      {/* Sales Demonstration Top Notification Bar */}
      <div
        aria-hidden={isScrolled}
        className={`overflow-hidden border-b px-4 text-xs transition-all duration-500 ease-out ${
          isScrolled ? 'pointer-events-none max-h-0 py-0 opacity-0' : 'max-h-16 py-2 opacity-100'
        } ${
          theme === 'dark'
            ? 'bg-[#1f1e1b] border-[#2d2b27]'
            : 'bg-[#f7f4ee] border-[#e8e3d8]'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#d4af37]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="font-medium tracking-wide">Client Redesign & Sales Preview:</span>
            <span className={theme === 'dark' ? 'text-[#c8c5bc] hidden sm:inline' : 'text-[#6b675e] hidden sm:inline'}>
              Houston's Medspa + Wellness
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className={`hidden md:flex items-center gap-1.5 ${theme === 'dark' ? 'text-[#a8a49a]' : 'text-[#6b675e]'}`}>
              <ShieldCheck className="w-3.5 h-3.5 text-[#bfa16a]" />
              <span>Authentic Content • Zero Fabricated Claims</span>
            </div>

            {/* Theme Toggle Pill in Top Bar */}
            <button
              onClick={toggleTheme}
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-medium transition-all ${
                theme === 'dark'
                  ? 'bg-[#262420] border-[#3d3a33] text-[#d8c5a2] hover:border-[#bfa16a]'
                  : 'bg-[#ffffff] border-[#ded7c8] text-[#8c734b] hover:border-[#bfa16a]'
              }`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3 h-3 text-[#d4af37]" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3 h-3 text-[#bfa16a]" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenSalesNotes}
              className="inline-flex items-center gap-1 text-[#bfa16a] hover:text-[#d4af37] font-medium transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>View Notes</span>
            </button>
          </div>
        </div>
      </div>

      {/* Utility Contact Bar */}
      <div
        aria-hidden={isScrolled}
        className={`hidden overflow-hidden border-b text-xs px-6 transition-all duration-500 ease-out lg:block ${
          isScrolled ? 'pointer-events-none max-h-0 py-0 opacity-0' : 'max-h-12 py-2 opacity-100'
        } ${
          theme === 'dark'
            ? 'bg-[#161614] border-[#23221f] text-[#a39f93]'
            : 'bg-[#faf8f4] border-[#f0ebe1] text-[#736e63]'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#bfa16a]" />
              <span>Downtown & Champions Locations</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#bfa16a]" />
              <span>Tue–Fri: 10AM–6PM | Sat: 10AM–4PM</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={MEDSPA_INFO.phoneTel}
              className={`flex items-center gap-1.5 hover:text-[#bfa16a] transition-colors font-medium ${
                theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#bfa16a]" />
              <span>{MEDSPA_INFO.phone}</span>
            </a>
            <span className={theme === 'dark' ? 'text-[#4a473f]' : 'text-[#ded7c8]'}>|</span>
            <a
              href="mailto:help@htxmdspa.com"
              className="hover:text-[#bfa16a] transition-colors"
            >
              help@htxmdspa.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-[padding] duration-500 ease-out ${
        isScrolled ? 'py-2' : 'py-3.5'
      }`}>
        {/* Brand Logo & Wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center gap-3 group text-left"
        >
          <div className={`w-10 h-10 rounded-full border flex items-center justify-center font-serif font-bold text-lg transition-all duration-500 ${
            isScrolled ? 'scale-90' : 'scale-100'
          } ${
            theme === 'dark'
              ? 'border-[#bfa16a]/50 bg-[#23221f] text-[#bfa16a] group-hover:border-[#bfa16a]'
              : 'border-[#bfa16a] bg-[#f7f2e7] text-[#8c734b] group-hover:border-[#8c734b]'
          }`}>
            HMW
          </div>
          <div className="max-[24rem]:hidden">
            <span className={`block font-serif text-lg tracking-wider font-semibold group-hover:text-[#bfa16a] transition-colors ${
              theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
            }`}>
              HOUSTON'S MEDSPA
            </span>
            <span className={`block text-[10px] tracking-[0.2em] uppercase font-sans ${
              theme === 'dark' ? 'text-[#a39f93]' : 'text-[#8c887d]'
            }`}>
              + Wellness & Aesthetics
            </span>
          </div>
        </a>

        {/* Desktop Nav Links with Scroll Spy */}
        <nav className="hidden xl:flex items-center gap-6 lg:gap-7 text-sm font-medium tracking-wide">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? 'text-[#bfa16a] font-semibold'
                    : theme === 'dark'
                    ? 'text-[#d6d2c8] hover:text-[#bfa16a]'
                    : 'text-[#555148] hover:text-[#bfa16a]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#bfa16a] rounded-full animate-in fade-in zoom-in-75 duration-200" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & Theme Switcher */}
        <div className="hidden xl:flex items-center gap-3">
          {/* Quick Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle light or dark theme"
            className={`p-2 rounded-lg border transition-all ${
              theme === 'dark'
                ? 'bg-[#23221f] border-[#38352e] text-[#d4af37] hover:border-[#bfa16a]'
                : 'bg-[#faf8f4] border-[#e0d9cb] text-[#8c734b] hover:border-[#bfa16a]'
            }`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href={MEDSPA_INFO.phoneTel}
            className={`px-3.5 py-2 rounded border text-xs tracking-wider uppercase font-semibold transition-all ${
              theme === 'dark'
                ? 'border-[#3b3832] text-[#d6d2c8] hover:border-[#bfa16a] hover:text-[#bfa16a]'
                : 'border-[#ded7c8] text-[#555148] hover:border-[#bfa16a] hover:text-[#bfa16a]'
            }`}
          >
            Call Us
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="px-4 py-2 rounded bg-[#bfa16a] hover:bg-[#a88950] text-[#161614] text-xs tracking-wider uppercase font-semibold transition-all shadow-sm flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule Visit</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle & Theme Button */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-1.5 rounded border ${
              theme === 'dark'
                ? 'bg-[#23221f] border-[#38352e] text-[#d4af37]'
                : 'bg-[#faf8f4] border-[#e0d9cb] text-[#8c734b]'
            }`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => onOpenBooking()}
            className="px-3 py-1.5 rounded bg-[#bfa16a] text-[#161614] text-[11px] font-semibold uppercase tracking-wider"
          >
            Schedule
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className={`p-2 focus:outline-none ${
              theme === 'dark' ? 'text-[#d4af37]' : 'text-[#8c734b]'
            }`}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className={`xl:hidden border-b px-6 py-5 space-y-4 transition-colors ${
            theme === 'dark'
              ? 'bg-[#1a1917] border-[#2d2b27]'
              : 'bg-[#ffffff] border-[#e8e3d8]'
          }`}
        >
          {/* Mobile Theme Toggle Row */}
          <div className="flex items-center justify-between pb-3 border-b border-inherit">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Website Theme
            </span>
            <button
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#bfa16a]/50 text-xs font-semibold text-[#bfa16a]"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5" />
                  <span>Switch to Light Theme</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5" />
                  <span>Switch to Dark Theme</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-col space-y-3 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`py-1.5 border-b border-inherit transition-colors ${
                  activeSection === item.id
                    ? 'text-[#bfa16a] font-semibold'
                    : theme === 'dark'
                    ? 'text-[#fbfaf8] hover:text-[#bfa16a]'
                    : 'text-[#161614] hover:text-[#bfa16a]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={MEDSPA_INFO.phoneTel}
              className={`w-full py-2.5 rounded text-center border text-sm font-semibold flex items-center justify-center gap-2 ${
                theme === 'dark'
                  ? 'border-[#3b3832] text-[#fbfaf8]'
                  : 'border-[#ded7c8] text-[#161614]'
              }`}
            >
              <Phone className="w-4 h-4 text-[#bfa16a]" />
              <span>Call (832) 835-2545</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded bg-[#bfa16a] text-[#161614] text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      )}
    </animated.header>
  );
};

