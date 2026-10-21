import { useEffect, useRef } from 'react';
import { Activity, BrainCircuit, Cloud, Code2, Database, GitBranch, GraduationCap, Layers, Server } from 'lucide-react';

const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['C', 'C++', 'Python', 'TypeScript', 'JavaScript', 'Java', 'Go', 'Rust', 'R', 'SQL'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    items: ['GCP (GKE, GCE, BigQuery, Cloud Monitoring)', 'AWS (ECS, EKS, S3)', 'Kubernetes', 'Docker'],
  },
  {
    title: 'Reliability & Observability',
    icon: Activity,
    items: ['Alerting & Monitoring', 'Incident Triage', 'Toil Reduction', 'Cloud Cost Optimization (FinOps)'],
  },
  {
    title: 'DevOps & CI/CD',
    icon: GitBranch,
    items: ['Argo Workflows', 'GitOps', 'Jenkins', 'GitHub Actions'],
  },
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    items: ['LLM Agents', 'Prompt Engineering', 'OpenAI API', 'Gemini Enterprise', 'PyTorch', 'TensorFlow'],
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    items: ['FastAPI', 'Flask', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Data',
    icon: Database,
    items: ['PostgreSQL', 'BigQuery', 'Pandas', 'NumPy'],
  },
  {
    title: 'Frontend',
    icon: Layers,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
];

const Skills = () => {
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
    <section id="skills" className="relative px-6 py-24 sm:px-8 lg:px-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div ref={sectionRef} className="mb-14 text-center opacity-0 translate-y-10 transition-all duration-700">
          <div className="flex items-center justify-center gap-3 text-blue-600">
            <Layers className="h-6 w-6" />
            <h2 className="text-lg font-semibold uppercase">Toolkit</h2>
          </div>
          <h1 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">Skills &amp; Education</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            The stack behind production platforms, reliability tooling, and AI systems.
          </p>
        </div>

        <div className="mb-6 flex flex-col gap-5 rounded-lg border border-sky-100 bg-gradient-to-r from-white/95 via-white/90 to-sky-50/90 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur sm:flex-row sm:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#4e2a84] text-white shadow-lg shadow-purple-900/20">
            <GraduationCap className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <p className="text-xl font-bold text-slate-950">Northwestern University</p>
            <p className="mt-1 text-slate-600">Bachelor of Arts in Computer Science and Data Science · Evanston, IL</p>
          </div>
          <span className="self-start rounded-md bg-purple-50 px-3 py-1 text-sm font-semibold text-[#4e2a84] sm:self-center">
            Expected Jun 2027
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="group rounded-lg border border-white/80 bg-white/90 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_24px_70px_rgba(0,146,255,0.12)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-sky-50 text-[#0092ff] transition-colors duration-300 group-hover:bg-[#0092ff] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-950">{title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-md border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
