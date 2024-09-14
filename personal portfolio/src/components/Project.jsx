import React from 'react'
import ProjectItem from './ProjectItem'
import SnakeGameProjectImg from '/src/assets/SnakeGameProject.gif'

{/* Import project image */}
import SpeechRecognitionProjectImg from '/src/assets/SpeechRecognitionProject.png'
import MatherChessProjectImg from '/src/assets/MatherChessProject.png'
import PersonalWebProject from '/src/assets/PersonalWebProject.png'

const Project = () => {
  return (
    <div id='project' className='max-w-[1048px] m-auto md:pl-20 p-4 py-16'>

        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Project</h1>
        <p className='text-center py-8 text-lg font-semibold text-gray-700'>
            Explore the complete list of my projects below, showcasing my experience and skills in software development, web design, and engineering solutions.
        </p>

        {/* Project Title, Programming Language, and Link */}
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={SnakeGameProjectImg} title='Snake Game' ProgrammingLanguage='DrRacket' ProjectLink='https://github.com/Mythventor/SnakeGame.git'></ProjectItem>
            <ProjectItem img={SpeechRecognitionProjectImg} title='Speech Recognition App' ProgrammingLanguage='Python' ProjectLink='https://github.com/Mythventor/Voice-To-Text.git'> </ProjectItem>
            <ProjectItem img={PersonalWebProject} title='Personal Portfolio' ProgrammingLanguage='React+ViteJS+TailwindCSS' ProjectLink='https://github.com/Mythventor/Mythventor.github.io.git'></ProjectItem>
            <ProjectItem img={MatherChessProjectImg} title='Mather HS Chess Website' ProgrammingLanguage='React+CSS+JS' ProjectLink='https://mythventor.github.io/mather-chess/'></ProjectItem>

        </div>

    </div>
  )
}

export default Project


