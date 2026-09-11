import React from 'react';
import { Phone, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { MEDSPA_INFO } from '../data/medspaData';
import { useTheme } from '../context/ThemeContext';

interface CtaSectionProps {
  onOpenBooking: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  const { theme } = useTheme();

  return (
    <section
      className={`relative py-20 lg:py-28 overflow-hidden border-b transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#121210] text-[#fbfaf8] border-[#2d2b27]'
          : 'bg-[#201f1c] text-[#fbfaf8] border-[#38352e]'
      }`}
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: `url(${MEDSPA_INFO.ctaBgImg})` }}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          theme === 'dark'
            ? 'from-[#121210] via-[#121210]/85 to-[#121210]'
            : 'from-[#201f1c] via-[#201f1c]/85 to-[#201f1c]'
        }`}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2a2824] border border-[#bfa16a]/30 text-xs font-medium tracking-widest text-[#d8c5a2] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#bfa16a]" />
          <span>Houston's Medspa + Wellness</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#fbfaf8] leading-tight">
          Ready to Elevate Your Glow? <br />
          <span className="text-[#d8c5a2] italic font-normal">
            Call Us or Schedule Online Today
          </span>
        </h2>

        <p className="text-sm sm:text-base text-[#b8b4a7] font-light max-w-2xl mx-auto leading-relaxed">
          Book your personalized aesthetic consultation at our Downtown or Champions clinic. 
          Discover how our Beauty & Wellness Membership delivers maximum transformation with up to 80% savings.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-lg bg-[#bfa16a] hover:bg-[#aa8b50] text-[#161614] font-semibold text-xs tracking-wider uppercase transition-all shadow-xl flex items-center gap-2 group"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={MEDSPA_INFO.phoneTel}
            className="px-7 py-3.5 rounded-lg bg-[#282622] hover:bg-[#33302a] border border-[#403c34] text-[#fbfaf8] hover:text-[#bfa16a] text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#bfa16a]" />
            <span>{MEDSPA_INFO.phone}</span>
          </a>
        </div>

        <div className="pt-6 text-xs text-[#8c887d]">
          Downtown Location (3312 St Emanuel St) • Champions Location (13303 Champion Forest Dr)
        </div>

      </div>
    </section>
  );
};
