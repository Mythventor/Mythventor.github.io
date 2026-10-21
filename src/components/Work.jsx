import { useEffect, useRef } from 'react';
import WorkItem from './WorkItem';
import { BriefcaseBusiness, Building2, Sparkles } from 'lucide-react';

const data = [
  {
    year: 2026,
    title: 'Software Engineer Intern',
    company: 'CME Group',
    duration: 'Jun 2026 - Present',
    location: 'Chicago, IL',
    type: 'Current · Year-round',
    current: true,
    details: [
      'Engineer an LLM-powered ticket-intake guardrail agent that validates required context, enriches submissions, and blocks malformed partner requests before they reach the SRE queue, cutting manual intake work and on-call time.',
      'Design a BigQuery-backed CI/CD and Deployment Health dashboard that gives on-call engineers immediate root-cause isolation across GCE, network, DNS, IAM, and logging-provider issues, reducing MTTD for deployment failures.',
      'Standardize failure signatures and quota/stockout triggers across log pipelines to eliminate high-volume false positives and isolate 3,701 actionable failures for more reliable live alerting.',
      'Automate cloud cost controls with a multithreaded Python audit tool comparing historical GCP metrics against live API state, identifying 78 unused compute reservations and alerting on resources idle 7+ days.',
      'Configure a Gemini Enterprise orchestrator agent that routes infrastructure logs through data-retrieval, synthesis, and QA/compliance sub-agents for layered, daily incident analysis.',
      'Publish historical peak metrics to BigQuery through the Unified Data Analytics Platform, authoring YAML schemas and deployment runbooks and promoting changes across four environments.',
    ],
    tags: ['GCP', 'BigQuery', 'LLM Agents', 'Gemini Enterprise', 'Python', 'Observability', 'FinOps'],
  },
  {
    year: 2025,
    title: 'Software Engineer Intern',
    company: 'Cars Commerce (Cars.com)',
    duration: 'Mar 2025 - Aug 2025',
    location: 'Chicago, IL',
    type: 'Internship',
    details: [
      'Built a production customer-data platform using React, FastAPI, and PostgreSQL, centralizing analytics for 1,000+ automotive dealers.',
      'Containerized and deployed on AWS ECS with Jenkins CI/CD, sustaining 200 QPS at 50 ms latency while reducing release time by 70%.',
      'Migrated workloads from EKS to ECS, eliminating Kubernetes cluster-maintenance overhead while preserving availability and simplifying deployments.',
      'Implemented 16 Metaplane data-quality monitors across 50+ critical tables, reducing mean time to detect data issues by 40% across pricing and lead-generation pipelines.',
    ],
    tags: ['React', 'FastAPI', 'PostgreSQL', 'AWS ECS', 'Jenkins', 'Metaplane'],
  },
  {
    year: 2024,
    title: 'Full-Stack Developer Intern',
    company: 'Y STEM and Chess Inc',
    duration: 'Jun 2024 - Sep 2024',
    location: 'Boise, ID (Remote)',
    type: 'Internship',
    details: [
      'Developed RESTful APIs with Node.js and Express for authentication, lesson tracking, and chess game state, supporting 500+ students as enrollment grew 3x year-over-year.',
      'Optimized PostgreSQL schema and queries to reduce response times by 30% as usage expanded.',
      'Crafted responsive, accessible React and TypeScript interfaces with the design team, improving lesson interactivity and reducing student drop-off by 25%.',
    ],
    tags: ['Node.js', 'Express', 'PostgreSQL', 'React', 'TypeScript'],
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
          From student-facing platforms to dealer analytics to reliability engineering for one of the world&apos;s largest derivatives marketplaces.
        </p>
        <div className="mx-auto mt-8 grid max-w-4xl gap-3 text-left sm:grid-cols-3">
          <div className="rounded-lg border border-sky-100 bg-white/80 p-4 shadow-sm backdrop-blur">
            <Sparkles className="mb-3 h-5 w-5 text-[#0092ff]" />
            <p className="font-semibold text-slate-950">Now at CME Group</p>
            <p className="mt-1 text-sm text-slate-600">Year-round SWE intern · SRE tooling on GCP</p>
          </div>
          <div className="rounded-lg border border-sky-100 bg-white/80 p-4 shadow-sm backdrop-blur">
            <Building2 className="mb-3 h-5 w-5 text-emerald-600" />
            <p className="font-semibold text-slate-950">Cars Commerce</p>
            <p className="mt-1 text-sm text-slate-600">Dealer analytics and AWS deployment</p>
          </div>
          <div className="rounded-lg border border-sky-100 bg-white/80 p-4 shadow-sm backdrop-blur">
            <BriefcaseBusiness className="mb-3 h-5 w-5 text-slate-600" />
            <p className="font-semibold text-slate-950">Full-stack range</p>
            <p className="mt-1 text-sm text-slate-600">React, REST APIs, PostgreSQL, CI/CD</p>
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
