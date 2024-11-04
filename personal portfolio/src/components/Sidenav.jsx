import React, { useState, useEffect } from 'react';
import { Menu, Home, Briefcase, FolderGit2, User, Mail, X } from 'lucide-react';
import resume from '/src/assets/Mengpang_Xing_Resume.pdf';

const NavItem = ({ href, icon: Icon, label, onClick, showLabel = false, isActive }) => (
  <a
    href={href}
    onClick={onClick}
    className={`group flex items-center gap-4 rounded-full transition-all duration-300 
    ${isActive 
      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50 scale-110' 
      : 'bg-white/10 text-gray-700 hover:bg-white/20 hover:shadow-lg backdrop-blur-sm'
    }`}
  >
    <div className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300
      ${isActive
        ? 'bg-white/20 shadow-inner'
        : 'bg-white shadow-md group-hover:scale-110'
      }`}
    >
      <Icon className={`h-5 w-5 transition-all duration-300 
        ${isActive ? 'text-white' : 'text-gray-900'}`} 
      />
    </div>
    {showLabel && (
      <span className={`text-lg font-medium pr-6 ${isActive ? 'text-white' : 'text-gray-900'}`}>
        {label}
      </span>
    )}
  </a>
);

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('main');

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

  // Mobile Navigation
  const MobileNav = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/10" />
      <button
        onClick={toggleNav}
        className="absolute right-6 top-6 rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all hover:bg-white/20"
      >
        <X className="h-6 w-6 text-white" />
      </button>
      <nav className="relative flex w-full max-w-sm flex-col gap-4 px-6">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            href={item.href}
            icon={item.icon}
            label={item.label}
            onClick={(e) => {
              if (item.external) {
                e.preventDefault();
                window.open(item.href, '_blank');
              }
              toggleNav();
            }}
            showLabel={true}
            isActive={item.sectionId === activeSection}
          />
        ))}
      </nav>
    </div>
  );

  // Desktop Navigation
  const DesktopNav = () => (
    <div className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 transform md:block">
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <div key={item.label} className="group relative flex items-center">
            <NavItem
              href={item.href}
              icon={item.icon}
              label={item.label}
              onClick={(e) => {
                if (item.external) {
                  e.preventDefault();
                  window.open(item.href, '_blank');
                }
              }}
              isActive={item.sectionId === activeSection}
            />
            <div className="pointer-events-none absolute left-20 rounded-lg bg-white/80 px-4 py-2 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
              <span className="whitespace-nowrap text-sm font-medium text-gray-900">
                {item.label}
              </span>
              <div className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 transform bg-white/80" />
            </div>
          </div>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleNav}
        className="fixed right-6 top-6 z-50 rounded-full bg-white/10 p-3 shadow-lg backdrop-blur-sm transition-all hover:bg-white/20 md:hidden"
      >
        <Menu className="h-6 w-6 text-gray-900" />
      </button>

      {/* Mobile Navigation */}
      {isOpen && <MobileNav />}

      {/* Desktop Navigation */}
      <DesktopNav />
    </>
  );
};

export default Sidenav;