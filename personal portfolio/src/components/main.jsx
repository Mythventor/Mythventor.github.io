import React from 'react'

const main = () => {
  return (
    /* insert image in main page */
    /* scale-x-[-1] -> Flip image */
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.unsplash.com/photo-1502325966718-85a90488dc29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>

        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>

        </div>

    </div>
  )
}

export default main