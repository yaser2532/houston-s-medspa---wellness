import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { LOCATIONS, MEDSPA_INFO } from '../data/medspaData';
import { useTheme } from '../context/ThemeContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const { theme } = useTheme();
  const [location, setLocation] = useState('downtown');
  const [service, setService] = useState(preselectedService || 'Membership Consultation');
  const [tier, setTier] = useState('lavish');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10am - 1pm)');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const selectedLocObj = LOCATIONS.find(l => l.id === location) || LOCATIONS[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6" role="presentation">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className={`relative w-full max-w-lg rounded-2xl border shadow-2xl overflow-hidden transition-all duration-200 ${
          theme === 'dark'
            ? 'bg-[#1a1917] text-[#fbfaf8] border-[#33302a]'
            : 'bg-[#ffffff] text-[#161614] border-[#ded7c8]'
        }`}
      >
        {/* Top Header */}
        <div
          className={`px-6 py-4 border-b flex items-center justify-between ${
            theme === 'dark'
              ? 'bg-[#161614] border-[#2d2b27]'
              : 'bg-[#faf8f5] border-[#eae4d8]'
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#24231f] border border-[#bfa16a]/50 text-[#bfa16a] flex items-center justify-center font-serif text-xs font-bold">
              HMW
            </div>
            <div>
              <h3 id="booking-modal-title" className={`font-serif text-sm font-semibold ${
                theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
              }`}>
                Schedule Consultation or Visit
              </h3>
              <p className={`text-[11px] ${theme === 'dark' ? 'text-[#8c887d]' : 'text-[#736e63]'}`}>
                Houston's Medspa + Wellness
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors ${
              theme === 'dark'
                ? 'text-[#8c887d] hover:text-[#fbfaf8] hover:bg-[#23221f]'
                : 'text-[#8c887d] hover:text-[#161614] hover:bg-[#eee8dd]'
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#bfa16a]/20 border border-[#bfa16a] text-[#bfa16a] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className={`font-serif text-2xl font-medium ${
                theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'
              }`}>
                Appointment Request Received!
              </h4>

              <p className={`text-xs sm:text-sm max-w-sm mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-[#b8b4a7]' : 'text-[#615d55]'
              }`}>
                Thank you, <strong className={theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'}>{name}</strong>. Our aesthetic coordinator for the{' '}
                <strong className="text-[#bfa16a]">{selectedLocObj.name}</strong> will contact you via phone ({phone}) 
                within one business day to confirm your preferred slot.
              </p>

              <div className={`p-4 rounded-xl border text-xs text-left space-y-1.5 ${
                theme === 'dark'
                  ? 'bg-[#23221e] border-[#33302a] text-[#a39f93]'
                  : 'bg-[#f7f4ed] border-[#ded7c8] text-[#555148]'
              }`}>
                <div><strong className={theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'}>Location:</strong> {selectedLocObj.name} ({selectedLocObj.address})</div>
                <div><strong className={theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'}>Interest:</strong> {service}</div>
                <div><strong className={theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'}>Preferred Time:</strong> {preferredTime}</div>
                <div><strong className={theme === 'dark' ? 'text-[#fbfaf8]' : 'text-[#161614]'}>Clinic Phone:</strong> {MEDSPA_INFO.phone}</div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 rounded-lg bg-[#bfa16a] hover:bg-[#aa8b50] text-[#161614] font-semibold text-xs uppercase tracking-wider transition-all shadow-md mt-4"
              >
                Close & Return to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Location Select */}
              <div>
                <label htmlFor="booking-location" className={`block text-[11px] uppercase tracking-wider font-semibold mb-1.5 ${
                  theme === 'dark' ? 'text-[#8c887d]' : 'text-[#6b675e]'
                }`}>
                  Select Preferred Clinic Location
                </label>
                <div id="booking-location" className="grid grid-cols-2 gap-2">
                  {LOCATIONS.map(loc => (
                    <button
                      type="button"
                      key={loc.id}
                      onClick={() => setLocation(loc.id)}
                      className={`p-2.5 rounded-lg border text-left text-xs transition-all flex items-start gap-2 ${
                        location === loc.id
                          ? theme === 'dark'
                            ? 'bg-[#262420] border-[#bfa16a] text-[#fbfaf8]'
                            : 'bg-[#f5ede0] border-[#bfa16a] text-[#161614]'
                          : theme === 'dark'
                          ? 'bg-[#201f1c] border-[#33302a] text-[#a39f93] hover:border-[#423f38]'
                          : 'bg-[#f9f7f4] border-[#ded7c8] text-[#6b675e] hover:border-[#c5bcae]'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#bfa16a] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">{loc.name}</div>
                        <div className="text-[10px] opacity-75 line-clamp-1">{loc.address}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Treatment / Membership Interest */}
              <div>
                <label htmlFor="booking-service" className={`block text-[11px] uppercase tracking-wider font-semibold mb-1.5 ${
                  theme === 'dark' ? 'text-[#8c887d]' : 'text-[#6b675e]'
                }`}>
                  Treatment or Membership Program
                </label>
                <select
                  id="booking-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:outline-none focus:border-[#bfa16a] ${
                    theme === 'dark'
                      ? 'bg-[#23221f] border-[#38352e] text-[#fbfaf8]'
                      : 'bg-[#f9f7f4] border-[#ded7c8] text-[#161614]'
                  }`}
                >
                  <option value="Membership Consultation">Beauty + Wellness Membership Consultation</option>
                  <option value="Express Tier Membership">Express Tier Program</option>
                  <option value="Lavish Tier Membership">Lavish Tier Program</option>
                  <option value="VIB Tier Membership">VIB (Very Important Beauty) Program</option>
                  <option value="Vampire Facial (PRP Microneedling)">Vampire Facial (PRP Microneedling)</option>
                  <option value="PRPFILL (Plasma Gel Bio-Filler)">PRPFILL (Plasma Gel Bio-Filler)</option>
                  <option value="Endo-Lift in Houston">Endo-Lift in Houston</option>
                  <option value="Custom Medical Facials">Custom Medical Facials</option>
                  <option value="RF Microneedling / Skin Tightening">RF Microneedling / Skin Tightening</option>
                  <option value="Botox, Dermal Fillers & Kybella">Botox, Dermal Fillers & Kybella</option>
                  <option value="Vaser Shape Ultrasound Therapy">Vaser Shape Ultrasound Therapy</option>
                  <option value="PRP Hair Restoration">PRP Hair Restoration</option>
                  <option value="Cherry Financing Inquiry">Cherry Financing & Payment Plan</option>
                </select>
              </div>

              {/* Patient Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="booking-name" className={`block text-[11px] uppercase tracking-wider font-semibold mb-1 ${
                    theme === 'dark' ? 'text-[#8c887d]' : 'text-[#6b675e]'
                  }`}>
                    Your Full Name *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    placeholder="e.g. Jessica Miller"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:outline-none focus:border-[#bfa16a] ${
                      theme === 'dark'
                        ? 'bg-[#23221f] border-[#38352e] text-[#fbfaf8] placeholder-[#615d54]'
                        : 'bg-[#f9f7f4] border-[#ded7c8] text-[#161614] placeholder-[#99948a]'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="booking-phone" className={`block text-[11px] uppercase tracking-wider font-semibold mb-1 ${
                    theme === 'dark' ? 'text-[#8c887d]' : 'text-[#6b675e]'
                  }`}>
                    Phone Number *
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    placeholder="(832) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:outline-none focus:border-[#bfa16a] ${
                      theme === 'dark'
                        ? 'bg-[#23221f] border-[#38352e] text-[#fbfaf8] placeholder-[#615d54]'
                        : 'bg-[#f9f7f4] border-[#ded7c8] text-[#161614] placeholder-[#99948a]'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="booking-email" className={`block text-[11px] uppercase tracking-wider font-semibold mb-1 ${
                  theme === 'dark' ? 'text-[#8c887d]' : 'text-[#6b675e]'
                }`}>
                  Email Address *
                </label>
                <input
                  id="booking-email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:outline-none focus:border-[#bfa16a] ${
                    theme === 'dark'
                      ? 'bg-[#23221f] border-[#38352e] text-[#fbfaf8] placeholder-[#615d54]'
                      : 'bg-[#f9f7f4] border-[#ded7c8] text-[#161614] placeholder-[#99948a]'
                  }`}
                />
              </div>

              <div>
                <label htmlFor="booking-time" className={`block text-[11px] uppercase tracking-wider font-semibold mb-1 ${
                  theme === 'dark' ? 'text-[#8c887d]' : 'text-[#6b675e]'
                }`}>
                  Preferred Time Window
                </label>
                <select
                  id="booking-time"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:outline-none focus:border-[#bfa16a] ${
                    theme === 'dark'
                      ? 'bg-[#23221f] border-[#38352e] text-[#fbfaf8]'
                      : 'bg-[#f9f7f4] border-[#ded7c8] text-[#161614]'
                  }`}
                >
                  <option value="Morning (10am - 1pm)">Morning (10:00 AM – 1:00 PM)</option>
                  <option value="Afternoon (1pm - 4pm)">Afternoon (1:00 PM – 4:00 PM)</option>
                  <option value="Late Afternoon (4pm - 6pm)">Late Afternoon (4:00 PM – 6:00 PM)</option>
                  <option value="Saturday Preferred (10am - 4pm)">Saturday Preferred (10:00 AM – 4:00 PM)</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-[#bfa16a] hover:bg-[#aa8b50] text-[#161614] font-semibold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Appointment & Lock Member Rates</span>
                </button>
              </div>

              <div className={`text-center text-[10px] ${theme === 'dark' ? 'text-[#736e63]' : 'text-[#8c887d]'}`}>
                This preview stores your request locally; it does not send a message to the clinic. Prefer immediate telephone assistance? Call{' '}
                <a href={MEDSPA_INFO.phoneTel} className="text-[#bfa16a] hover:underline font-semibold">
                  {MEDSPA_INFO.phone}
                </a>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
