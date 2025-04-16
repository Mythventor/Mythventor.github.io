import React, { useEffect } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/main'
import Work from './components/Work'
import Project from './components/Project'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import './animations.css' // Import the animations

function App() {
  // Enable smooth scrolling behavior
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Add smooth scrolling
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    // smooth scrolling
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      /* Add a subtle scroll track */
      ::-webkit-scrollbar {
        width: 10px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 5px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #0092ff;
        border-radius: 5px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #007acc;
      }
      
      * {
        /* Smoother transitions for everything */
        transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative">
      <Sidenav />
      <Main />
      <Work />
      <Project />
      <Contact />
      <ScrollToTop />
      
      {/* Page transition overlay - appears when navigating between pages */}
      <div id="page-transition" className="fixed inset-0 z-[9999] pointer-events-none bg-blue-600 opacity-0 transition-opacity duration-500"></div>
    </div>
  )
}

export default App