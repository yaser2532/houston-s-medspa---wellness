import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { MEDSPA_INFO, LOCATIONS } from '../data/medspaData';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const { theme } = useTheme();
  const [subscribed, setSubscribed] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer
      className={`border-t pt-16 pb-24 sm:pb-16 transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#10100e] text-[#a39f93] border-[#252420]'
          : 'bg-[#f5f1ea] text-[#5e5a52] border-[#ded7c8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* "Subscribe for Savings" Newsletter Box */}
        <div
          className={`rounded-2xl p-8 sm:p-12 border shadow-xl max-w-4xl mx-auto transition-colors ${
            theme === 'dark'
              ? 'bg-[#181715] border-[#2d2b27]'
              : 'bg-[#ffffff] border-[#ded7c8]'
          }`}
        >
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className={`font-serif text-2xl sm:text-3xl font-medium mb-2 ${
              theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
            }`}>
              Subscribe for Savings
            </h3>
            <p className={`text-xs sm:text-sm font-light ${
              theme === 'dark' ? 'text-[#8c887d]' : 'text-[#736e63]'
            }`}>
              Sign up to receive exclusive member promotions, flash specials, and aesthetic skincare tips right to your inbox.
            </p>
          </div>

          {subscribed ? (
            <div className={`p-4 rounded-xl border text-center space-y-1 ${
              theme === 'dark'
                ? 'bg-[#23221e] border-[#bfa16a]/50 text-[#fbfaf8]'
                : 'bg-[#fbf9f5] border-[#bfa16a]/60 text-[#161614]'
            }`}>
              <CheckCircle2 className="w-6 h-6 text-[#bfa16a] mx-auto mb-1" />
              <h4 className="font-serif text-sm font-semibold">Thank you, {name}!</h4>
              <p className="text-xs text-[#a39f93]">
                You're officially subscribed to Houston's Medspa + Wellness savings updates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-name" className="sr-only">Your name</label>
              <input
                id="newsletter-name"
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`flex-1 px-4 py-3 rounded-lg text-sm placeholder-[#8c887d] focus:outline-none focus:border-[#bfa16a] ${
                  theme === 'dark'
                    ? 'bg-[#23221f] border border-[#38352e] text-[#fbfaf8]'
                    : 'bg-[#f7f4ed] border border-[#ded7c8] text-[#161614]'
                }`}
              />
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`flex-1 px-4 py-3 rounded-lg text-sm placeholder-[#8c887d] focus:outline-none focus:border-[#bfa16a] ${
                  theme === 'dark'
                    ? 'bg-[#23221f] border border-[#38352e] text-[#fbfaf8]'
                    : 'bg-[#f7f4ed] border border-[#ded7c8] text-[#161614]'
                }`}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-[#bfa16a] hover:bg-[#aa8b50] text-[#161614] font-semibold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-sm"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* 4 Footer Columns matching client structure */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-xs">
          
          {/* Brand & Contact Column */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-[#bfa16a]/50 flex items-center justify-center bg-[#23221f] text-[#bfa16a] font-serif font-bold text-sm">
                HMW
              </div>
              <span className={`font-serif text-sm font-semibold tracking-wider ${
                theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
              }`}>
                HOUSTON'S MEDSPA + WELLNESS
              </span>
            </div>
            
            <p className={`leading-relaxed max-w-sm ${theme === 'dark' ? 'text-[#807c72]' : 'text-[#6b675e]'}`}>
              Houston’s destination for personalized medical aesthetics, facial rejuvenation, body contouring, 
              and value-driven beauty memberships.
            </p>

            <div className={`space-y-2 pt-2 ${theme === 'dark' ? 'text-[#b0aca0]' : 'text-[#444039]'}`}>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#bfa16a]" />
                <a href={MEDSPA_INFO.phoneTel} className="hover:text-[#bfa16a] transition-colors">
                  {MEDSPA_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#bfa16a]" />
                <a href={`mailto:${MEDSPA_INFO.email}`} className="hover:text-[#bfa16a] transition-colors">
                  {MEDSPA_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#bfa16a] mt-0.5 flex-shrink-0" />
                <span>Downtown: 3312 St Emanuel St | Champions: 13303 Champion Forest Dr</span>
              </div>
            </div>
          </div>

          {/* Beauty Studio */}
          <div className="space-y-3">
            <h4 className={`font-serif text-sm font-semibold tracking-wide ${
              theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
            }`}>
              Beauty Studio
            </h4>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-[#807c72]' : 'text-[#6b675e]'}`}>
              <li><a href="#services" className="hover:text-[#bfa16a] transition-colors">Brow Lamination & Lash Lift</a></li>
              <li><a href="#services" className="hover:text-[#bfa16a] transition-colors">Eyebrow & Lash Tinting</a></li>
              <li><a href="#services" className="hover:text-[#bfa16a] transition-colors">Permanent Makeup</a></li>
              <li><a href="#services" className="hover:text-[#bfa16a] transition-colors">Skincare Consultations</a></li>
            </ul>
          </div>

          {/* Med Spa */}
          <div className="space-y-3">
            <h4 className={`font-serif text-sm font-semibold tracking-wide ${
              theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
            }`}>
              Med Spa
            </h4>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-[#807c72]' : 'text-[#6b675e]'}`}>
              <li><a href="#services" className="hover:text-[#bfa16a] transition-colors">Endo-Lift in Houston</a></li>
              <li><a href="#services" className="hover:text-[#bfa16a] transition-colors">Custom Medical Facials</a></li>
              <li><a href="#services" className="hover:text-[#bfa16a] transition-colors">PRPFILL (Plasma Gel)</a></li>
              <li><a href="#services" className="hover:text-[#bfa16a] transition-colors">Botox & Dermal Fillers</a></li>
              <li><a href="#services" className="hover:text-[#bfa16a] transition-colors">Vampire Facial (PRP)</a></li>
              <li><a href="#services" className="hover:text-[#bfa16a] transition-colors">Vaser Shape Contouring</a></li>
            </ul>
          </div>

          {/* Useful Links & Policies */}
          <div className="space-y-3">
            <h4 className={`font-serif text-sm font-semibold tracking-wide ${
              theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
            }`}>
              Patient Care & Info
            </h4>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-[#807c72]' : 'text-[#6b675e]'}`}>
              <li><a href="#memberships" className="hover:text-[#bfa16a] transition-colors">Membership Program</a></li>
              <li><a href="#reviews" className="hover:text-[#bfa16a] transition-colors">532+ Google Reviews</a></li>
              <li><a href="#financing" className="hover:text-[#bfa16a] transition-colors">Cherry 0% Financing</a></li>
              <li><a href="#locations" className="hover:text-[#bfa16a] transition-colors">Hours & Driving Directions</a></li>
              <li><a href="#faqs" className="hover:text-[#bfa16a] transition-colors">Membership Terms & FAQ</a></li>
              <li><a href="#faqs" className="hover:text-[#bfa16a] transition-colors">Policies & Etiquette</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Demo Disclosure */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] ${
          theme === 'dark' ? 'border-[#23221f] text-[#6b675e]' : 'border-[#ded7c8] text-[#7a756b]'
        }`}>
          <div>
            <p>Copyright © 2026. Houston’s Medspa + Wellness. All Rights Reserved.</p>
            <p className="mt-0.5">All images are models unless otherwise specified.</p>
          </div>

          <div className="flex items-center gap-4">
            <span className={`px-2 py-0.5 rounded border ${
              theme === 'dark'
                ? 'bg-[#1c1b18] border-[#2d2b27] text-[#8c887d]'
                : 'bg-[#ebe5d9] border-[#ded7c8] text-[#6b675e]'
            }`}>
              Demo website — proposed redesign preview for Houston’s Medspa + Wellness
            </span>
          </div>
        </div>

      </div>

      {/* Mobile Sticky Action Bar */}
      <div className={`fixed bottom-0 inset-x-0 z-30 backdrop-blur-md border-t p-2 sm:hidden flex items-center gap-2 ${
        theme === 'dark'
          ? 'bg-[#161614]/95 border-[#2d2b27]'
          : 'bg-[#ffffff]/95 border-[#ded7c8]'
      }`}>
        <button
          onClick={onOpenBooking}
          className="flex-1 py-3 rounded bg-[#bfa16a] text-[#161614] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Schedule Visit</span>
        </button>
        <a
          href={MEDSPA_INFO.phoneTel}
          className={`flex-1 py-3 rounded border font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 ${
            theme === 'dark'
              ? 'bg-[#262420] border-[#3d3a33] text-[#fbfaf8]'
              : 'bg-[#f4eee2] border-[#ded7c8] text-[#161614]'
          }`}
        >
          <Phone className="w-3.5 h-3.5 text-[#bfa16a]" />
          <span>Call Clinic</span>
        </a>
      </div>
    </footer>
  );
};
