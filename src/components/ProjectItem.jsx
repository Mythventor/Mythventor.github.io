import { ArrowUpRight, ExternalLink, Tags } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectItem = ({ img, title, ProgrammingLanguage, ProjectLink, demoLink, categories = [], description }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/80 bg-white/90 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_24px_70px_rgba(0,146,255,0.15)]">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
        <div className="absolute right-4 top-4 rounded-md bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
          {ProgrammingLanguage}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-slate-950">{title}</h3>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-sky-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="inline-flex items-center gap-1 rounded-md bg-sky-50 px-2.5 py-1 text-xs font-semibold text-[#007acc]">
              <Tags className="h-3 w-3" />
              {category}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={ProjectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          >
            <FaGithub className="h-4 w-4" />
            <span>View Code</span>
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
