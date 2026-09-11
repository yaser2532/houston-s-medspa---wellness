import React, { useState } from 'react';
import { Sparkles, Gift, RotateCcw, Percent, Users, Award, Shield, CheckCircle2, Play } from 'lucide-react';
import { MEMBERSHIP_PERKS, MEDSPA_INFO } from '../data/medspaData';
import { useTheme } from '../context/ThemeContext';

interface MembershipOverviewProps {
  onOpenBooking: () => void;
}

export const MembershipOverview: React.FC<MembershipOverviewProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'perks' | 'how-tokens-work'>('perks');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const { theme } = useTheme();

  return (
    <section
      id="memberships"
      className={`py-16 sm:py-24 border-b transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#1a1917] text-[#fbfaf8] border-[#2d2b27]'
          : 'bg-[#f8f6f2] text-[#1a1917] border-[#e8e3d8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 ${
              theme === 'dark'
                ? 'bg-[#262420] text-[#d8c5a2] border border-[#38352e]'
                : 'bg-[#eee9df] text-[#8c734b]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Houston's Medspa + Wellness</span>
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4 ${
            theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
          }`}>
            Beauty + Wellness Membership
          </h2>
          <p className={`text-base leading-relaxed font-light ${
            theme === 'dark' ? 'text-[#b8b4a7]' : 'text-[#6b675e]'
          }`}>
            Designed to make clinical skincare, body contouring, and advanced regenerative treatments 
            seamless, consistent, and significantly more accessible with predictable monthly value.
          </p>

          {/* Interactive Mode Toggle */}
          <div
            className={`mt-6 flex w-full flex-col rounded-lg p-1 border min-[26rem]:inline-flex min-[26rem]:w-auto min-[26rem]:flex-row ${
              theme === 'dark'
                ? 'bg-[#23221f] border-[#38352e]'
                : 'bg-[#eae4d8] border-[#ded7c8]'
            }`}
          >
            <button
              onClick={() => setActiveTab('perks')}
              className={`w-full px-4 py-2 rounded-md text-xs font-semibold tracking-wider uppercase transition-all min-[26rem]:w-auto ${
                activeTab === 'perks'
                  ? 'bg-[#bfa16a] text-[#161614] shadow-sm'
                  : theme === 'dark'
                  ? 'text-[#a39f93] hover:text-[#fbfaf8]'
                  : 'text-[#615d55] hover:text-[#161614]'
              }`}
            >
              Core Member Perks (4 Pillars)
            </button>
            <button
              onClick={() => setActiveTab('how-tokens-work')}
              className={`w-full px-4 py-2 rounded-md text-xs font-semibold tracking-wider uppercase transition-all min-[26rem]:w-auto ${
                activeTab === 'how-tokens-work'
                  ? 'bg-[#bfa16a] text-[#161614] shadow-sm'
                  : theme === 'dark'
                  ? 'text-[#a39f93] hover:text-[#fbfaf8]'
                  : 'text-[#615d55] hover:text-[#161614]'
              }`}
            >
              How Beauty Tokens Work
            </button>
          </div>
        </div>

        {/* Tab 1: 4 Key Verified Pillars */}
        {activeTab === 'perks' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {MEMBERSHIP_PERKS.map((perk, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 border shadow-sm hover:shadow-md hover:border-[#bfa16a]/50 transition-all flex flex-col justify-between ${
                  theme === 'dark'
                    ? 'bg-[#201f1c] border-[#33302a]'
                    : 'bg-[#ffffff] border-[#e8e3d8]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif font-bold text-[#bfa16a]">
                      {perk.stat}
                    </span>
                    <span
                      className={`text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded border ${
                        theme === 'dark'
                          ? 'bg-[#2a2824] text-[#d8c5a2] border-[#3d3a33]'
                          : 'bg-[#f7f4ee] text-[#8c734b] border-[#e8e3d8]'
                      }`}
                    >
                      {perk.statLabel}
                    </span>
                  </div>

                  <h3 className={`font-serif text-lg font-semibold mb-1 ${
                    theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                  }`}>
                    {perk.title}
                  </h3>
                  <p className="text-xs font-medium text-[#bfa16a] uppercase tracking-wider mb-3">
                    {perk.subtitle}
                  </p>
                  <p className={`text-xs leading-relaxed ${
                    theme === 'dark' ? 'text-[#a8a49a]' : 'text-[#666258]'
                  }`}>
                    {perk.description}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-4 border-t flex items-center text-[11px] font-semibold ${
                    theme === 'dark'
                      ? 'border-[#2d2b27] text-[#d8c5a2]'
                      : 'border-[#f0ede6] text-[#8c734b]'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-[#bfa16a]" />
                  <span>Verified Client Benefit</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: How Tokens Work Explainer */}
        {activeTab === 'how-tokens-work' && (
          <div
            className={`rounded-xl p-8 border shadow-sm mb-16 max-w-4xl mx-auto transition-colors ${
              theme === 'dark'
                ? 'bg-[#201f1c] border-[#33302a]'
                : 'bg-[#ffffff] border-[#e8e3d8]'
            }`}
          >
            <h3 className={`font-serif text-2xl font-semibold mb-2 text-center ${
              theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
            }`}>
              The Beauty Token Experience
            </h3>
            <p className={`text-sm text-center max-w-xl mx-auto mb-8 ${
              theme === 'dark' ? 'text-[#b8b4a7]' : 'text-[#666258]'
            }`}>
              No confusing fine print. Your monthly draft translates directly into service tokens 
              that can be redeemed for treatments or rolled over.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div
                className={`p-5 rounded-lg border text-center ${
                  theme === 'dark'
                    ? 'bg-[#181715] border-[#2d2b27]'
                    : 'bg-[#fbfaf8] border-[#e8e3d8]'
                }`}
              >
                <div
                  className={`w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center font-serif font-bold ${
                    theme === 'dark'
                      ? 'bg-[#2c2923] text-[#d4af37]'
                      : 'bg-[#f3ede1] text-[#8c734b]'
                  }`}
                >
                  1
                </div>
                <h4 className={`font-semibold text-sm mb-1.5 ${
                  theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                }`}>Monthly Beauty Draft</h4>
                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-[#a39f93]' : 'text-[#666258]'
                }`}>
                  Subscribed members receive Beauty Tokens each billing cycle. Prepay annual to unlock all tokens immediately.
                </p>
              </div>

              <div
                className={`p-5 rounded-lg border text-center ${
                  theme === 'dark'
                    ? 'bg-[#181715] border-[#2d2b27]'
                    : 'bg-[#fbfaf8] border-[#e8e3d8]'
                }`}
              >
                <div
                  className={`w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center font-serif font-bold ${
                    theme === 'dark'
                      ? 'bg-[#2c2923] text-[#d4af37]'
                      : 'bg-[#f3ede1] text-[#8c734b]'
                  }`}
                >
                  2
                </div>
                <h4 className={`font-semibold text-sm mb-1.5 ${
                  theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                }`}>Curated Provider Plan</h4>
                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-[#a39f93]' : 'text-[#666258]'
                }`}>
                  Your aesthetician or nurse curates treatments around your personal goals for maximum value and visible outcomes.
                </p>
              </div>

              <div
                className={`p-5 rounded-lg border text-center ${
                  theme === 'dark'
                    ? 'bg-[#181715] border-[#2d2b27]'
                    : 'bg-[#fbfaf8] border-[#e8e3d8]'
                }`}
              >
                <div
                  className={`w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center font-serif font-bold ${
                    theme === 'dark'
                      ? 'bg-[#2c2923] text-[#d4af37]'
                      : 'bg-[#f3ede1] text-[#8c734b]'
                  }`}
                >
                  3
                </div>
                <h4 className={`font-semibold text-sm mb-1.5 ${
                  theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                }`}>Rollover & Guest Pass</h4>
                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-[#a39f93]' : 'text-[#666258]'
                }`}>
                  Busy schedule? Tokens never expire while enrolled. Missed visits roll over, or bring a guest for only $50.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Detailed "Members Get More" Editorial Feature */}
        <div className="bg-[#161614] text-[#fbfaf8] rounded-2xl overflow-hidden border border-[#2d2b27] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Video / Media Preview */}
            <div className="lg:col-span-5 relative bg-[#1d1c19] min-h-[clamp(20rem,35vw,25rem)] flex items-center justify-center overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              >
                <source src={MEDSPA_INFO.videoGuideUrl} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#161614] via-transparent to-black/40" />

              <div className="relative z-10 p-6 text-center space-y-3">
                <span className="px-3 py-1 rounded-full bg-[#161614]/80 backdrop-blur-sm border border-[#bfa16a]/50 text-xs font-medium text-[#d8c5a2] uppercase tracking-wider inline-block">
                  Services Guide
                </span>
                <h4 className="font-serif text-xl font-medium text-[#fbfaf8]">
                  Curated Aesthetic Plans
                </h4>
                <p className="text-xs text-[#b8b4a7] max-w-xs mx-auto">
                  Watch how our providers customize treatments around your personal skin and wellness goals.
                </p>
              </div>
            </div>

            {/* Right: Detailed Content & Specific Verified Terms */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#bfa16a] mb-2">
                  Exclusive Privilege
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#fbfaf8] mb-4">
                  Members Get More: Why Houston Chooses HMW
                </h3>
                
                <p className="text-sm text-[#b8b4a7] leading-relaxed mb-6 font-light">
                  Our providers curate services around your personal goals, ensuring each visit delivers maximum value. 
                  Token usage varies by treatment, with select high-performance services requiring additional tokens.
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Percent className="w-4 h-4 text-[#bfa16a] mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-[#fbfaf8]">Up to 80% Off Signature Services:</strong>{' '}
                      <span className="text-[#a39f93]">
                        Beauty + Wellness members enjoy savings on services like the Vampire Facial that non-members don’t see.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-[#bfa16a] mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-[#fbfaf8]">Save 30% on Elite Non-Member Services:</strong>{' '}
                      <span className="text-[#a39f93]">
                        Substantial member discounts on advanced aesthetic procedures such as PRPFILL (Bio-Filler) and Endo-Lift.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-[#bfa16a] mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-[#fbfaf8]">Shareable $50 Guest Pass:</strong>{' '}
                      <span className="text-[#a39f93]">
                        Want to share the experience? Purchase a guest pass for $50 and either gift your tokens, or your guest acts as a member at member rates.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <RotateCcw className="w-4 h-4 text-[#bfa16a] mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-[#fbfaf8]">Rollover Protection:</strong>{' '}
                      <span className="text-[#a39f93]">
                        On a monthly draft and missed your visit? Your Token rolls over to the next month with zero penalty!
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Gift className="w-4 h-4 text-[#bfa16a] mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-[#fbfaf8]">10% Off Clinical Retail & Devices:</strong>{' '}
                      <span className="text-[#a39f93]">
                        Get 10% off retail medical skincare and at-home devices—even on items already discounted or on sale!
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA bar */}
              <div className="pt-6 border-t border-[#2d2b27] flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-[#8c887d]">
                  Annual membership with monthly draft or prepay options available.
                </div>
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-2.5 rounded bg-[#bfa16a] hover:bg-[#aa8b50] text-[#161614] font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  Join or Inquire Now
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
