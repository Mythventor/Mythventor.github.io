import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const WorkItem = ({ year, title, duration, details, isFirst, isLast }) => {
  return (
    <div className="group relative mb-12 w-full pl-8 md:mb-16 md:w-1/2 md:pl-0 md:odd:ml-auto md:odd:pl-8 md:even:mr-auto md:even:pr-8">
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 flex h-8 w-8 -translate-x-1/2 transform items-center justify-center rounded-full border-2 border-white bg-blue-500 shadow-md transition-transform duration-200 group-hover:scale-110 md:left-1/2">
        <Calendar className="h-4 w-4 text-white" />
      </div>

      {/* Content card */}
      <div className="relative rounded-2xl bg-white p-6 shadow-lg transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-xl">
        {/* Year badge */}
        <div className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-600">
          {year}
        </div>

        {/* Job title */}
        <h3 className="mb-2 text-xl font-bold text-gray-900 md:text-2xl">
          {title}
        </h3>

        {/* Duration */}
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>{duration}</span>
        </div>

        {/* Details */}
        <p className="text-gray-600">{details}</p>

        {/* Hover effect arrow */}
        <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <ArrowRight className="h-5 w-5 text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default WorkItem;