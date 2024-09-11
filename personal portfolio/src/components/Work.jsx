import React from 'react'
import WorkItem from './WorkItem'


const data = [
    {
        year: 2020,
        title: 'STEM Scholar',
        duration: '1 Years',
        details: 'gardening etc etc etcgardening etc etc etgardening etc etc etgardening etc etc etgardening etc etc etgardening etc etc etgardening etc etc etgardening etc etc etgardening etc etc etgardening etc etc etgardening etc etc etgardening etc etc et'
    },
    {
        year: 2019,
        title: 'Front end',
        duration: '1 Years',
        details: 'front end developer in Chicago'
    },
]


const Work = () => {
  return (
    <div id='work' className='max-w-[1048px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx) => (
        <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
      ))}
    </div>
  );
};


export default Work