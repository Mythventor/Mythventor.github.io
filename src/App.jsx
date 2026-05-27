import { useEffect } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/main'
import Work from './components/Work'
import Project from './components/Project'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import './animations.css'

function App() {
  useEffect(() => {
    if (!window.location.hash) return;

    const hashScrollTimer = window.setTimeout(() => {
      const target = document.getElementById(window.location.hash.slice(1));
      target?.scrollIntoView({ block: 'start' });
    }, 500);

    return () => window.clearTimeout(hashScrollTimer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f6faff] text-slate-900 selection:bg-sky-200 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(135deg,#ffffff_0%,#eef7ff_36%,#f8fbff_68%,#ffffff_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]" />
      <div className="relative z-10">
        <Sidenav />
        <Main />
        <Work />
        <Project />
        <Contact />
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App
