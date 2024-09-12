import React from 'react'
import ProjectItem from './ProjectItem'
import SnakeGameProjectImg from '/Users/mengpangxing/Documents/GitHub/Mythventor.github.io/personal portfolio/src/assets/SnakeGameProject.jpg'

const Project = () => {
  return (
    <div id='project' className='max-w-[1048px] m-auto md:pl-20 p-4 py-16'>

        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Project</h1>
        <p className='text-center py-8 text-lg font-semibold text-gray-700'>
            Explore the complete list of my projects below, showcasing my experience and skills in software development, web design, and engineering solutions.
        </p>


        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={SnakeGameProjectImg} title='Snake Game'></ProjectItem>
            <ProjectItem img={SnakeGameProjectImg} title='Snake Game'></ProjectItem>
            <ProjectItem img={SnakeGameProjectImg} title='Snake Game'></ProjectItem>
            <ProjectItem img={SnakeGameProjectImg} title='Snake Game'></ProjectItem>

        </div>

    </div>
  )
}

export default Project


