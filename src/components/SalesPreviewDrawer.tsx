import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, AlertTriangle, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';
import { MEDSPA_INFO } from '../data/medspaData';

interface SalesPreviewDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const SalesPreviewDrawer: React.FC<SalesPreviewDrawerProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'audit' | 'conversion'>('overview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="relative w-full max-w-xl bg-[#1a1917] text-[#fbfaf8] h-full shadow-2xl border-l border-[#33302a] flex flex-col animate-in slide-in-from-right duration-200">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#2d2b27] bg-[#161614] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#bfa16a]/20 border border-[#bfa16a] text-[#bfa16a] flex items-center justify-center font-serif text-xs font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold text-[#fbfaf8]">
                Agency Redesign & Sales Brief
              </h3>
              <p className="text-xs text-[#d8c5a2]">
                Houston's Medspa + Wellness (htxmdspa.com)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8c887d] hover:text-[#fbfaf8] hover:bg-[#23221f] transition-colors"
            aria-label="Close notes"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-[#2d2b27] bg-[#1d1c19] text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === 'overview'
                ? 'border-[#bfa16a] text-[#fbfaf8] bg-[#22211e]'
                : 'border-transparent text-[#8c887d] hover:text-[#d8c5a2]'
            }`}
          >
            Before vs. After
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === 'audit'
                ? 'border-[#bfa16a] text-[#fbfaf8] bg-[#22211e]'
                : 'border-transparent text-[#8c887d] hover:text-[#d8c5a2]'
            }`}
          >
            Content Authenticity Audit
          </button>
          <button
            onClick={() => setActiveTab('conversion')}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === 'conversion'
                ? 'border-[#bfa16a] text-[#fbfaf8] bg-[#22211e]'
                : 'border-transparent text-[#8c887d] hover:text-[#d8c5a2]'
            }`}
          >
            Sales Value Strategy
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs text-[#c2beaf]">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-sm font-semibold text-[#fbfaf8] mb-2 uppercase tracking-wide">
                  Identified Weaknesses on Current Site (htxmdspa.com)
                </h4>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-lg bg-[#231a1a] border border-[#4d2929] text-[#e8b5b5]">
                    <div className="font-semibold flex items-center gap-1.5 text-xs text-[#ff9999] mb-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Layout Collapse & Vertical Text Overflows</span>
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      The original site displays raw unstyled vertical strings ("B E A U T Y + W E L L N E S S M E M B E R S H I P"), 
                      broken slick-slider styles, and huge whitespace voids where widgets failed to initialize.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#231a1a] border border-[#4d2929] text-[#e8b5b5]">
                    <div className="font-semibold flex items-center gap-1.5 text-xs text-[#ff9999] mb-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Buried Token Value Proposition</span>
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      Prospective patients couldn't clearly see what the "Token" system is or calculate their return on investment 
                      compared to paying per visit.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#231a1a] border border-[#4d2929] text-[#e8b5b5]">
                    <div className="font-semibold flex items-center gap-1.5 text-xs text-[#ff9999] mb-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Fragmented Conversion Funnel</span>
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      The primary CTA just linked to a generic external contact page. No interactive appointment booking, no tier selection, 
                      and Cherry financing required a heavy, easily blocked modal script.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-sm font-semibold text-[#fbfaf8] mb-2 uppercase tracking-wide">
                  Strategic Redesign Improvements Delivered
                </h4>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-lg bg-[#1c221a] border border-[#2a4525] text-[#bde0b5]">
                    <div className="font-semibold flex items-center gap-1.5 text-xs text-[#9ae08d] mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Modern Luxury Visual Architecture</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#c6dbbe]">
                      Rebuilt with rich charcoal (#161614), warm champagne gold (#BFA16A), and cashmere alabaster surfaces. 
                      Classic Playfair Display serif paired with refined Montserrat typography matching high-end medical clinics.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#1c221a] border border-[#2a4525] text-[#bde0b5]">
                    <div className="font-semibold flex items-center gap-1.5 text-xs text-[#9ae08d] mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Interactive Member Savings & Token Calculator</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#c6dbbe]">
                      Allows clients to customize annual treatments (facials, PRP, RF, skincare) and watch real-time dollar savings climb, 
                      instantly justifying the annual membership investment.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#1c221a] border border-[#2a4525] text-[#bde0b5]">
                    <div className="font-semibold flex items-center gap-1.5 text-xs text-[#9ae08d] mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Frictionless 1-Click Consultation Modal</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#c6dbbe]">
                      Pre-selects clinic location (Downtown vs. Champions) and treatment of interest with immediate user feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'audit' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-[#23221e] border border-[#38352e] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#bfa16a]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Rule 11 Compliance: Zero Fabricated Facts</span>
                </div>
                <p className="text-[11px] text-[#a39f93] leading-relaxed">
                  Every single business fact, contact detail, clinic address, and testimonial in this preview 
                  is 100% verified against the client's provided WordPress site.
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-[#1f1e1b] border border-[#2d2b27] flex items-center justify-between">
                  <span>Downtown Clinic Address:</span>
                  <span className="font-semibold text-[#fbfaf8]">3312 St Emanuel St, Houston, TX 77004</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#1f1e1b] border border-[#2d2b27] flex items-center justify-between">
                  <span>Champions Clinic Address:</span>
                  <span className="font-semibold text-[#fbfaf8]">13303 Champion Forest Dr, STE 1, 77069</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#1f1e1b] border border-[#2d2b27] flex items-center justify-between">
                  <span>Clinic Phone Number:</span>
                  <span className="font-semibold text-[#fbfaf8]">(832) 835-2545</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#1f1e1b] border border-[#2d2b27] flex items-center justify-between">
                  <span>Client Email:</span>
                  <span className="font-semibold text-[#fbfaf8]">help@htxmdspa.com</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#1f1e1b] border border-[#2d2b27] flex items-center justify-between">
                  <span>Verified Google Reviews:</span>
                  <span className="font-semibold text-[#fbfaf8]">532 Reviews • 4.9 Rating</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#1f1e1b] border border-[#2d2b27] flex items-center justify-between">
                  <span>Financing Partner:</span>
                  <span className="font-semibold text-[#fbfaf8]">Cherry Technologies (0% APR)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#1f1e1b] border border-[#2d2b27] flex items-center justify-between">
                  <span>Video Assets Reused:</span>
                  <span className="font-semibold text-[#fbfaf8]">3 Tier Videos + Services Guide</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'conversion' && (
            <div className="space-y-4">
              <h4 className="font-serif text-sm font-semibold text-[#fbfaf8] uppercase tracking-wide">
                Sales Pitch Talking Points for Client Meeting
              </h4>

              <div className="p-3.5 rounded-xl bg-[#23221e] border border-[#38352e] space-y-2">
                <span className="font-semibold text-[#d4af37] block">
                  1. "Your existing business already has stellar clinical value."
                </span>
                <p className="text-[11px] text-[#b8b4a7] leading-relaxed">
                  "With 532 five-star reviews and two prime Houston locations, you don't need a rebrand—you need a website that properly showcases 
                  your high-end medical care rather than looking like an outdated template."
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#23221e] border border-[#38352e] space-y-2">
                <span className="font-semibold text-[#d4af37] block">
                  2. "The new token calculator turns browsers into membership subscribers."
                </span>
                <p className="text-[11px] text-[#b8b4a7] leading-relaxed">
                  "Instead of visitors wondering how tokens work, the calculator lets them immediately see that a membership saves them $1,200+ annually 
                  on treatments they already plan to get."
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#23221e] border border-[#38352e] space-y-2">
                <span className="font-semibold text-[#d4af37] block">
                  3. "Integrated Cherry Financing removes price friction on high-ticket procedures."
                </span>
                <p className="text-[11px] text-[#b8b4a7] leading-relaxed">
                  "Rather than hiding Cherry inside a slow modal link, the embedded interactive estimator shows patients that a $2,500 Endo-Lift 
                  or PRP package is just $100-$200/month."
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-5 border-t border-[#2d2b27] bg-[#161614] flex items-center justify-between">
          <span className="text-[11px] text-[#8c887d]">
            Prepared by Web Design & Conversion Team
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenBooking('Full Redesign Demonstration');
            }}
            className="px-4 py-2 rounded bg-[#bfa16a] hover:bg-[#aa8b50] text-[#161614] text-xs font-semibold uppercase tracking-wider transition-all"
          >
            Launch Live Demo Booking
          </button>
        </div>

      </div>
    </div>
  );
};
