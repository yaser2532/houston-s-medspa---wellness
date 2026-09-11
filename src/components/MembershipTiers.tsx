import React, { useState } from 'react';
import { Check, Sparkles, Video, ArrowRight, ShieldCheck } from 'lucide-react';
import { MEMBERSHIP_TIERS, MembershipTier } from '../data/medspaData';
import { useTheme } from '../context/ThemeContext';

interface MembershipTiersProps {
  onSelectTier: (tierName: string) => void;
}

export const MembershipTiers: React.FC<MembershipTiersProps> = ({ onSelectTier }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const { theme } = useTheme();

  return (
    <section
      className={`py-16 sm:py-24 border-b transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#161614] text-[#fbfaf8] border-[#2d2b27]'
          : 'bg-[#faf8f5] text-[#161614] border-[#e8e3d8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase mb-3 ${
              theme === 'dark'
                ? 'bg-[#262420] border border-[#bfa16a]/30 text-[#d8c5a2]'
                : 'bg-[#f0eae0] border border-[#bfa16a]/40 text-[#8c734b]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#bfa16a]" />
            <span>Curated Aesthetic Tiers</span>
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4 ${
            theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
          }`}>
            Memberships & Tiered Programs
          </h2>
          <p className={`text-base font-light leading-relaxed ${
            theme === 'dark' ? 'text-[#b8b4a7]' : 'text-[#615d55]'
          }`}>
            Ultimate savings and priority access to medical esthetic treatments. 
            Choose the tier tailored to your personal aesthetic goals and lifestyle.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_TIERS.map((tier: MembershipTier) => {
            const isPopular = tier.popular;

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? theme === 'dark'
                      ? 'bg-[#1e1d1a] border-2 border-[#bfa16a] shadow-xl shadow-[#bfa16a]/10 lg:-translate-y-2'
                      : 'bg-[#ffffff] border-2 border-[#bfa16a] shadow-xl shadow-[#bfa16a]/15 lg:-translate-y-2'
                    : theme === 'dark'
                    ? 'bg-[#1a1917] border border-[#33302a] hover:border-[#bfa16a]/50'
                    : 'bg-[#ffffff] border border-[#e2dac8] hover:border-[#bfa16a]/60 shadow-sm'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 inset-x-0 flex justify-center">
                    <span className="px-4 py-1 rounded-full bg-[#bfa16a] text-[#161614] text-[11px] font-bold uppercase tracking-widest shadow-md">
                      Most Popular Tier
                    </span>
                  </div>
                )}

                {/* Card Body */}
                <div className="p-7 sm:p-8 space-y-6">
                  
                  {/* Top Info */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className={`font-serif text-2xl font-semibold ${
                        theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                      }`}>
                        {tier.name}
                      </h3>
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded border ${
                          theme === 'dark'
                            ? 'bg-[#2a2721] text-[#bfa16a] border-[#bfa16a]/30'
                            : 'bg-[#f8f4ed] text-[#8c734b] border-[#bfa16a]/40'
                        }`}
                      >
                        {tier.tokenEquivalent}
                      </span>
                    </div>

                    <p className={`text-xs font-medium tracking-wide mb-3 ${
                      theme === 'dark' ? 'text-[#d4af37]' : 'text-[#8c734b]'
                    }`}>
                      {tier.subtitle}
                    </p>

                    <p className={`text-xs leading-relaxed ${
                      theme === 'dark' ? 'text-[#a39f93]' : 'text-[#666258]'
                    }`}>
                      {tier.description}
                    </p>
                  </div>

                  {/* Video Showcase Box */}
                  {tier.videoUrl && (
                    <div className={`relative rounded-lg overflow-hidden border aspect-video group ${
                      theme === 'dark' ? 'border-[#33302a] bg-black' : 'border-[#ded7c8] bg-black'
                    }`}>
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                      >
                        <source src={tier.videoUrl} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-[#fbfaf8]">
                        <span className="flex items-center gap-1 font-medium">
                          <Video className="w-3.5 h-3.5 text-[#bfa16a]" />
                          <span>Treatment Showcase</span>
                        </span>
                        <span className="text-[10px] text-[#b8b4a7] uppercase tracking-wider">HMW Video</span>
                      </div>
                    </div>
                  )}

                  {/* Pricing Placeholder with honest transparency */}
                  <div className={`pt-2 pb-1 border-b ${
                    theme === 'dark' ? 'border-[#2d2b27]' : 'border-[#eee9df]'
                  }`}>
                    <div className={`text-[11px] uppercase tracking-wider font-semibold ${
                      theme === 'dark' ? 'text-[#8a857a]' : 'text-[#7a756b]'
                    }`}>
                      Membership Rate
                    </div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className={`font-serif text-lg font-medium ${
                        theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                      }`}>
                        Special Rates Available
                      </span>
                    </div>
                    <p className={`text-[11px] mt-0.5 ${
                      theme === 'dark' ? 'text-[#bfa16a]' : 'text-[#8c734b]'
                    }`}>
                      Monthly auto-draft or prepaid annual with full token unlock
                    </p>
                  </div>

                  {/* Key Perks List */}
                  <div className="space-y-2.5 pt-2">
                    <div className={`text-xs font-semibold uppercase tracking-wider ${
                      theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                    }`}>
                      Included Privileges
                    </div>
                    {tier.highlightPerks.map((perk, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-2.5 text-xs ${
                          theme === 'dark' ? 'text-[#c2beaf]' : 'text-[#555148]'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 text-[#bfa16a] mt-0.5 flex-shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>

                  {/* Sample Treatments */}
                  <div className={`pt-3 border-t ${
                    theme === 'dark' ? 'border-[#2d2b27]' : 'border-[#eee9df]'
                  }`}>
                    <div className={`text-[11px] uppercase tracking-wider font-semibold mb-2 ${
                      theme === 'dark' ? 'text-[#8a857a]' : 'text-[#7a756b]'
                    }`}>
                      Sample Eligible Services
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {tier.sampleTreatments.map((treatment, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 rounded text-[11px] border ${
                            theme === 'dark'
                              ? 'bg-[#23221e] text-[#ded9cd] border-[#33302a]'
                              : 'bg-[#f4efe6] text-[#4d483f] border-[#ded7c8]'
                          }`}
                        >
                          {treatment}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Action Footer */}
                <div className="p-7 sm:p-8 pt-0">
                  <button
                    onClick={() => onSelectTier(tier.name)}
                    className={`w-full py-3 rounded-lg font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-[#bfa16a] hover:bg-[#aa8b50] text-[#161614] shadow-md'
                        : theme === 'dark'
                        ? 'bg-[#2a2824] hover:bg-[#bfa16a] hover:text-[#161614] text-[#fbfaf8] border border-[#3d3a33]'
                        : 'bg-[#f0eae0] hover:bg-[#bfa16a] hover:text-[#161614] text-[#161614] border border-[#ded7c8]'
                    }`}
                  >
                    <span>Inquire About {tier.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className={`text-center text-[10px] mt-2 ${
                    theme === 'dark' ? 'text-[#736e63]' : 'text-[#8c887d]'
                  }`}>
                    Terms: 30-day notice cancellation after minimum agreement
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Informative Guarantee / Note Footer */}
        <div className={`mt-12 p-5 rounded-xl border flex flex-wrap items-center justify-between gap-4 text-xs ${
          theme === 'dark'
            ? 'bg-[#1c1b18] border-[#2d2b27] text-[#a39f93]'
            : 'bg-[#ffffff] border-[#ded7c8] text-[#666258]'
        }`}>
          <div className={`flex items-center gap-2 ${theme === 'dark' ? 'text-[#d8c5a2]' : 'text-[#8c734b]'}`}>
            <ShieldCheck className="w-4 h-4 text-[#bfa16a]" />
            <span>Prepay for the year to unlock access to all your Beauty Tokens immediately</span>
          </div>
          <a
            href="#faqs"
            className="text-[#bfa16a] hover:underline font-semibold"
          >
            Review Membership Terms & Cancellation Policies &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};

