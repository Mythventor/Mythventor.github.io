import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const links = [
  { href: 'https://github.com/Mythventor', label: 'GitHub', Icon: FaGithub },
  { href: 'https://www.linkedin.com/in/mengpang-xing', label: 'LinkedIn', Icon: FaLinkedinIn },
  { href: 'mailto:Mengpangxing2027@u.northwestern.edu', label: 'Email', Icon: Mail },
];

const Footer = () => (
  <footer className="relative px-6 pb-10 pt-4 sm:px-8 lg:px-16">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-sky-100 pt-8 text-sm text-slate-500 sm:flex-row">
      <p>
        © {new Date().getFullYear()} Mengpang Xing · Chicago, IL
      </p>
      <div className="flex items-center gap-2">
        {links.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/80 bg-white/70 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:text-blue-600"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
