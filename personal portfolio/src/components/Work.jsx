import React from 'react'
import WorkItem from './WorkItem'


const data = [
    {
        year: 2024,
        title: 'Full-Stack Developer, Y STEM and Chess Inc',
        duration: 'Jun 2024 - Sep 2024',
        details: `As a Full-Stack Developer, I collaborated with the design team to develop and maintain responsive, user-friendly web interfaces for an educational chess platform, focusing on accessibility and enhancing the user experience. I built and optimized interactive features and game elements using TypeScript and React to support students' learning in chess and STEM subjects. Additionally, I conducted rigorous testing and debugging to ensure the web applications performed seamlessly across various browsers and devices, quickly resolving any compatibility issues.`
    },
    {
        year: 2023,
        title: 'STEM Scholar Internship, University of Illinois Chicago',
        duration: 'Nov 2022 - Aug 2023',
        details: 'I collaborated with students from over 20 high schools to tackle challenges in engineering, architecture, and sustainability. I engineered a Rube Goldberg machine, applying physics and mechanical engineering principles, and participated in civil engineering and architecture projects, gaining insights into structural design and foundation engineering. Additionally, I designed a community solar microgrid model, enhancing my understanding of sustainable energy practices and electrical engineering applications.'
    },
    {
        year: 2023,
        title: 'Coding Fun Apprenticeship, Pui Tak Center',
        duration: 'Jan 2023 - June 2023',
        details: 'During my Coding Fun Apprenticeship at Pui Tak Center, I mastered computer science fundamentals with a focus on web development using HTML, CSS, and JavaScript. I developed a strong understanding of coding concepts, web design principles, and interactive content creation while engaging in hands-on projects that simulated real-world scenarios, enhancing my problem-solving and teamwork skills. I also applied my knowledge of responsive design and CSS animation to create functional, user-friendly web applications, effectively bridging the gap between theory and practice in software development.'
    },
]


const Work = () => {
  return (
    <div id='work' className='max-w-[1048px] m-auto md:pl-20 p-4 py-15'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] p-4'>Work Experience</h1>
      {data.map((item, idx) => (
        <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
      ))}
    </div>
  );
};


export default Work