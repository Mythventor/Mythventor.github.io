import React from 'react';
import ProjectItem from './ProjectItem';

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
    },
    {
      img: SnakeGameProjectImg,
      title: 'Snake Game',
      ProgrammingLanguage: 'DrRacket',
      ProjectLink: 'https://github.com/Mythventor/SnakeGame.git',
    },
    {
      img: SpeechRecognitionProjectImg,
      title: 'Speech Recognition App',
      ProgrammingLanguage: 'Python',
      ProjectLink: 'https://github.com/Mythventor/Voice-To-Text.git',
    },

    {
      img: LynnXingPersonalPortfolio,
      title: "Lynn Xing's Portfolio",
      ProgrammingLanguage: 'React+ViteJS+TailwindCSS',
      ProjectLink: 'https://lynnxingdesign.github.io/',
    },
    {
      img: MatherChessProjectImg,
      title: 'Mather HS Chess Website',
      ProgrammingLanguage: 'React+CSS+JS',
      ProjectLink: 'https://mythventor.github.io/mather-chess/',
    },
  ];

  return (
    <div id="project" className="mx-auto max-w-7xl px-4 py-24">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Featured Projects
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Explore my portfolio of projects showcasing my experience in software
          development, web design, and engineering solutions.
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