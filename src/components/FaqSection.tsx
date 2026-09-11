import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/medspaData';
import { useTheme } from '../context/ThemeContext';

export const FaqSection: React.FC = () => {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className={`py-16 sm:py-24 border-b transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#181715] text-[#fbfaf8] border-[#2d2b27]'
          : 'bg-[#fbfaf8] text-[#1a1917] border-[#e8e3d8]'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 ${
              theme === 'dark'
                ? 'bg-[#282622] text-[#d8c5a2] border border-[#38352e]'
                : 'bg-[#f2ecdf] text-[#8c734b]'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#bfa16a]" />
            <span>Got Questions?</span>
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-3 ${
            theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
          }`}>
            Membership FAQs & Policies
          </h2>
          <p className={`text-sm font-light leading-relaxed ${
            theme === 'dark' ? 'text-[#b0aba0]' : 'text-[#6b675e]'
          }`}>
            Transparent answers regarding token rollovers, guest privileges, gratuity, 
            and program terms & conditions.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl border overflow-hidden shadow-sm transition-all ${
                  theme === 'dark'
                    ? 'bg-[#201f1c] border-[#36332c]'
                    : 'bg-[#ffffff] border-[#e8e3d8]'
                }`}
              >
                <button
                  id={`faq-trigger-${index}`}
                  onClick={() => toggleFaq(index)}
                  className={`w-full px-6 py-4 text-left flex items-center justify-between gap-4 transition-colors focus:outline-none ${
                    theme === 'dark' ? 'hover:bg-[#282622]' : 'hover:bg-[#faf8f5]'
                  }`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className={`font-serif text-base sm:text-lg font-medium ${
                    theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#bfa16a]' : theme === 'dark' ? 'text-[#8c887d]' : 'text-[#8c734b]'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-trigger-${index}`} className={`px-6 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                    theme === 'dark'
                      ? 'text-[#c2beaf] border-[#2e2c26] bg-[#24221f]'
                      : 'text-[#615d55] border-[#f2eee7] bg-[#fdfcfb]'
                  }`}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className={`mt-12 text-center text-xs ${
          theme === 'dark' ? 'text-[#8c887d]' : 'text-[#736e63]'
        }`}>
          Have an additional question about your treatment plan or membership?{' '}
          <a
            href="tel:+18328352545"
            className="text-[#bfa16a] font-semibold hover:underline"
          >
            Call us at (832) 835-2545
          </a>{' '}
          or email{' '}
          <a
            href="mailto:help@htxmdspa.com"
            className="text-[#bfa16a] font-semibold hover:underline"
          >
            help@htxmdspa.com
          </a>.
        </div>

      </div>
    </section>
  );
};
