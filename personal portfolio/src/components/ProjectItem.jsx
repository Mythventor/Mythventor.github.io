import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectItem = ({ img, title, ProgrammingLanguage, ProjectLink }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
      {/* Image container with overlay */}
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content container */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 translate-y-full group-hover:translate-y-0">
        <h3 className="mb-2 text-xl font-bold tracking-wide">{title}</h3>
        <div className="mb-4 flex items-center space-x-2">
          <span className="rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">
            {ProgrammingLanguage}
          </span>
        </div>
        <div className="flex space-x-4">
          <a
            href={ProjectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
          >
            <Github className="h-4 w-4" />
            <span>View Project</span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default ProjectItem;