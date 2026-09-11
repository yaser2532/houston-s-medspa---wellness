import React, { useState } from 'react';
import { CreditCard, CheckCircle2, ShieldCheck, ArrowRight, DollarSign } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FinancingSectionProps {
  onOpenBooking: () => void;
}

export const FinancingSection: React.FC<FinancingSectionProps> = ({ onOpenBooking }) => {
  const { theme } = useTheme();
  const [amount, setAmount] = useState<number>(1500);

  // Approximate Cherry payment calculations
  const plan3Mo = Math.round(amount / 3);
  const plan6Mo = Math.round((amount * 1.05) / 6);
  const plan12Mo = Math.round((amount * 1.12) / 12);
  const plan24Mo = Math.round((amount * 1.22) / 24);

  return (
    <section
      id="financing"
      className={`py-16 sm:py-24 border-b transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#161614] text-[#fbfaf8] border-[#2d2b27]'
          : 'bg-[#faf8f5] text-[#161614] border-[#e8e3d8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Information & Trust */}
          <div className="lg:col-span-6 space-y-6">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium tracking-widest uppercase ${
                theme === 'dark'
                  ? 'bg-[#23221e] border-[#bfa16a]/30 text-[#d8c5a2]'
                  : 'bg-[#f0eae0] border-[#bfa16a]/40 text-[#8c734b]'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5 text-[#bfa16a]" />
              <span>Cherry Partner Clinic</span>
            </div>

            <h2 className={`font-serif text-3xl sm:text-4xl font-medium tracking-tight ${
              theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
            }`}>
              Flexible Financing with Cherry: <br />
              <span className="text-[#bfa16a] italic font-normal">
                Invest in Your Confidence Today
              </span>
            </h2>

            <p className={`text-sm sm:text-base font-light leading-relaxed ${
              theme === 'dark' ? 'text-[#b8b4a7]' : 'text-[#615d55]'
            }`}>
              Don’t let upfront costs delay your aesthetic or wellness goals. Houston’s Medspa + Wellness 
              partners with Cherry to provide flexible, transparent payment plans with zero hidden fees 
              and options as low as 0% APR.
            </p>

            <div className={`space-y-3 pt-2 ${
              theme === 'dark' ? 'text-[#ddd9cf]' : 'text-[#444039]'
            }`}>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#bfa16a] flex-shrink-0" />
                <span>0% APR financing options available</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#bfa16a] flex-shrink-0" />
                <span>Instant 60-second digital application process</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#bfa16a] flex-shrink-0" />
                <span>No hard credit check impact upon initial inquiry</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#bfa16a] flex-shrink-0" />
                <span>Applicable to memberships, package treatments, and retail care</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded bg-[#bfa16a] hover:bg-[#aa8b50] text-[#161614] font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2"
              >
                <span>Apply or Inquire About Cherry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className={`text-xs ${theme === 'dark' ? 'text-[#8c887d]' : 'text-[#7a766c]'}`}>
                Slug: <strong className={theme === 'dark' ? 'text-[#c8c4b7]' : 'text-[#161614]'}>leluxbeautique / Houston's Medspa</strong>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Estimator Widget */}
          <div
            className={`lg:col-span-6 rounded-2xl p-7 sm:p-8 border shadow-xl space-y-6 transition-colors ${
              theme === 'dark'
                ? 'bg-[#1d1c19] border-[#33302a]'
                : 'bg-[#ffffff] border-[#ded7c8]'
            }`}
          >
            <div className={`flex items-center justify-between pb-4 border-b ${
              theme === 'dark' ? 'border-[#2d2b27]' : 'border-[#eee9df]'
            }`}>
              <div>
                <h3 className={`font-serif text-lg font-semibold ${
                  theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                }`}>
                  Monthly Payment Estimator
                </h3>
                <p className={`text-xs ${
                  theme === 'dark' ? 'text-[#8c887d]' : 'text-[#736e63]'
                }`}>
                  Select your treatment investment amount
                </p>
              </div>
              <span
                className={`px-2.5 py-1 rounded text-[11px] font-semibold border ${
                  theme === 'dark'
                    ? 'bg-[#2a2824] text-[#d4af37] border-[#bfa16a]/30'
                    : 'bg-[#f5ede0] text-[#8c734b] border-[#bfa16a]/40'
                }`}
              >
                Cherry Powered
              </span>
            </div>

            {/* Slider / Amount Buttons */}
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <span className={`text-xs uppercase font-semibold tracking-wider ${
                  theme === 'dark' ? 'text-[#a39f93]' : 'text-[#736e63]'
                }`}>
                  Treatment Total:
                </span>
                <span className="font-serif text-2xl font-bold text-[#bfa16a]">
                  ${amount.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min={300}
                max={5000}
                step={100}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className={`w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#bfa16a] ${
                  theme === 'dark' ? 'bg-[#2a2824]' : 'bg-[#ded7c8]'
                }`}
              />

              <div className={`flex justify-between text-[10px] mt-1 ${
                theme === 'dark' ? 'text-[#736e63]' : 'text-[#8c887d]'
              }`}>
                <span>$300</span>
                <span>$1,500</span>
                <span>$3,000</span>
                <span>$5,000</span>
              </div>

              {/* Quick Presets */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[500, 1000, 1500, 2500, 4000].map(val => (
                  <button
                    key={val}
                    onClick={() => setAmount(val)}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      amount === val
                        ? 'bg-[#bfa16a] text-[#161614] font-semibold'
                        : theme === 'dark'
                        ? 'bg-[#23221f] text-[#c2beaf] hover:bg-[#2d2b27]'
                        : 'bg-[#f3ede1] text-[#4d483f] hover:bg-[#eae3d5]'
                    }`}
                  >
                    ${val.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Options Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div
                className={`p-4 rounded-xl border text-center transition-colors ${
                  theme === 'dark'
                    ? 'bg-[#23221e] border-[#3b3832]'
                    : 'bg-[#fbf9f5] border-[#ded7c8]'
                }`}
              >
                <span className={`text-[10px] uppercase font-bold tracking-wider block mb-0.5 ${
                  theme === 'dark' ? 'text-[#d4af37]' : 'text-[#8c734b]'
                }`}>
                  3 Months (0% APR)
                </span>
                <div className={`font-serif text-xl font-bold ${
                  theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                }`}>
                  ${plan3Mo}/mo
                </div>
                <span className={`text-[10px] ${
                  theme === 'dark' ? 'text-[#8c887d]' : 'text-[#736e63]'
                }`}>Interest-Free</span>
              </div>

              <div
                className={`p-4 rounded-xl border text-center transition-colors ${
                  theme === 'dark'
                    ? 'bg-[#23221e] border-[#3b3832]'
                    : 'bg-[#fbf9f5] border-[#ded7c8]'
                }`}
              >
                <span className={`text-[10px] uppercase font-bold tracking-wider block mb-0.5 ${
                  theme === 'dark' ? 'text-[#b8b4a7]' : 'text-[#615d55]'
                }`}>
                  6 Months
                </span>
                <div className={`font-serif text-xl font-bold ${
                  theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                }`}>
                  ${plan6Mo}/mo
                </div>
                <span className={`text-[10px] ${
                  theme === 'dark' ? 'text-[#8c887d]' : 'text-[#736e63]'
                }`}>Low Monthly</span>
              </div>

              <div
                className={`p-4 rounded-xl border text-center transition-colors ${
                  theme === 'dark'
                    ? 'bg-[#23221e] border-[#3b3832]'
                    : 'bg-[#fbf9f5] border-[#ded7c8]'
                }`}
              >
                <span className={`text-[10px] uppercase font-bold tracking-wider block mb-0.5 ${
                  theme === 'dark' ? 'text-[#b8b4a7]' : 'text-[#615d55]'
                }`}>
                  12 Months
                </span>
                <div className={`font-serif text-xl font-bold ${
                  theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                }`}>
                  ${plan12Mo}/mo
                </div>
                <span className={`text-[10px] ${
                  theme === 'dark' ? 'text-[#8c887d]' : 'text-[#736e63]'
                }`}>Popular Term</span>
              </div>

              <div
                className={`p-4 rounded-xl border text-center transition-colors ${
                  theme === 'dark'
                    ? 'bg-[#23221e] border-[#3b3832]'
                    : 'bg-[#fbf9f5] border-[#ded7c8]'
                }`}
              >
                <span className={`text-[10px] uppercase font-bold tracking-wider block mb-0.5 ${
                  theme === 'dark' ? 'text-[#b8b4a7]' : 'text-[#615d55]'
                }`}>
                  24 Months
                </span>
                <div className={`font-serif text-xl font-bold ${
                  theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                }`}>
                  ${plan24Mo}/mo
                </div>
                <span className={`text-[10px] ${
                  theme === 'dark' ? 'text-[#8c887d]' : 'text-[#736e63]'
                }`}>Maximum Flexibility</span>
              </div>
            </div>

            <p className={`text-[10px] italic text-center ${
              theme === 'dark' ? 'text-[#736e63]' : 'text-[#8c887d]'
            }`}>
              *Payment amounts are estimates. Actual terms, APR, and down payments vary based on credit qualification through Cherry Technologies.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
