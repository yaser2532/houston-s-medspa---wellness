import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';
import { LOCATIONS, MEDSPA_INFO } from '../data/medspaData';
import { useTheme } from '../context/ThemeContext';

interface LocationsSectionProps {
  onOpenBooking: () => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onOpenBooking }) => {
  const { theme } = useTheme();
  const [activeLocationId, setActiveLocationId] = useState<string>('downtown');

  const activeLocation = LOCATIONS.find(l => l.id === activeLocationId) || LOCATIONS[0];

  return (
    <section
      id="locations"
      className={`py-16 sm:py-24 border-b transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#141412] text-[#fbfaf8] border-[#2d2b27]'
          : 'bg-[#f4efe8] text-[#161614] border-[#e8e3d8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-medium tracking-widest uppercase mb-3 ${
              theme === 'dark'
                ? 'bg-[#24231f] border-[#bfa16a]/30 text-[#d8c5a2]'
                : 'bg-[#ebe3d5] border-[#bfa16a]/40 text-[#8c734b]'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-[#bfa16a]" />
            <span>Two Convenient Clinics</span>
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-3 ${
            theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
          }`}>
            Visit Our Houston Locations
          </h2>
          <p className={`text-base font-light leading-relaxed ${
            theme === 'dark' ? 'text-[#b8b4a7]' : 'text-[#615d55]'
          }`}>
            Choose the clinic closest to you. Both facilities feature luxury treatment suites, 
            licensed clinical providers, and full membership token privileges.
          </p>

          {/* Location Toggle Tabs */}
          <div
            className={`mt-8 inline-flex rounded-xl p-1.5 border transition-colors ${
              theme === 'dark'
                ? 'bg-[#23221e] border-[#38352e]'
                : 'bg-[#e5ded2] border-[#d4cbbe]'
            }`}
          >
            {LOCATIONS.map(loc => (
              <button
                key={loc.id}
                onClick={() => setActiveLocationId(loc.id)}
                className={`px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 ${
                  activeLocationId === loc.id
                    ? 'bg-[#bfa16a] text-[#161614] shadow-md font-bold'
                    : theme === 'dark'
                    ? 'text-[#c2beaf] hover:text-[#fbfaf8]'
                    : 'text-[#555148] hover:text-[#161614]'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{loc.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Location Showcase Card */}
        <div
          className={`rounded-2xl border shadow-xl overflow-hidden transition-colors ${
            theme === 'dark'
              ? 'bg-[#1c1b18] border-[#33302a]'
              : 'bg-[#ffffff] border-[#ded7c8]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Details, Hours & CTAs */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#bfa16a] mb-1">
                  {activeLocation.badge}
                </div>
                <h3 className={`font-serif text-2xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
                }`}>
                  {activeLocation.name}
                </h3>

                {/* Details list */}
                <div className={`space-y-4 text-sm ${
                  theme === 'dark' ? 'text-[#ddd9cf]' : 'text-[#444039]'
                }`}>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#bfa16a] mt-1 flex-shrink-0" />
                    <div>
                      <strong className={`block ${theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'}`}>{activeLocation.address}</strong>
                      <span className={theme === 'dark' ? 'text-[#a39f93]' : 'text-[#736e63]'}>{activeLocation.cityStateZip}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#bfa16a] mt-1 flex-shrink-0" />
                    <div>
                      <strong className={`block ${theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'}`}>Operating Hours:</strong>
                      <div className={`text-xs space-y-1 mt-1 ${theme === 'dark' ? 'text-[#a39f93]' : 'text-[#666258]'}`}>
                        <div>Tuesday – Friday: 10:00 AM – 6:00 PM</div>
                        <div>Saturday: 10:00 AM – 4:00 PM</div>
                        <div>Sunday – Monday: <span className="text-[#e58a8a] font-medium">Closed</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#bfa16a] mt-1 flex-shrink-0" />
                    <div>
                      <strong className={`block ${theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'}`}>Direct Phone:</strong>
                      <a
                        href={`tel:${activeLocation.phone.replace(/[^0-9]/g, '')}`}
                        className="text-[#bfa16a] hover:underline transition-colors font-medium"
                      >
                        {activeLocation.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#bfa16a] mt-1 flex-shrink-0" />
                    <div>
                      <strong className={`block ${theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'}`}>Inquiries & Support:</strong>
                      <a
                        href={`mailto:${MEDSPA_INFO.email}`}
                        className="text-[#bfa16a] hover:underline transition-colors text-xs"
                      >
                        {MEDSPA_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={`pt-6 border-t space-y-3 ${
                theme === 'dark' ? 'border-[#2d2b27]' : 'border-[#eee9df]'
              }`}>
                <a
                  href={activeLocation.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-lg border text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    theme === 'dark'
                      ? 'bg-[#262420] hover:bg-[#2f2c27] text-[#fbfaf8] border-[#3d3a33]'
                      : 'bg-[#f4eee2] hover:bg-[#eee5d5] text-[#161614] border-[#ded4c3]'
                  }`}
                >
                  <Navigation className="w-3.5 h-3.5 text-[#bfa16a]" />
                  <span>Open in Google Maps / Directions</span>
                  <ExternalLink className="w-3 h-3 text-[#736e63]" />
                </a>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-lg bg-[#bfa16a] hover:bg-[#aa8b50] text-[#161614] text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
                >
                  Schedule Appointment at {activeLocation.name}
                </button>
              </div>

            </div>

            {/* Right Column: Google Maps Embed */}
            <div className={`lg:col-span-7 min-h-[380px] lg:min-h-[460px] relative border-t lg:border-t-0 lg:border-l ${
              theme === 'dark'
                ? 'bg-[#161614] border-[#33302a]'
                : 'bg-[#f8f6f2] border-[#ded7c8]'
            }`}>
              <iframe
                title={`${activeLocation.name} Map`}
                src={activeLocation.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-90"
              />
              <div
                className={`absolute top-4 right-4 px-3 py-1.5 rounded-md border text-[11px] font-semibold backdrop-blur-md ${
                  theme === 'dark'
                    ? 'bg-[#161614]/90 border-[#38352e] text-[#bfa16a]'
                    : 'bg-[#ffffff]/90 border-[#ded7c8] text-[#8c734b]'
                }`}
              >
                Houston Clinic
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
