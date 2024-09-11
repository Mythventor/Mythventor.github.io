import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'


const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
        console.log('tap');
    };


  return (
    <div>
        <AiOutlineMenu onClick= {handleNav} className = 'absolute top-4 right-4 z-[99] md:hidden'/>
        {
            nav ? (
                <div> 
                    
                </div>
            )
            :(
                <div></div>
            )
        }

    </div>

  );
};


export default Sidenav