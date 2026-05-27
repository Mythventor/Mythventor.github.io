import { useEffect, useRef } from 'react';
import { ArrowUpRight, Calendar, CheckCircle2, MapPin } from 'lucide-react';

const WorkItem = ({ item, index, isLast }) => {
  const itemRef = useRef(null);
  const alignLeft = index % 2 === 1;
  const alignmentClasses = alignLeft
    ? 'md:justify-start md:pr-[calc(50%+2rem)]'
    : 'md:justify-end md:pl-[calc(50%+2rem)]';
  
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
        threshold: 0.2,
      }
    );
    
    const currentItem = itemRef.current;

    if (currentItem) {
      observer.observe(currentItem);
    }
    
    return () => {
      if (currentItem) {
        observer.unobserve(currentItem);
      }
    };
  }, []);
  
  return (
    <article 
      ref={itemRef} 
      className={`group relative mb-10 flex w-full pl-12 opacity-0 translate-y-10 transition-all duration-700 md:mb-12 md:pl-0 ${alignmentClasses}`}
    >
      <div className="absolute left-4 top-6 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-[#0092ff] shadow-lg shadow-sky-500/25 transition-transform duration-300 group-hover:scale-110 md:left-1/2">
        <Calendar className="h-4 w-4 text-white" />
      </div>

      {!isLast && (
        <div className="absolute left-4 top-14 h-[calc(100%+28px)] w-px -translate-x-1/2 bg-gradient-to-b from-sky-300 to-sky-100 md:left-1/2" />
      )}

      <div className="relative w-full rounded-lg border border-white/80 bg-white/90 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.09)] backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-sky-200 group-hover:shadow-[0_24px_80px_rgba(0,146,255,0.16)]">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-sky-50 px-3 py-1 text-sm font-bold text-[#007acc]">
            {item.year}
          </span>
          <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
            {item.type}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-950 md:text-2xl">
          {item.title}
        </h3>
        <p className="mt-1 text-lg font-semibold text-[#007acc]">{item.company}</p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4 text-slate-400" />
            {item.duration}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-slate-400" />
            {item.location}
          </span>
        </div>

        <ul className="mt-5 space-y-3">
          {item.details.map((detail) => (
            <li key={detail} className="flex gap-3 leading-7 text-slate-700">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5 text-blue-500" />
        </div>
      </div>
    </article>
  );
};

export default WorkItem;
