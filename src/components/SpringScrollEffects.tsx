import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { ArrowUp, Sun, Moon, Sparkles, Navigation } from 'lucide-react';

interface SpringScrollProgressBarProps {
  theme: 'light' | 'dark';
}

export const SpringScrollProgressBar: React.FC<SpringScrollProgressBarProps> = ({ theme }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      const currentProgress = Math.min(Math.max(window.scrollY / totalScroll, 0), 1);
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // React Spring physics animation for progress width
  const springProps = useSpring({
    width: `${scrollProgress * 100}%`,
    config: { tension: 280, friction: 32 },
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-black/10 backdrop-blur-xs">
      <animated.div
        style={springProps}
        className="h-full bg-gradient-to-r from-[#bfa16a] via-[#e5cf92] to-[#d4af37] shadow-[0_0_0.625rem_rgba(191,161,106,0.6)]"
      />
    </div>
  );
};

interface SpringScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export const SpringScrollReveal: React.FC<SpringScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -3.125rem 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 2.25rem, 0)';
      case 'down':
        return inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, -2.25rem, 0)';
      case 'left':
        return inView ? 'translate3d(0, 0, 0)' : 'translate3d(2.25rem, 0, 0)';
      case 'right':
        return inView ? 'translate3d(0, 0, 0)' : 'translate3d(-2.25rem, 0, 0)';
      case 'none':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  const springStyle = useSpring({
    opacity: inView ? 1 : 0,
    transform: getTransform(),
    scale: inView ? 1 : 0.98,
    delay,
    config: { tension: 220, friction: 28 },
  });

  return (
    <animated.div ref={ref} style={springStyle} className={className}>
      {children}
    </animated.div>
  );
};

interface SpringScrollControllerProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenBooking: () => void;
}

export const SpringScrollController: React.FC<SpringScrollControllerProps> = ({
  theme,
  onToggleTheme,
  onOpenBooking,
}) => {
  const [visible, setVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pct = totalScroll > 0 ? Math.round((scrollY / totalScroll) * 100) : 0;
      setScrollPercentage(pct);

      if (scrollY > 240) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // React Spring animation for floating widget appearance and bounce
  const containerSpring = useSpring({
    transform: visible ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(0, 2.5rem, 0) scale(0.85)',
    opacity: visible ? 1 : 0,
    pointerEvents: visible ? ('auto' as const) : ('none' as const),
    config: { tension: 260, friction: 22 },
  });

  // Spring for the progress ring
  const ringSpring = useSpring({
    offset: 100 - scrollPercentage,
    config: config.slow,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <animated.div
      style={containerSpring}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5"
    >
      {/* Quick Nav Chips */}
      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-lg border backdrop-blur-md text-xs transition-colors ${
        theme === 'dark'
          ? 'bg-[#1c1b18]/90 border-[#33302a] text-[#c2beaf]'
          : 'bg-[#ffffff]/90 border-[#e8e3d8] text-[#555148]'
      }`}>
        <button
          onClick={() => scrollToSection('memberships')}
          className="hover:text-[#bfa16a] transition-colors px-1 font-medium"
        >
          Memberships
        </button>
        <span className="text-[#8c887d]">•</span>
        <button
          onClick={() => scrollToSection('calculator')}
          className="hover:text-[#bfa16a] transition-colors px-1 font-medium"
        >
          Calculator
        </button>
        <span className="text-[#8c887d]">•</span>
        <button
          onClick={() => scrollToSection('services')}
          className="hover:text-[#bfa16a] transition-colors px-1 font-medium"
        >
          Services
        </button>
        <span className="text-[#8c887d]">•</span>
        <button
          onClick={() => scrollToSection('locations')}
          className="hover:text-[#bfa16a] transition-colors px-1 font-medium"
        >
          Locations
        </button>
      </div>

      {/* Floating Action Controls */}
      <div className="flex items-center gap-2">
        {/* Quick Theme Toggle Button */}
        <button
          onClick={onToggleTheme}
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          aria-label="Toggle Website Theme"
          className={`w-11 h-11 rounded-full flex items-center justify-center border shadow-xl transition-transform active:scale-95 ${
            theme === 'dark'
              ? 'bg-[#23221f] text-[#d4af37] border-[#38352e] hover:border-[#bfa16a]'
              : 'bg-[#ffffff] text-[#8c734b] border-[#e8e3d8] hover:border-[#bfa16a]'
          }`}
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Back to Top with Circular Spring Progress Ring */}
        <button
          onClick={scrollToTop}
          title="Scroll back to top"
          aria-label="Scroll to top"
          className={`relative w-12 h-12 rounded-full flex items-center justify-center border shadow-xl group transition-transform active:scale-95 ${
            theme === 'dark'
              ? 'bg-[#1c1b18] text-[#fbfaf8] border-[#33302a] hover:border-[#bfa16a]'
              : 'bg-[#ffffff] text-[#161614] border-[#e8e3d8] hover:border-[#bfa16a]'
          }`}
        >
          {/* SVG Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 36 36">
            <path
              className="text-black/10 stroke-current"
              strokeWidth="2.5"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <animated.path
              className="text-[#bfa16a] stroke-current"
              strokeWidth="2.5"
              strokeDasharray="100, 100"
              strokeDashoffset={ringSpring.offset}
              strokeLinecap="round"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>

          <ArrowUp className="w-4 h-4 text-[#bfa16a] group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </animated.div>
  );
};
