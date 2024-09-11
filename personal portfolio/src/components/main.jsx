import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const main = () => {
  return (

    <div id='main'>
        {/* insert image in main page (scale-x-[-1] -> Flip image)*/}
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.unsplash.com/photo-1502325966718-85a90488dc29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        </img>

        {/* Create the white shadow screen effect*/}
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        

        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Mengpang Xing</h1>
            {/* React-type-animation package (npm install react-type-animation)
            https://www.npmjs.com/package/react-type-animation */}
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
            <TypeAnimation
                sequence={[
                    'developer',
                    2000, // wait 2s 
                    'CS student in NorthwesternU',
                    2000, // wait 2s 
                    'Chess lover',
                    2000, // wait 2s 
                    'Tech Enthusiast',
                    2000 // wait 2s 
                    ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', paddingLeft:'5px' }}
            repeat={Infinity}/>
        </h2>
        
        <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaTwitter className='cursor-pointer' size ={20}></FaTwitter>
            <FaFacebookF className='cursor-pointer' size ={20}></FaFacebookF>
            <FaInstagram className='cursor-pointer' size ={20} ></FaInstagram>
            <FaLinkedinIn className='cursor-pointer' size ={20} ></FaLinkedinIn>
        </div>

        </div>
        </div>

    </div>
  )
}

export default main