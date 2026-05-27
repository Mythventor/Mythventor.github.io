import { useState, useEffect } from 'react';
import { Menu, Home, Briefcase, FolderGit2, User, Mail, X } from 'lucide-react';
import resume from '/src/assets/Mengpang_Xing_Resume.pdf';

const navItems = [
  { href: '#main', icon: Home, label: 'Home', sectionId: 'main' },
  { href: '#work', icon: Briefcase, label: 'Work', sectionId: 'work' },
  { href: '#project', icon: FolderGit2, label: 'Projects', sectionId: 'project' },
  { href: '#contact', icon: Mail, label: 'Contact', sectionId: 'contact' },
  { href: resume, icon: User, label: 'Resume', external: true },
];

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('main');
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const MobileNav = () => (
    <div className={`fixed inset-0 z-50 flex items-center justify-center md:hidden transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-white/95 backdrop-blur-xl transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
      
      <button
        onClick={toggleNav}
        className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg transition-all duration-500 hover:scale-105 hover:bg-blue-700"
        aria-label="Close navigation"
      >
        <X className="h-5 w-5" />
      </button>

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
            className={`group flex w-full items-center gap-4 rounded-lg p-3 transition-all duration-300 
              ${item.sectionId === activeSection 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 shadow-sm hover:bg-blue-50'
              }`}
            style={{ 
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0,
              transitionDelay: `${index * 0.05}s`
            }}
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-md transition-all duration-300
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
          aria-label={item.label}
          className={`relative flex h-14 w-14 items-center justify-center rounded-lg border shadow-sm backdrop-blur transition-all duration-500 
            ${isActive 
              ? 'border-blue-500 bg-blue-600 text-white shadow-blue-500/30' 
              : 'border-white/80 bg-white/75 text-gray-700 hover:border-sky-200 hover:bg-blue-50'
            }`}
        >
          {isActive && (
            <div className="absolute inset-0 -z-10 rounded-lg bg-blue-500 opacity-40 blur-md"></div>
          )}
          
          <item.icon className={`h-6 w-6 transition-all duration-300 ${isActive ? 'text-white' : 'text-blue-600'}`} />
        </a>
        
        <div className="pointer-events-none absolute left-20 rounded-lg bg-slate-950 px-4 py-2 text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 transform translate-x-[-10px]">
          <span className="whitespace-nowrap text-sm font-medium">
            {item.label}
          </span>
          <div className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 transform bg-slate-950"></div>
        </div>
      </div>
    );
  };

  return (
    <>
      <button
        onClick={toggleNav}
        className={`fixed right-6 top-6 z-50 flex h-14 w-14 items-center justify-center rounded-lg transition-all duration-500 md:hidden
          ${hasScrolled 
            ? 'bg-blue-600 text-white shadow-lg' 
            : 'bg-white/80 text-blue-600 shadow-md backdrop-blur-sm'
          }`}
        aria-label="Open navigation"
      >
        <Menu className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`} />
      </button>

      <MobileNav />

      <div className={`fixed left-8 top-1/2 z-50 hidden -translate-y-1/2 transform md:block transition-all duration-700 ${
        hasScrolled ? 'opacity-100 scale-100 translate-x-0' : 'opacity-90 scale-95 -translate-x-2'
      }`}>
        <nav className="relative flex flex-col items-center rounded-lg border border-white/70 bg-white/30 px-3 py-4 shadow-lg shadow-slate-900/5 backdrop-blur-md">
          {navItems.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
