import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Star, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, Phone } from 'lucide-react';
import { MEDSPA_INFO } from '../data/medspaData';
import { useTheme } from '../context/ThemeContext';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const { theme } = useTheme();

  // React Spring subtle floating accent animation
  const floatSpring = useSpring({
    from: { transform: 'translate3d(0, 8px, 0)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translate3d(0, -8px, 0)' });
        await next({ transform: 'translate3d(0, 8px, 0)' });
      }
    },
    config: { tension: 40, friction: 14 },
  });

  return (
    <section
      id="hero"
      className={`relative overflow-hidden pt-8 pb-16 lg:py-24 border-b transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#161614] text-[#fbfaf8] border-[#2a2824]'
          : 'bg-[#fcfaf7] text-[#161614] border-[#e8e3d8]'
      }`}
    >
      {/* Subtle Luxury Pattern Background Overlay */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url(${MEDSPA_INFO.heroImg})` }}
      />
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-[#161614] via-[#161614]/90 to-[#161614]/70'
            : 'bg-gradient-to-r from-[#fcfaf7] via-[#fcfaf7]/90 to-[#fcfaf7]/70'
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline / Breadcrumb Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-medium tracking-widest uppercase transition-colors ${
                theme === 'dark'
                  ? 'bg-[#262420] border-[#bfa16a]/30 text-[#d8c5a2]'
                  : 'bg-[#f3ece0] border-[#bfa16a]/40 text-[#8c734b]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#bfa16a]" />
              <span>{MEDSPA_INFO.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1
              className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] ${
                theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
              }`}
            >
              Our Memberships: <br />
              <span className="text-[#bfa16a] italic font-normal">
                Curated Aesthetics & Signature Wellness
              </span>
            </h1>

            {/* Supporting Copy using verified facts */}
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl font-light ${
                theme === 'dark' ? 'text-[#c2beaf]' : 'text-[#555148]'
              }`}
            >
              Experience Houston’s premier medical esthetics club. Unlock up to{' '}
              <strong className={theme === 'dark' ? 'text-[#fbfaf8] font-semibold' : 'text-[#161614] font-semibold'}>
                80% off signature treatments
              </strong>{' '}
              like the Vampire Facial, save 30% on advanced procedures like PRPFILL and Endo-Lift, and enjoy flexible rollover tokens 
              across our Downtown and Champions locations.
            </p>

            {/* Bullet Points directly from verified perks */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm ${
              theme === 'dark' ? 'text-[#ddd9cf]' : 'text-[#444039]'
            }`}>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#bfa16a] flex-shrink-0" />
                <span>Tokens roll over each month</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#bfa16a] flex-shrink-0" />
                <span>$50 Guest Passes for friends</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#bfa16a] flex-shrink-0" />
                <span>10% off clinical grade skincare</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#bfa16a] flex-shrink-0" />
                <span>Prepay annual or monthly draft</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded bg-[#bfa16a] hover:bg-[#aa8b50] text-[#161614] font-semibold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-[#bfa16a]/20 flex items-center gap-2 group"
              >
                <span>Schedule Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#memberships"
                className={`px-6 py-3.5 rounded border text-sm tracking-wider uppercase font-medium transition-all ${
                  theme === 'dark'
                    ? 'border-[#423f38] hover:border-[#bfa16a] text-[#fbfaf8] hover:text-[#bfa16a]'
                    : 'border-[#ded7c8] hover:border-[#bfa16a] text-[#161614] hover:text-[#8c734b]'
                }`}
              >
                Explore 3 Tiers
              </a>

              <a
                href={MEDSPA_INFO.phoneTel}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#bfa16a] hover:text-[#d4af37] px-3 py-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>(832) 835-2545</span>
              </a>
            </div>

            {/* Verified Google Trust Badge */}
            <div className={`pt-6 border-t flex flex-wrap items-center gap-6 text-xs transition-colors ${
              theme === 'dark'
                ? 'border-[#2a2824] text-[#a39f93]'
                : 'border-[#e8e3d8] text-[#736e63]'
            }`}>
              <div className="flex items-center gap-2">
                <div className="flex text-[#bfa16a]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#bfa16a]" />
                  ))}
                </div>
                <span className={`font-semibold text-sm ${theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'}`}>
                  {MEDSPA_INFO.googleRating}
                </span>
                <span>(532+ Verified Google Reviews)</span>
              </div>

              <div className={`flex items-center gap-1.5 ${theme === 'dark' ? 'text-[#c2beaf]' : 'text-[#555148]'}`}>
                <ShieldCheck className="w-4 h-4 text-[#bfa16a]" />
                <span>2 Houston Locations (Downtown & Champions)</span>
              </div>
            </div>

          </div>

          {/* Right Showcase Card / Visual */}
          <div className="lg:col-span-5">
            <animated.div
              style={floatSpring}
              className={`relative rounded-xl overflow-hidden border p-2 shadow-2xl transition-colors ${
                theme === 'dark'
                  ? 'border-[#38352e] bg-[#1d1c19]'
                  : 'border-[#e2dac8] bg-[#ffffff]'
              }`}
            >
              <div className="relative h-[380px] sm:h-[440px] rounded-lg overflow-hidden group">
                <img
                  src={MEDSPA_INFO.heroImg}
                  alt="Houston's Medspa + Wellness Facial & Aesthetic Treatment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80 ${
                  theme === 'dark' ? 'from-[#161614]' : 'from-[#ffffff]'
                }`} />

                {/* Floating Member Benefit Pill */}
                <div className={`absolute top-4 left-4 backdrop-blur-md border px-3.5 py-2 rounded-lg text-xs ${
                  theme === 'dark'
                    ? 'bg-[#161614]/90 border-[#bfa16a]/40 text-[#fbfaf8]'
                    : 'bg-[#ffffff]/90 border-[#bfa16a]/50 text-[#161614]'
                }`}>
                  <div className="text-[#bfa16a] font-semibold uppercase tracking-wider text-[10px]">
                    Membership Value
                  </div>
                  <div className="font-medium font-serif text-sm">
                    Up to 80% Off Services
                  </div>
                </div>

                {/* Floating Bottom Card */}
                <div className={`absolute bottom-4 inset-x-4 backdrop-blur-md border p-4 rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'bg-[#1d1c19]/95 border-[#38352e]'
                    : 'bg-[#ffffff]/95 border-[#ded7c8] shadow-md'
                }`}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className={`font-serif font-semibold text-sm ${theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'}`}>
                        Beauty + Wellness Program
                      </h4>
                      <p className={`text-xs ${theme === 'dark' ? 'text-[#a39f93]' : 'text-[#736e63]'}`}>
                        Annual subscription with monthly draft or prepay options
                      </p>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${
                      theme === 'dark'
                        ? 'bg-[#bfa16a]/20 text-[#d8c5a2]'
                        : 'bg-[#f3ece0] text-[#8c734b]'
                    }`}>
                      Active Club
                    </span>
                  </div>

                  <div className={`mt-2.5 pt-2.5 border-t flex items-center justify-between text-xs ${
                    theme === 'dark' ? 'border-[#2e2c26]' : 'border-[#eee9df]'
                  }`}>
                    <span className={theme === 'dark' ? 'text-[#d8c5a2] font-medium' : 'text-[#8c734b] font-medium'}>
                      Missed month? Tokens roll over
                    </span>
                    <a
                      href="#calculator"
                      className="text-[#bfa16a] hover:underline font-semibold flex items-center gap-1"
                    >
                      Calculate Savings &rarr;
                    </a>
                  </div>
                </div>

              </div>
            </animated.div>
          </div>

        </div>
      </div>
    </section>
  );
};

