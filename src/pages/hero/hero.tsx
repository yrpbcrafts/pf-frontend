import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const handleNavClick = (href: string): void => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen from-neutral-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Status Badge */}
            <div className={`inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-5 py-2.5 border border-neutral-200/80 shadow-sm mb-8 transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-neutral-700 font-medium">Available for new projects</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl lg:text-8xl font-light text-neutral-900 leading-[0.9] mb-8">
              <span className={`block transition-all duration-1200 ease-out delay-200 ${
                isLoaded 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}>
                Creative
              </span>
              <span className={`block font-normal text-neutral-800 transition-all duration-1200 ease-out delay-400 ${
                isLoaded 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}>
                Solutions
              </span>
              <span className={`block text-neutral-500 text-5xl lg:text-7xl transition-all duration-1200 ease-out delay-600 ${
                isLoaded 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}>
                for Digital
              </span>
            </h1>
            
            {/* Description */}
            <p className={`text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-12 transition-all duration-1000 ease-out delay-800 ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              I craft exceptional digital experiences that connect brands with their audiences through thoughtful design and strategic innovation.
            </p>
            
            {/* CTA Section */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 transition-all duration-1000 ease-out delay-1000 ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <a 
                onClick={() => handleNavClick('#projects')}
                className="px-10 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-all duration-300 flex items-center space-x-2.5 group shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              
              <a 
                onClick={() => handleNavClick('#contact')}
                className="px-10 py-4 bg-white text-neutral-900 rounded-full font-medium border-2 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get In Touch
              </a>
            </div>
            
            <div className={`flex items-center justify-center space-x-4 transition-all duration-1000 ease-out delay-1200 ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <span className="text-sm text-neutral-500 mr-2 p-3">Connect with me</span>
              {[
                { Icon: Github, label: 'GitHub', href: '#' },
                { Icon: Linkedin, label: 'LinkedIn', href: '#' },
                { Icon: Twitter, label: 'Twitter', href: '#' }
              ].map(({ Icon, label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  aria-label={label}
                  className={`w-11 h-11 bg-white border border-neutral-200/80 rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 hover:scale-110 shadow-sm active:scale-95 ${
                    isLoaded 
                      ? `animate-bounce-in` 
                      : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${1400 + index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(20px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) translateY(-5px);
          }
          70% {
            transform: scale(0.9) translateY(0);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        /* Scroll-triggered animations */
        @media (prefers-reduced-motion: no-preference) {
          .scroll-reveal {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .scroll-reveal.revealed {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Respect user preferences */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}} />
    </section>
  );
}