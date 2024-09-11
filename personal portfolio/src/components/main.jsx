import React from 'react'

const main = () => {
  return (

    <div id='main'>
        {/* insert image in main page (scale-x-[-1] -> Flip image)*/}
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.unsplash.com/photo-1502325966718-85a90488dc29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        </img>

        {/* Create the white shadow screen effect*/}
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        </div>

        <div>
            <h1>I'm Mengpang Xing</h1>
            {/* React-type-animation package (npm install react-type-animation)
            https://www.npmjs.com/package/react-type-animation */}
            <h2>I'm a</h2>
        </div>

    </div>
  )
}

export default main