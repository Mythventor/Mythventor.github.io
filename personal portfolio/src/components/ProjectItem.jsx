import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectItem = ({ img, title, ProgrammingLanguage, ProjectLink, demoLink }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image container with overlay */}
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Floating tech badge - always visible */}
      <div className="absolute right-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow-lg">
        {ProgrammingLanguage}
      </div>

      {/* Title - always visible but transforms on hover */}
      <h3 className="absolute bottom-0 left-0 w-full bg-white/90 p-4 text-lg font-bold text-gray-900 backdrop-blur-sm transition-all duration-500 group-hover:bottom-full group-hover:-mb-20 group-hover:bg-transparent group-hover:text-white">
        {title}
      </h3>

      {/* Content container that slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 translate-y-full group-hover:translate-y-0">
        <div className="mb-6 mt-6">
          <p className="text-sm text-white/80">
            {title} - Built with {ProgrammingLanguage}
          </p>
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
          {demoLink && (
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