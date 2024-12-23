import React from 'react';
import {ExternalLink } from 'lucide-react';
import {FaGithub} from 'react-icons/fa'

const ProjectItem = ({ img, title, ProgrammingLanguage, ProjectLink, demoLink }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Image container with overlay */}
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content container */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 translate-y-full group-hover:translate-y-0">
        <h3 className="mb-2 text-xl font-bold tracking-wide">{title}</h3>
        <div className="mb-4 flex items-center space-x-2">
          <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm backdrop-blur-sm">
            {ProgrammingLanguage}
          </span>
        </div>
        <div className="flex space-x-4">
          <a
            href={ProjectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            <FaGithub className="h-4 w-4" />
            <span>View Code</span>
          </a>
          {demoLink && ( // Only show Live Demo button if demoLink exists
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;