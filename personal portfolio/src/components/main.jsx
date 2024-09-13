import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'


const main = () => {
  return (

    <div id='main'>
        {/* insert image in main page ( scale-x-[-1] -> Flip image)*/}
        <img className='w-full h-screen object-cover object-left' src='https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'>
        </img>

        {/* Create the white shadow screen effect*/}
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        

        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-industry font-bold text-gray-800'>I'm Mengpang Xing</h1>
            {/* React-type-animation package (npm install react-type-animation)
            https://www.npmjs.com/package/react-type-animation */}
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-[#0092ff]'>I'm a
            <TypeAnimation
                sequence={[
                    'developer',
                    2000, // wait 2s 
                    'CS student in Northwestern',
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
        
        <div className='flex text-[#193144] justify-between pt-6 max-w-[200px] w-full'>
            <a href='https://x.com/MengpangXing' target="_blank">
            <FaTwitter  className='cursor-pointer' size ={20}></FaTwitter></a>

            <a href="https://www.facebook.com/mengpang.xing?mibextid=LQQJ4d" target="_blank">
            <FaFacebookF className='cursor-pointer' size ={20}></FaFacebookF></a>

            <a href="https://www.instagram.com/mengpangxing" target="_blank">
            <FaInstagram className='cursor-pointer' size ={20} ></FaInstagram></a>

            <a href="https://www.linkedin.com/in/mengpang-xing?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
            <FaLinkedinIn className='cursor-pointer' size ={20} ></FaLinkedinIn></a>
        </div>

        </div>
        </div>

    </div>
  )
}

export default main