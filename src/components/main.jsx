import React, { useEffect, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const Main = () => {
  const canvasRef = useRef(null);
  const contentRef = useRef(null);
  
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
        this.size = Math.random() * 3 + 0.5; // Smaller particles
        this.speedX = Math.random() * 1 - 0.5; // Slower movement
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`; // White particles with low opacity
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
      // Fewer particles for subtle effect
      for (let i = 0; i < 50; i++) {
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
          
          if (distance < 80) { // Shorter distance for connections
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - (distance/80) * 0.1})`; // Very subtle lines
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

  // Content fade-in animation
  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      // Add animation classes after a short delay for page load
      setTimeout(() => {
        content.classList.add('opacity-100');
        content.classList.remove('opacity-0', 'translate-y-10');
      }, 300);
    }
  }, []);

  return (
    <div id='main' className="relative h-screen overflow-hidden">
        {/* Original background image */}
        <img 
          className='absolute inset-0 w-full h-screen object-cover object-left z-0 transition-transform duration-10000 ease-in-out hover:scale-105' 
          src='https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt="Background"
        />

        {/* Particle canvas overlay */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-10 opacity-60"
        />
        
        {/* White shadow overlay - reduced opacity */}
        <div className='absolute inset-0 z-20 bg-gradient-to-r from-white/60 to-white/30 backdrop-blur-[2px]'></div>
        
        {/* Content container with animation */}
        <div 
          ref={contentRef}
          className='relative z-30 max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center opacity-0 translate-y-10 transition-all duration-1000 ease-out'
        >
            <h1 className='sm:text-5xl text-4xl font-industry font-bold text-gray-800 mb-2 text-shadow shadow-white'>
              I'm Mengpang Xing
            </h1>
            
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-[#0092ff] text-shadow shadow-white/50'>
              I'm a
              <TypeAnimation
                  sequence={[
                      'developer',
                      2000,
                      'CS student in Northwestern',
                      2000,
                      'Chess lover',
                      2000,
                      'Tech Enthusiast',
                      2000
                      ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', paddingLeft:'5px' }}
              repeat={Infinity}/>
            </h2>
            
            <div className='flex text-[#193144] justify-between pt-8 max-w-[200px] w-full'>
                <a 
                  href='https://github.com/Mythventor' 
                  target="_blank"
                  className="transform transition-all duration-300 hover:scale-125 hover:text-blue-600 relative group"
                >
                  <FaGithub className='cursor-pointer' size={20}/>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">GitHub</span>
                </a>

                <a 
                  href='https://x.com/MengpangXing' 
                  target="_blank"
                  className="transform transition-all duration-300 hover:scale-125 hover:text-blue-600 relative group"
                >
                  <FaXTwitter className='cursor-pointer' size={20}/>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Twitter</span>
                </a>

                <a 
                  href="https://www.facebook.com/mengpang.xing?mibextid=LQQJ4d" 
                  target="_blank"
                  className="transform transition-all duration-300 hover:scale-125 hover:text-blue-600 relative group"
                >
                  <FaFacebookF className='cursor-pointer' size={20}/>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Facebook</span>
                </a>

                <a 
                  href="https://www.instagram.com/mengpangxing" 
                  target="_blank"
                  className="transform transition-all duration-300 hover:scale-125 hover:text-blue-600 relative group"
                >
                  <FaInstagram className='cursor-pointer' size={20}/>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Instagram</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/mengpang-xing?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                  target="_blank"
                  className="transform transition-all duration-300 hover:scale-125 hover:text-blue-600 relative group"
                >
                  <FaLinkedinIn className='cursor-pointer' size={20}/>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">LinkedIn</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Main