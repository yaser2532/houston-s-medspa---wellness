import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS, MEDSPA_INFO } from '../data/medspaData';
import { useTheme } from '../context/ThemeContext';

export const TestimonialsSection: React.FC = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section
      id="reviews"
      className={`py-16 sm:py-24 border-b transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#181715] text-[#fbfaf8] border-[#2d2b27]'
          : 'bg-[#fbfaf8] text-[#1a1917] border-[#e8e3d8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 ${
                theme === 'dark'
                  ? 'bg-[#282622] text-[#d8c5a2] border border-[#38352e]'
                  : 'bg-[#f2ecdf] text-[#8c734b]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#bfa16a]" />
              <span>Verified Patient Experiences</span>
            </div>
            <h2 className={`font-serif text-3xl sm:text-4xl font-medium tracking-tight ${
              theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
            }`}>
              Client Testimonials & Reviews
            </h2>
            <p className={`text-sm mt-2 font-light ${
              theme === 'dark' ? 'text-[#b0aba0]' : 'text-[#6b675e]'
            }`}>
              Real stories from our Houston clients across both Downtown and Champions clinics.
            </p>
          </div>

          {/* Google Trust Rating Badge */}
          <div
            className={`flex items-center gap-4 p-4 rounded-xl border shadow-sm transition-colors ${
              theme === 'dark'
                ? 'bg-[#22211e] border-[#36332c]'
                : 'bg-[#ffffff] border-[#e8e3d8]'
            }`}
          >
            <div
              className={`w-12 h-12 rounded-full border flex items-center justify-center font-bold text-lg text-[#bfa16a] font-serif ${
                theme === 'dark'
                  ? 'bg-[#2a2824] border-[#443f35]'
                  : 'bg-[#f6f2e9] border-[#e2d8c3]'
              }`}
            >
              G
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#bfa16a]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#bfa16a]" />
                ))}
              </div>
              <div className={`text-xs font-semibold mt-0.5 ${
                theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
              }`}>
                EXCELLENT • {MEDSPA_INFO.googleRating} Out of 5.0
              </div>
              <span className={`text-[11px] ${
                theme === 'dark' ? 'text-[#8c887d]' : 'text-[#736e63]'
              }`}>
                Based on <strong className={theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'}>{MEDSPA_INFO.reviewCount} Google reviews</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Featured Review Spotlight */}
        <div
          className={`rounded-2xl p-8 sm:p-12 border shadow-sm relative overflow-hidden mb-12 transition-colors ${
            theme === 'dark'
              ? 'bg-[#201f1c] border-[#36332c]'
              : 'bg-[#ffffff] border-[#e8e3d8]'
          }`}
        >
          <Quote className={`absolute top-6 right-6 w-24 h-24 -rotate-12 pointer-events-none transition-colors ${
            theme === 'dark' ? 'text-[#2a2824]' : 'text-[#f4eee2]'
          }`} />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#161614] text-[#d4af37] border border-[#bfa16a]/30 flex items-center justify-center font-bold text-xs font-serif">
                {TESTIMONIALS[currentIndex].avatarInitials}
              </div>
              <div>
                <h4 className={`font-semibold text-sm ${
                  theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                }`}>
                  {TESTIMONIALS[currentIndex].author}
                </h4>
                <div className={`flex items-center gap-2 text-xs ${
                  theme === 'dark' ? 'text-[#8c887d]' : 'text-[#736e63]'
                }`}>
                  <span className="text-[#bfa16a] font-medium">
                    {TESTIMONIALS[currentIndex].treatment}
                  </span>
                  <span>•</span>
                  <span>{TESTIMONIALS[currentIndex].date}</span>
                </div>
              </div>
            </div>

            <div className="flex text-[#bfa16a] mb-4">
              {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#bfa16a]" />
              ))}
            </div>

            <p className={`font-serif text-base sm:text-lg leading-relaxed italic ${
              theme === 'dark' ? 'text-[#eae7df]' : 'text-[#2a2926]'
            }`}>
              "{TESTIMONIALS[currentIndex].text}"
            </p>

            {/* Slider Controls */}
            <div className={`flex items-center justify-between pt-8 mt-6 border-t ${
              theme === 'dark' ? 'border-[#302e28]' : 'border-[#f0ede6]'
            }`}>
              <div className={`text-xs ${theme === 'dark' ? 'text-[#8c887d]' : 'text-[#736e63]'}`}>
                Showing review <strong className={theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'}>{currentIndex + 1}</strong> of {TESTIMONIALS.length}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                    theme === 'dark'
                      ? 'border-[#38352e] text-[#c2beaf] hover:border-[#bfa16a] hover:bg-[#bfa16a] hover:text-[#161614]'
                      : 'border-[#ded7c8] text-[#161614] hover:border-[#bfa16a] hover:bg-[#bfa16a] hover:text-white'
                  }`}
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextReview}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                    theme === 'dark'
                      ? 'border-[#38352e] text-[#c2beaf] hover:border-[#bfa16a] hover:bg-[#bfa16a] hover:text-[#161614]'
                      : 'border-[#ded7c8] text-[#161614] hover:border-[#bfa16a] hover:bg-[#bfa16a] hover:text-white'
                  }`}
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-review Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className={`rounded-xl p-6 border shadow-sm hover:border-[#bfa16a]/50 transition-colors flex flex-col justify-between ${
                theme === 'dark'
                  ? 'bg-[#201f1c] border-[#36332c]'
                  : 'bg-[#ffffff] border-[#e8e3d8]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#bfa16a]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#bfa16a]" />
                    ))}
                  </div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${
                    theme === 'dark' ? 'text-[#d8c5a2]' : 'text-[#8c734b]'
                  }`}>
                    Google Verified
                  </span>
                </div>

                <p className={`text-xs leading-relaxed line-clamp-4 italic mb-4 ${
                  theme === 'dark' ? 'text-[#b0aba0]' : 'text-[#555148]'
                }`}>
                  "{rev.text}"
                </p>
              </div>

              <div className={`pt-3 border-t flex items-center gap-2.5 ${
                theme === 'dark' ? 'border-[#302e28]' : 'border-[#f0ede6]'
              }`}>
                <div className={`w-7 h-7 rounded-full font-bold text-[11px] flex items-center justify-center ${
                  theme === 'dark'
                    ? 'bg-[#2b2925] text-[#d4af37]'
                    : 'bg-[#eee7d8] text-[#8c734b]'
                }`}>
                  {rev.avatarInitials}
                </div>
                <div>
                  <span className={`font-semibold text-xs block ${
                    theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                  }`}>
                    {rev.author}
                  </span>
                  <span className={`text-[10px] ${
                    theme === 'dark' ? 'text-[#8c887d]' : 'text-[#736e63]'
                  }`}>
                    {rev.treatment}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
