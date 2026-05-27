import { useEffect, useRef } from 'react';
import WorkItem from './WorkItem';
import { BriefcaseBusiness, Building2, Sparkles } from 'lucide-react';

const data = [
  {
    year: 2026,
    title: 'Incoming Software Engineer Intern',
    company: 'CME Group',
    duration: 'Summer 2026',
    location: 'Chicago, IL',
    type: 'Upcoming',
    details: [
      'Joining CME Group as an upcoming Summer 2026 Software Engineer Intern focused on financial-market technology and production engineering workflows.',
      'Bringing full-stack, cloud deployment, and data-quality experience into a high-reliability engineering environment.',
    ],
  },
  {
    year: 2025,
    title: 'Software Engineer Intern',
    company: 'Cars Commerce (Cars.com)',
    duration: 'Mar 2025 - Aug 2025',
    location: 'Chicago, IL',
    type: 'Recent',
    details: [
      'Architected a production-grade customer data platform using React, FastAPI, and PostgreSQL to centralize dealership analytics for 1,000+ automotive dealers nationwide.',
      'Containerized and deployed the application to AWS ECS with a Jenkins pipeline, reaching 200 QPS with 50ms average latency and reducing release time by 70%.',
      'Deployed 16 Metaplane data monitors across 50+ critical tables, cutting mean time to detect data-quality issues by 40% across pricing and lead-generation pipelines.',
    ],
  },
  {
    year: 2024,
    title: 'Full-Stack Developer Internship',
    company: 'Y STEM and Chess Inc',
    duration: 'Jun 2024 - Sep 2024',
    location: 'Boise, ID',
    type: 'Internship',
    details: [
      'Developed RESTful APIs with Node.js and Express.js for user authentication, lesson progression, and chess game state across a growing student platform.',
      'Implemented PostgreSQL schemas for student progress, lesson content, and game history, optimizing queries to reduce response times by 30%.',
      'Built responsive React and TypeScript interfaces with accessibility-focused polish, helping reduce student drop-off through clearer lesson interactions.',
    ],
  },
  {
    year: 2023,
    title: 'STEM Scholar Internship & After-school Program',
    company: 'University of Illinois Chicago',
    duration: 'Nov 2022 - Aug 2023',
    location: 'Chicago, IL',
    type: 'Program',
    details: [
      'Collaborated with students from 20+ high schools on engineering, architecture, and sustainable development challenges.',
      'Engineered a Rube Goldberg machine with 12+ mechanical components and designed a community solar microgrid model for five model homes.',
    ],
  },
  {
    year: 2023,
    title: 'Coding Fun Apprenticeship',
    company: 'Pui Tak Center',
    duration: 'Jan 2023 - June 2023',
    location: 'Chicago, IL',
    type: 'Apprenticeship',
    details: [
      'Built a foundation in HTML, CSS, JavaScript, responsive design, and interactive web content through hands-on software projects.',
      'Strengthened problem-solving and teamwork skills by translating programming fundamentals into functional user-facing applications.',
    ],
  },
];

const Work = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    
    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }
    
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  
  return (
    <section id="work" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
      <div className="mx-auto max-w-7xl">
      <div ref={sectionRef} className="mb-16 text-center opacity-0 translate-y-10 transition-all duration-700">
        <div className="flex items-center justify-center gap-3 text-blue-600">
          <BriefcaseBusiness className="h-6 w-6" />
          <h2 className="text-lg font-semibold uppercase">Career Path</h2>
        </div>
        <h1 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">Work Experience</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Production software, data platforms, teaching technology, and the next stop in financial-market engineering.
        </p>
        <div className="mx-auto mt-8 grid max-w-4xl gap-3 text-left sm:grid-cols-3">
          <div className="rounded-lg border border-sky-100 bg-white/80 p-4 shadow-sm backdrop-blur">
            <Sparkles className="mb-3 h-5 w-5 text-[#0092ff]" />
            <p className="font-semibold text-slate-950">Incoming 2026</p>
            <p className="mt-1 text-sm text-slate-600">CME Group SWE intern</p>
          </div>
          <div className="rounded-lg border border-sky-100 bg-white/80 p-4 shadow-sm backdrop-blur">
            <Building2 className="mb-3 h-5 w-5 text-emerald-600" />
            <p className="font-semibold text-slate-950">Cars Commerce</p>
            <p className="mt-1 text-sm text-slate-600">Dealer analytics and AWS deployment</p>
          </div>
          <div className="rounded-lg border border-sky-100 bg-white/80 p-4 shadow-sm backdrop-blur">
            <BriefcaseBusiness className="mb-3 h-5 w-5 text-slate-600" />
            <p className="font-semibold text-slate-950">Full-stack range</p>
            <p className="mt-1 text-sm text-slate-600">React, APIs, PostgreSQL, CI/CD</p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/60 to-blue-500/0 md:left-1/2 md:-translate-x-1/2"></div>
        {data.map((item, idx) => (
          <WorkItem 
            key={idx} 
            item={item}
            index={idx}
            isLast={idx === data.length - 1}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Work;
