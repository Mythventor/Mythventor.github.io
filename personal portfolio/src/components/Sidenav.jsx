import React, { useState, useEffect } from 'react';
import { Menu, Home, Briefcase, FolderGit2, User, Mail, X } from 'lucide-react';
import resume from '/src/assets/Mengpang_Xing_Resume.pdf';

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('main');
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  const navItems = [
    { href: '#main', icon: Home, label: 'Home', sectionId: 'main' },
    { href: '#work', icon: Briefcase, label: 'Work', sectionId: 'work' },
    { href: '#project', icon: FolderGit2, label: 'Projects', sectionId: 'project' },
    { href: '#contact', icon: Mail, label: 'Contact', sectionId: 'contact' },
    { href: resume, icon: User, label: 'Resume', external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if page has scrolled for nav background
      setHasScrolled(window.scrollY > 50);
      
      const sections = navItems
        .filter(item => item.sectionId)
        .map(item => ({
          id: item.sectionId,
          element: document.getElementById(item.sectionId),
        }))
        .filter(section => section.element);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = section.element;
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile Navigation - Stylish side drawer that shows all options
  const MobileNav = () => (
    <div className={`fixed inset-0 z-50 flex items-center justify-center md:hidden transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop with blur and gradient */}
      <div className={`absolute inset-0 bg-gradient-to-tr from-white/90 via-blue-50/80 to-white/90 backdrop-blur-lg transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
      
      {/* Close button */}
      <button
        onClick={toggleNav}
        className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-all duration-500 hover:bg-blue-600 hover:scale-110"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Navigation links - displayed in a fancy vertical list */}
      <nav className="relative flex flex-col items-center gap-5 px-6 py-8 w-full max-w-xs">
        {navItems.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => {
              if (item.external) {
                e.preventDefault();
                window.open(item.href, '_blank');
              } else {
                toggleNav();
              }
            }}
            className={`group flex w-full items-center gap-4 rounded-xl p-3 transition-all duration-300 
              ${item.sectionId === activeSection 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white/80 text-gray-700 hover:bg-blue-50'
              }`}
            style={{ 
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0,
              transitionDelay: `${index * 0.05}s`
            }}
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300
              ${item.sectionId === activeSection
                ? 'bg-white/20' 
                : 'bg-blue-100 group-hover:bg-blue-200'
              }`}
            >
              <item.icon className={`h-5 w-5 transition-all duration-300 
                ${item.sectionId === activeSection ? 'text-white' : 'text-blue-600'}`} 
              />
            </div>
            <span className={`text-lg font-medium 
              ${item.sectionId === activeSection ? 'text-white' : 'group-hover:text-blue-600'}`}>
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );

  // Desktop Navigation - Enhanced with fancy effects
  const DesktopNavItem = ({ item }) => {
    const isActive = item.sectionId === activeSection;
    
    return (
      <div className="group relative flex items-center my-2">
        <a
          href={item.href}
          onClick={(e) => {
            if (item.external) {
              e.preventDefault();
              window.open(item.href, '_blank');
            }
          }}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-500 
            ${isActive 
              ? 'bg-blue-600 text-white' 
              : 'bg-white/80 text-gray-700 hover:bg-blue-50'
            }`}
        >
          {/* Glowing effect for active item */}
          {isActive && (
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-md opacity-50 -z-10"></div>
          )}
          
          {/* Icon */}
          <item.icon className={`h-6 w-6 transition-all duration-300 ${isActive ? 'text-white' : 'text-blue-600'}`} />
          
          {/* Fancy rotating border animation for active item */}
          {isActive && (
            <div className="absolute inset-0 rounded-full border-2 border-white opacity-50">
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-white border-r-white animate-spin-slow"></div>
            </div>
          )}
        </a>
        
        {/* Label tooltip with glass effect */}
        <div className="pointer-events-none absolute left-20 rounded-lg bg-blue-600/90 backdrop-blur-sm px-4 py-2 text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-[-10px]">
          <span className="whitespace-nowrap text-md font-medium">
            {item.label}
          </span>
          <div className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 transform bg-blue-600/90"></div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Mobile Menu Button - Fancy floating button */}
      <button
        onClick={toggleNav}
        className={`fixed right-6 top-6 z-50 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-500 md:hidden
          ${hasScrolled 
            ? 'bg-blue-600 text-white shadow-lg' 
            : 'bg-white/80 text-blue-600 shadow-md backdrop-blur-sm'
          }`}
      >
        <Menu className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`} />
        
        {/* Pulsing ring animation */}
        <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${hasScrolled ? 'opacity-100' : 'opacity-0'}`}>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50"></span>
        </div>
      </button>

      {/* Mobile Navigation Overlay */}
      <MobileNav />

      {/* Desktop Navigation */}
      <div className={`fixed left-8 top-1/2 z-50 hidden -translate-y-1/2 transform md:block transition-all duration-700 ${
        hasScrolled ? 'opacity-100 scale-100 translate-x-0' : 'opacity-90 scale-95 -translate-x-2'
      }`}>
        {/* Glass panel background */}
        <div className="absolute inset-0 -m-3 rounded-3xl bg-white/20 backdrop-blur-sm transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
        
        <nav className="relative flex flex-col items-center py-4">
          {navItems.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </nav>
      </div>

      {/* Add spin animation for desktop */}
      <style jsx="true">{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Sidenav;