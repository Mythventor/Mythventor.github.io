import { useEffect, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { ArrowDown, BriefcaseBusiness, ExternalLink, FileText, GraduationCap, MapPin } from 'lucide-react';
import resume from '/src/assets/Mengpang_Xing_Resume.pdf';

const socialLinks = [
  { href: 'https://github.com/Mythventor', label: 'GitHub', Icon: FaGithub },
  { href: 'https://x.com/MengpangXing', label: 'Twitter', Icon: FaXTwitter },
  { href: 'https://www.facebook.com/mengpang.xing?mibextid=LQQJ4d', label: 'Facebook', Icon: FaFacebookF },
  { href: 'https://www.instagram.com/mengpangxing', label: 'Instagram', Icon: FaInstagram },
  { href: 'https://www.linkedin.com/in/mengpang-xing?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn', Icon: FaLinkedinIn },
];

const highlights = [
  { value: 'Summer 2026', label: 'Incoming SWE Intern at CME Group' },
  { value: '1,000+', label: 'Dealers supported through Cars Commerce analytics' },
  { value: '200 QPS', label: 'AWS ECS platform throughput with Jenkins CI/CD' },
];

const Main = () => {
  const canvasRef = useRef(null);
  
  // Particle effect overlay
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.4 + 0.5;
        this.speedX = Math.random() * 0.7 - 0.35;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(0, 146, 255, ${Math.random() * 0.28 + 0.08})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const init = () => {
      particles = [];
      for (let i = 0; i < 64; i++) {
        particles.push(new Particle());
      }
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Connect particles with lines, but fewer connections
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 92) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 146, 255, ${0.09 - (distance / 92) * 0.09})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    init();
    animate();
    
    const handleResize = () => {
      resizeCanvas();
      init();
    }
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    }
  }, []);

  return (
    <section id='main' className="relative min-h-screen overflow-hidden">
        <img 
          className='absolute inset-0 z-0 h-full w-full object-cover object-left transition-transform duration-[10000ms] ease-out hover:scale-105' 
          src='https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt="Sunlit mountain landscape"
        />

        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-10 opacity-70"
        />
        
        <div className='absolute inset-0 z-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.88)_42%,rgba(255,255,255,0.55)_72%,rgba(255,255,255,0.32)_100%)] backdrop-blur-[1px]'></div>
        
        <div className="relative z-30 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-16">
          <div 
            className='w-[calc(100vw-3rem)] min-w-0 max-w-4xl sm:w-full'
          >
            <div className="mb-7 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
                <BriefcaseBusiness className="h-4 w-4 text-[#0092ff]" />
                Incoming CME Group SWE Intern
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
                <GraduationCap className="h-4 w-4 text-emerald-600" />
                Northwestern CS + Data Science
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
                <MapPin className="h-4 w-4 text-slate-500" />
                Chicago / Evanston
              </span>
            </div>

            <p className="mb-3 max-w-full text-xs font-bold uppercase leading-5 text-[#007acc] sm:text-sm">
              Software engineer building polished systems
            </p>
            <h1 className='max-w-4xl text-[2.8rem] font-industry font-bold leading-tight text-slate-950 sm:text-6xl lg:text-7xl'>
              Mengpang Xing
            </h1>
            
            <h2 className='mt-5 max-w-full text-2xl font-semibold leading-snug text-slate-700 sm:text-3xl'>
              <span>I build </span>
              <TypeAnimation
                sequence={[
                  ' production data platforms',
                  2000,
                  ' full-stack web apps',
                  2000,
                  ' AI evaluation tools',
                  2000,
                  ' learning experiences',
                  2000
                ]}
                wrapper="span"
                speed={50}
                className="text-[#0092ff]"
                style={{ whiteSpace: 'normal', overflowWrap: 'anywhere' }}
                repeat={Infinity}
              />
            </h2>

            <p className="mt-6 max-w-full break-words text-lg leading-8 text-slate-700 [overflow-wrap:anywhere] sm:max-w-2xl">
              Computer Science and Data Science student at Northwestern with production experience across React, FastAPI, PostgreSQL, AWS, Jenkins, and data-quality tooling.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#0092ff] px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#007acc] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                View Experience
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-5 py-3 font-semibold text-slate-800 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-[#007acc] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
              <a
                href="#project"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-5 py-3 font-semibold text-slate-800 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-[#007acc] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                Projects
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            
            <div className='mt-8 flex w-full max-w-[240px] justify-between text-[#193144]'>
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/80 bg-white/70 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:text-blue-600 hover:shadow-md"
                >
                  <Icon className='cursor-pointer' size={20}/>
                  <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 rounded-md bg-slate-950 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">{label}</span>
                </a>
              ))}
            </div>

            <div className="mt-12 grid w-full max-w-full gap-3 sm:grid-cols-3 lg:max-w-3xl">
              {highlights.map((highlight) => (
                <div key={highlight.label} className="rounded-lg border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur-md">
                  <p className="text-xl font-bold text-slate-950">{highlight.value}</p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">{highlight.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}

export default Main
