import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, Tag } from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/medspaData';
import { useTheme } from '../context/ThemeContext';

interface ServicesMenuProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesMenu: React.FC<ServicesMenuProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { theme } = useTheme();

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'facials', label: 'Facials & Peels' },
    { id: 'injectables', label: 'Fillers & Injectables' },
    { id: 'laser', label: 'Laser & Resurfacing' },
    { id: 'body', label: 'Body & Weight Loss' },
    { id: 'hair', label: 'Hair Restoration' },
    { id: 'specialty', label: 'Specialty Services' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(item => item.category === activeCategory);

  return (
    <section
      id="services"
      className={`py-16 sm:py-24 border-b transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#1a1917] text-[#fbfaf8] border-[#2d2b27]'
          : 'bg-[#f8f6f2] text-[#1a1917] border-[#e8e3d8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 ${
              theme === 'dark'
                ? 'bg-[#262420] text-[#d8c5a2] border border-[#38352e]'
                : 'bg-[#ede6d8] text-[#8c734b]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#bfa16a]" />
            <span>Comprehensive Menu</span>
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-3 ${
            theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
          }`}>
            Aesthetic & Wellness Services
          </h2>
          <p className={`text-base leading-relaxed font-light ${
            theme === 'dark' ? 'text-[#b8b4a7]' : 'text-[#6b675e]'
          }`}>
            Every service at Houston’s Medspa + Wellness is performed by licensed, highly trained practitioners. 
            Members receive preferred token access or exclusive 30% discounts across our treatment menu.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#bfa16a] text-[#161614] shadow-sm font-bold'
                    : theme === 'dark'
                    ? 'bg-[#24221e] text-[#c2beaf] border border-[#36332b] hover:border-[#bfa16a] hover:text-[#fbfaf8]'
                    : 'bg-[#ffffff] text-[#615d55] border border-[#e2ddd3] hover:border-[#bfa16a] hover:text-[#161614]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className={`rounded-xl p-6 border shadow-sm hover:shadow-md hover:border-[#bfa16a]/50 transition-all flex flex-col justify-between ${
                theme === 'dark'
                  ? 'bg-[#201f1c] border-[#33302a]'
                  : 'bg-[#ffffff] border-[#e8e3d8]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  {service.tokenEligible ? (
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded border ${
                        theme === 'dark'
                          ? 'bg-[#2b271f] text-[#d8c5a2] border-[#3f3829]'
                          : 'bg-[#f4eee2] text-[#8c734b] border-[#e8dfcf]'
                      }`}
                    >
                      <Sparkles className="w-3 h-3 text-[#bfa16a]" />
                      Token Eligible (Up to 80% Off)
                    </span>
                  ) : (
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded border ${
                        theme === 'dark'
                          ? 'bg-[#262422] text-[#a8a49a] border-[#363430]'
                          : 'bg-[#f0f0f0] text-[#555] border-[#ddd]'
                      }`}
                    >
                      <Tag className="w-3 h-3 text-[#888]" />
                      Members Save 30%
                    </span>
                  )}

                  {service.popular && (
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#d4af37]">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className={`font-serif text-lg font-semibold mb-2 leading-snug ${
                  theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                }`}>
                  {service.name}
                </h3>

                <p className={`text-xs leading-relaxed mb-6 font-light ${
                  theme === 'dark' ? 'text-[#b0aba0]' : 'text-[#666258]'
                }`}>
                  {service.description}
                </p>
              </div>

              <div className={`pt-4 border-t flex items-center justify-between ${
                theme === 'dark' ? 'border-[#2e2c26]' : 'border-[#f0ede6]'
              }`}>
                <span className={`text-[11px] font-medium ${
                  theme === 'dark' ? 'text-[#d8c5a2]' : 'text-[#8c734b]'
                }`}>
                  {service.tokenEligible ? 'Included in Member Tokens' : 'Special Member Pricing'}
                </span>

                <button
                  onClick={() => onSelectService(service.name)}
                  className={`text-xs font-semibold flex items-center gap-1 transition-colors group ${
                    theme === 'dark'
                      ? 'text-[#fbfaf8] hover:text-[#bfa16a]'
                      : 'text-[#161614] hover:text-[#bfa16a]'
                  }`}
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Notice */}
        <div className={`mt-12 text-center text-xs ${
          theme === 'dark' ? 'text-[#8c887d]' : 'text-[#7a766c]'
        }`}>
          Looking for a specific treatment or customized combination protocol?{' '}
          <button
            onClick={() => onSelectService('Custom Consultation')}
            className="text-[#bfa16a] font-semibold hover:underline"
          >
            Speak with our medical esthetic team today &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
