import { useState, useEffect, useRef } from 'react';
import ProjectItem from './ProjectItem';
import { Code, Filter, Layers3 } from 'lucide-react';

// Import your project images
import SnakeGameProjectImg from '/src/assets/SnakeGameProject.gif';
import SpeechRecognitionProjectImg from '/src/assets/SpeechRecognitionProject.jpg';
import RubricXpertProjectImg from '/src/assets/RubricXpert.png'
import PersonalPortfolio from '/src/assets/PersonalWebProject.png';
import LynnXingPersonalPortfolio from '/src/assets/LynnXingDesignPortfolio.png';
import MatherChessProjectImg from '/src/assets/MatherChessProject.png';

const projects = [
  {
    img: RubricXpertProjectImg,
    title: 'RubricXpert',
    ProgrammingLanguage: 'React + Python',
    categories: ['Full-Stack Development', 'Artificial Intelligence', 'Web Development'],
    description: 'AI-assisted essay evaluation platform with rubric-aligned scoring, file conversion, and structured analysis outputs.',
    ProjectLink: 'https://github.com/Mythventor/RubricXpert.git',
    demoLink: 'https://rubricXpert.org',
  },
  {
    img: PersonalPortfolio,
    title: 'Personal Portfolio',
    ProgrammingLanguage: 'React',
    categories: ['Web Development'],
    description: 'This portfolio site, rebuilt as a fast, responsive React experience with polished sections and a visual project system.',
    ProjectLink: 'https://github.com/Mythventor/Mythventor.github.io.git',
    demoLink: 'https://mythventor.github.io/',
  },
  {
    img: LynnXingPersonalPortfolio,
    title: "Lynn Xing's Portfolio",
    ProgrammingLanguage: 'React',
    categories: ['Web Development'],
    description: 'A clean portfolio for a design-focused personal brand with responsive layouts and image-forward project presentation.',
    ProjectLink: 'https://github.com/lynnxingdesign/lynnxingdesign.github.io',
    demoLink: 'https://lynnxingdesign.github.io/',
  },
  {
    img: MatherChessProjectImg,
    title: 'Mather HS Chess Website',
    ProgrammingLanguage: 'React',
    categories: ['Web Development'],
    description: 'School chess website with accessible content sections, club information, and a public-facing project structure.',
    ProjectLink: 'https://github.com/Mythventor/mather-chess',
    demoLink: 'https://mythventor.github.io/mather-chess/',
  },
  {
    img: SnakeGameProjectImg,
    title: 'Snake Game',
    ProgrammingLanguage: 'DrRacket',
    categories: ['Game Development'],
    description: 'Classic snake gameplay implemented in DrRacket with focused game-loop logic and keyboard-driven movement.',
    ProjectLink: 'https://github.com/Mythventor/SnakeGame.git',
    demoLink: null,
  },
  {
    img: SpeechRecognitionProjectImg,
    title: 'Speech Recognition App',
    ProgrammingLanguage: 'Python',
    categories: ['Tools'],
    description: 'Python utility for turning voice input into text, exploring speech recognition workflows and local automation.',
    ProjectLink: 'https://github.com/Mythventor/Voice-To-Text.git',
    demoLink: null,
  },
];

const Project = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const sectionRef = useRef(null);
  
  const allCategories = projects.flatMap(project => project.categories);
  const uniqueCategories = ['All', ...new Set(allCategories)];
  
  useEffect(() => {
    if (selectedFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.categories.includes(selectedFilter))
      );
    }
  }, [selectedFilter]);
  
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

  const EnhancedProjectItem = (project) => {
    return (
      <ProjectItem 
        {...project} 
        category={project.categories[0]}
      />
    );
  };

  return (
    <section id="project" className="relative px-6 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
      <div ref={sectionRef} className="mb-16 text-center opacity-0 translate-y-10 transition-all duration-700">
        <div className="flex items-center justify-center gap-3 text-blue-600">
          <Code className="h-6 w-6" />
          <h2 className="text-lg font-semibold uppercase">
            Featured Work
          </h2>
        </div>
        <h1 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">
          Project Showcase
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          A curated set of full-stack, AI, web, game, and tool projects with direct code and demo paths.
        </p>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 rounded-lg border border-sky-100 bg-white/70 p-2 shadow-sm backdrop-blur">
          {uniqueCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                selectedFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-sky-50 hover:text-blue-700'
              }`}
            >
              {category === 'All' ? <Layers3 className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
};

export default Project;
