import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, Check, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SavingsCalculatorProps {
  onOpenBooking: (serviceName?: string) => void;
}

interface RoutineItem {
  id: string;
  name: string;
  category: string;
  regularPrice: number;
  memberEstPrice: number;
  defaultCount: number;
  maxCount: number;
  unit: string;
}

const ESTIMATED_TREATMENTS: RoutineItem[] = [
  {
    id: 'facials',
    name: 'Custom Medical Facials / Peels',
    category: 'Glow Maintenance',
    regularPrice: 175,
    memberEstPrice: 65, // up to ~65% savings with token
    defaultCount: 6,
    maxCount: 12,
    unit: 'visits/year',
  },
  {
    id: 'vampire',
    name: 'Vampire Facial (PRP Microneedling)',
    category: 'Regenerative Collagen',
    regularPrice: 650,
    memberEstPrice: 220, // up to 70%+ savings for members
    defaultCount: 2,
    maxCount: 6,
    unit: 'sessions/year',
  },
  {
    id: 'rf_tightening',
    name: 'Radio Frequency Skin Tightening',
    category: 'Firming & Contouring',
    regularPrice: 350,
    memberEstPrice: 140, // deep savings with tokens
    defaultCount: 3,
    maxCount: 8,
    unit: 'sessions/year',
  },
  {
    id: 'injectables',
    name: 'PRPFILL / Kybella / Injectables',
    category: 'Volume & Definition',
    regularPrice: 800,
    memberEstPrice: 560, // 30% off non-member services
    defaultCount: 1,
    maxCount: 4,
    unit: 'treatments/year',
  },
  {
    id: 'skincare',
    name: 'Clinical Retail Skincare & Devices',
    category: 'Take-Home Regimen',
    regularPrice: 400,
    memberEstPrice: 360, // 10% off
    defaultCount: 1,
    maxCount: 3,
    unit: 'annual orders',
  },
];

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onOpenBooking }) => {
  const { theme } = useTheme();
  const [counts, setCounts] = useState<Record<string, number>>({
    facials: 4,
    vampire: 2,
    rf_tightening: 2,
    injectables: 1,
    skincare: 1,
  });

  const handleCountChange = (id: string, value: number) => {
    setCounts(prev => ({
      ...prev,
      [id]: Math.max(0, value),
    }));
  };

  // Calculate totals
  const totalRegular = ESTIMATED_TREATMENTS.reduce((sum, item) => {
    return sum + (counts[item.id] || 0) * item.regularPrice;
  }, 0);

  const totalMember = ESTIMATED_TREATMENTS.reduce((sum, item) => {
    return sum + (counts[item.id] || 0) * item.memberEstPrice;
  }, 0);

  const totalSavings = Math.max(0, totalRegular - totalMember);
  const savingsPercent = totalRegular > 0 ? Math.round((totalSavings / totalRegular) * 100) : 0;

  return (
    <section
      id="calculator"
      className={`py-16 sm:py-24 border-b transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#161614] text-[#fbfaf8] border-[#2d2b27]'
          : 'bg-[#fbfaf8] text-[#1a1917] border-[#e8e3d8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 ${
              theme === 'dark'
                ? 'bg-[#262420] text-[#d8c5a2] border border-[#38352e]'
                : 'bg-[#f2ecdf] text-[#8c734b]'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-[#bfa16a]" />
            <span>Interactive Value Assessment</span>
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-3 ${
            theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
          }`}>
            Member Savings & Token Calculator
          </h2>
          <p className={`text-base leading-relaxed font-light ${
            theme === 'dark' ? 'text-[#b8b4a7]' : 'text-[#6b675e]'
          }`}>
            Compare non-member single session rates against HMW’s Beauty & Wellness Membership privileges. 
            Adjust your annual beauty routine below to see your estimated savings.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div
            className={`lg:col-span-7 rounded-2xl p-6 sm:p-8 border shadow-sm space-y-6 transition-colors ${
              theme === 'dark'
                ? 'bg-[#1e1d1a] border-[#33302a]'
                : 'bg-[#ffffff] border-[#e8e3d8]'
            }`}
          >
            <div className={`flex items-center justify-between pb-4 border-b ${
              theme === 'dark' ? 'border-[#2d2b27]' : 'border-[#f0ede6]'
            }`}>
              <div>
                <h3 className={`font-serif text-lg font-semibold ${
                  theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                }`}>
                  Select Your Estimated Annual Treatments
                </h3>
                <p className={`text-xs ${
                  theme === 'dark' ? 'text-[#a39f93]' : 'text-[#827e74]'
                }`}>
                  Use the sliders or counters to customize your personal aesthetic plan
                </p>
              </div>
              <button
                onClick={() => setCounts({ facials: 4, vampire: 2, rf_tightening: 2, injectables: 1, skincare: 1 })}
                className="text-xs text-[#bfa16a] hover:underline font-semibold"
              >
                Reset
              </button>
            </div>

            <div className="space-y-5">
              {ESTIMATED_TREATMENTS.map(item => {
                const currentVal = counts[item.id] || 0;

                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border transition-colors ${
                      theme === 'dark'
                        ? 'bg-[#23221f] border-[#36332b]'
                        : 'bg-[#fcfbf9] border-[#ebe7df]'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div>
                        <span className={`text-[10px] uppercase tracking-wider font-semibold block ${
                          theme === 'dark' ? 'text-[#d8c5a2]' : 'text-[#8c734b]'
                        }`}>
                          {item.category}
                        </span>
                        <span className={`font-medium text-sm ${
                          theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                        }`}>
                          {item.name}
                        </span>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCountChange(item.id, currentVal - 1)}
                          className={`w-7 h-7 rounded flex items-center justify-center font-bold text-sm transition-colors ${
                            theme === 'dark'
                              ? 'bg-[#2c2a26] text-[#fbfaf8] hover:bg-[#bfa16a] hover:text-[#161614]'
                              : 'bg-[#eee9df] text-[#161614] hover:bg-[#bfa16a] hover:text-[#161614]'
                          }`}
                          aria-label={`Decrease ${item.name}`}
                        >
                          -
                        </button>
                        <span className={`w-8 text-center font-semibold text-sm ${
                          theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                        }`}>
                          {currentVal}
                        </span>
                        <button
                          onClick={() => handleCountChange(item.id, currentVal + 1)}
                          className={`w-7 h-7 rounded flex items-center justify-center font-bold text-sm transition-colors ${
                            theme === 'dark'
                              ? 'bg-[#2c2a26] text-[#fbfaf8] hover:bg-[#bfa16a] hover:text-[#161614]'
                              : 'bg-[#eee9df] text-[#161614] hover:bg-[#bfa16a] hover:text-[#161614]'
                          }`}
                          aria-label={`Increase ${item.name}`}
                        >
                          +
                        </button>
                        <span className="text-xs text-[#8c887d] ml-1">{item.unit}</span>
                      </div>
                    </div>

                    <div className={`flex items-center justify-between text-xs pt-2 border-t ${
                      theme === 'dark'
                        ? 'border-[#2d2b27] text-[#a8a49a]'
                        : 'border-[#f0ede6] text-[#736f66]'
                    }`}>
                      <span>Regular: ~${item.regularPrice}/ea</span>
                      <span className={theme === 'dark' ? 'text-[#d8c5a2] font-medium' : 'text-[#8c734b] font-medium'}>
                        Member Token Rate: ~${item.memberEstPrice}/ea
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className={`text-[11px] italic leading-tight ${
              theme === 'dark' ? 'text-[#858075]' : 'text-[#918c82]'
            }`}>
              *Estimates based on typical medspa service menu value and verified membership tier token allocations. Specific treatment plans are customized during your provider consultation.
            </p>
          </div>

          {/* Results Summary Column */}
          <div
            className={`lg:col-span-5 rounded-2xl p-7 sm:p-8 border shadow-xl sticky top-28 space-y-6 transition-colors ${
              theme === 'dark'
                ? 'bg-[#181715] text-[#fbfaf8] border-[#2d2b27]'
                : 'bg-[#ffffff] text-[#161614] border-[#ded7c8]'
            }`}
          >
            
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#bfa16a]">
              <TrendingUp className="w-4 h-4" />
              <span>Projected Annual Breakdown</span>
            </div>

            <h3 className={`font-serif text-2xl font-medium ${
              theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
            }`}>
              Your Aesthetic Investment Summary
            </h3>

            {/* Price Comparison */}
            <div className="space-y-3 pt-2">
              <div className={`p-3.5 rounded-lg border flex items-center justify-between text-sm ${
                theme === 'dark'
                  ? 'bg-[#21201d] border-[#33302a]'
                  : 'bg-[#faf8f4] border-[#e8e3d8]'
              }`}>
                <span className={theme === 'dark' ? 'text-[#a39f93]' : 'text-[#6b675e]'}>Standard Non-Member Cost:</span>
                <span className="font-serif font-semibold line-through text-[#8c887d]">
                  ${totalRegular.toLocaleString()}
                </span>
              </div>

              <div className={`p-3.5 rounded-lg border flex items-center justify-between text-sm ${
                theme === 'dark'
                  ? 'bg-[#21201d] border-[#33302a]'
                  : 'bg-[#faf8f4] border-[#e8e3d8]'
              }`}>
                <span className={theme === 'dark' ? 'text-[#a39f93]' : 'text-[#6b675e]'}>With HMW Membership Tokens:</span>
                <span className={`font-serif font-semibold ${theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'}`}>
                  ${totalMember.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Big Callout Box */}
            <div className={`p-5 rounded-xl border text-center space-y-1 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-[#23211c] to-[#1c1b18] border-[#bfa16a]/40'
                : 'bg-gradient-to-br from-[#f8f4eb] to-[#f0e8d6] border-[#bfa16a]/50'
            }`}>
              <span className={`text-[11px] font-semibold uppercase tracking-widest ${
                theme === 'dark' ? 'text-[#d8c5a2]' : 'text-[#8c734b]'
              }`}>
                Estimated Annual Savings
              </span>
              <div className="font-serif text-4xl font-bold text-[#bfa16a]">
                ${totalSavings.toLocaleString()}
              </div>
              <span className={`inline-block text-xs font-medium ${
                theme === 'dark' ? 'text-[#c8c4b7]' : 'text-[#555148]'
              }`}>
                Save up to <strong className={theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'}>{savingsPercent}%</strong> on your annual routine
              </span>
            </div>

            {/* Included Guarantees */}
            <div className={`space-y-2 text-xs pt-2 ${
              theme === 'dark' ? 'text-[#b8b4a7]' : 'text-[#555148]'
            }`}>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#bfa16a] flex-shrink-0" />
                <span>Unused tokens automatically roll over each month</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#bfa16a] flex-shrink-0" />
                <span>$50 Guest Pass privileges included</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#bfa16a] flex-shrink-0" />
                <span>10% ongoing discount on all clinical skincare</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => onOpenBooking('Membership Consultation')}
              className="w-full py-3.5 rounded-lg bg-[#bfa16a] hover:bg-[#aa8b50] text-[#161614] font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Lock In Member Rates</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className={`text-center text-[10px] ${
              theme === 'dark' ? 'text-[#736e63]' : 'text-[#8c887d]'
            }`}>
              Speak with an HMW treatment coordinator to finalize your customized token plan.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
