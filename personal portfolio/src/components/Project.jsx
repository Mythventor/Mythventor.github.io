import React from 'react';
import ProjectItem from './ProjectItem';
import { FolderGit2, Code } from 'lucide-react';

// Import your project images
import SnakeGameProjectImg from '/src/assets/SnakeGameProject.gif';
import SpeechRecognitionProjectImg from '/src/assets/SpeechRecognitionProject.png';
import PersonalPortfolio from '/src/assets/PersonalWebProject.png';
import LynnXingPersonalPortfolio from '/src/assets/LynnXingDesignPortfolio.png';
import MatherChessProjectImg from '/src/assets/MatherChessProject.png';

const Project = () => {
  const projects = [
    {
      img: PersonalPortfolio,
      title: 'Personal Portfolio',
      ProgrammingLanguage: 'React+ViteJS+TailwindCSS',
      ProjectLink: 'https://github.com/Mythventor/Mythventor.github.io.git',
      demoLink: 'https://mythventor.github.io/', // Live demo available
    },

    {
      img: LynnXingPersonalPortfolio,
      title: "Lynn Xing's Portfolio",
      ProgrammingLanguage: 'React+ViteJS+TailwindCSS',
      ProjectLink: 'https://github.com/Mythventor/mather-chess',
      demoLink: 'https://lynnxingdesign.github.io/', // Live demo available
    },


    {
      img: MatherChessProjectImg,
      title: 'Mather HS Chess Website',
      ProgrammingLanguage: 'React+CSS+JS',
      ProjectLink: 'https://github.com/Mythventor/mather-chess',
      demoLink: 'https://mythventor.github.io/mather-chess/', // Live demo available
    },
    
    {
      img: SnakeGameProjectImg,
      title: 'Snake Game',
      ProgrammingLanguage: 'DrRacket',
      ProjectLink: 'https://github.com/Mythventor/SnakeGame.git',
      demoLink: null, // No demo available
    },
    {
      img: SpeechRecognitionProjectImg,
      title: 'Speech Recognition App',
      ProgrammingLanguage: 'Python',
      ProjectLink: 'https://github.com/Mythventor/Voice-To-Text.git',
      demoLink: null, // No demo available
    },


  ];

  return (
    <div id="project" className="mx-auto max-w-7xl px-4 py-24">
      <div className="mb-16 text-center">
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
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;