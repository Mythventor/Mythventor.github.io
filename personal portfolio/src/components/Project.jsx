import React, { useState, useEffect, useRef } from 'react';
import ProjectItem from './ProjectItem';
import { Code, Filter } from 'lucide-react';

// Import your project images
import SnakeGameProjectImg from '/src/assets/SnakeGameProject.gif';
import SpeechRecognitionProjectImg from '/src/assets/SpeechRecognitionProject.jpg';
import RubricXpertProjectImg from '/src/assets/RubricXpert.png'
import PersonalPortfolio from '/src/assets/PersonalWebProject.png';
import LynnXingPersonalPortfolio from '/src/assets/LynnXingDesignPortfolio.png';
import MatherChessProjectImg from '/src/assets/MatherChessProject.png';

const Project = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const sectionRef = useRef(null);
  
  // All projects data - now with categories as arrays for multiple categories
  const projects = [
    {
      img: RubricXpertProjectImg,
      title: 'RubricXpert',
      ProgrammingLanguage: 'React + Python',
      categories: ['Full-Stack Development', 'Artificial Intelligence'], // Multiple categories
      ProjectLink: 'https://github.com/Mythventor/RubricXpert.git',
      demoLink: 'https://rubricXpert.org',
    },
    {
      img: PersonalPortfolio,
      title: 'Personal Portfolio',
      ProgrammingLanguage: 'React',
      categories: ['Web Development'],
      ProjectLink: 'https://github.com/Mythventor/Mythventor.github.io.git',
      demoLink: 'https://mythventor.github.io/',
    },
    {
      img: LynnXingPersonalPortfolio,
      title: "Lynn Xing's Portfolio",
      ProgrammingLanguage: 'React',
      categories: ['Web Development'],
      ProjectLink: 'https://github.com/lynnxingdesign/lynnxingdesign.github.io',
      demoLink: 'https://lynnxingdesign.github.io/',
    },
    {
      img: MatherChessProjectImg,
      title: 'Mather HS Chess Website',
      ProgrammingLanguage: 'React',
      categories: ['Web Development'],
      ProjectLink: 'https://github.com/Mythventor/mather-chess',
      demoLink: 'https://mythventor.github.io/mather-chess/',
    },
    {
      img: SnakeGameProjectImg,
      title: 'Snake Game',
      ProgrammingLanguage: 'DrRacket',
      categories: ['Game Development'],
      ProjectLink: 'https://github.com/Mythventor/SnakeGame.git',
      demoLink: null,
    },
    {
      img: SpeechRecognitionProjectImg,
      title: 'Speech Recognition App',
      ProgrammingLanguage: 'Python',
      categories: ['Tools'],
      ProjectLink: 'https://github.com/Mythventor/Voice-To-Text.git',
      demoLink: null,
    },
  ];
  
  // Get unique categories by flattening all category arrays and removing duplicates
  const allCategories = projects.flatMap(project => project.categories);
  const uniqueCategories = ['All', ...new Set(allCategories)];
  
  // Filter projects when filter changes - now checking if any category matches
  useEffect(() => {
    if (selectedFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.categories.includes(selectedFilter))
      );
    }
  }, [selectedFilter]);
  
  // Animation for section
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Modified ProjectItem to show all categories as badges
  const EnhancedProjectItem = (project) => {
    return (
      <ProjectItem 
        {...project} 
        // Pass the first category as the default for backward compatibility
        category={project.categories[0]}
      />
    );
  };

  return (
    <div id="project" className="mx-auto max-w-7xl px-4 py-24">
      <div ref={sectionRef} className="mb-16 text-center opacity-0 translate-y-10 transition-all duration-700">
        <div className="flex items-center justify-center gap-3 text-blue-600">
          <Code className="h-6 w-6" />
          <h2 className="text-lg font-semibold uppercase tracking-wider">
            Featured Work
          </h2>
        </div>
        <h1 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Project Showcase
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Explore my portfolio of innovative projects showcasing my expertise in
          software development, web design, and engineering solutions.
        </p>
        
        {/* Filter buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {uniqueCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                selectedFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="opacity-0 translate-y-10"
            style={{
              animationName: 'fadeInUp',
              animationDuration: '0.8s',
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'forwards',
            }}
          >
            <EnhancedProjectItem {...project} />
          </div>
        ))}
      </div>
      
      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Project;