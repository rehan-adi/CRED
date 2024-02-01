import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { CgMenuRightAlt } from "react-icons/cg";
import { RiCloseLine } from "react-icons/ri";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
              <nav className='bg-black lg:h-[25vh] h-[18vh] text-white flex justify-between px-8 lg:px-52 items-center w-auto overflow-hidden relative'>
      <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" width={40} height={45} alt="" />

      <div className='lg:hidden flex items-center'>
        <button className='text-white text-4xl focus:outline-none' onClick={toggleMenu}>
          {isMenuOpen ? <RiCloseLine /> : <CgMenuRightAlt />}
        </button>
      </div>

      {/* Sidebar for Large Screens */}
      <div className={`lg:flex text-lg opacity-90 font-semibold gap-10 hidden `}>
        <a href="" className='text-sm'>credit score check</a>
        <a href="" className='text-sm'>CRED pay</a>
      </div>

      {/* Sidebar for Small Screens */}
      <div className={`lg:hidden fixed top-0 right-0 bg-[#0F0F0F] w-[375px] z-50 h-full transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className='text-white text-4xl focus:outline-none ml-[300px] mt-10' onClick={toggleMenu}><RiCloseLine /></button>
        <div className='flex flex-col items-center gap-8 mt-16'>
          <div className='px-20 py-4 rounded-xl bg-[#272B2D6E]'>
            <a href="" className='text-white text-sm font-semibold'>CRED pay</a>
          </div>
          <div className='px-12 py-4 rounded-xl bg-[#272B2D6E]'>
          <a href="" className='text-white font-semibold text-sm'>credit score check</a>
          </div>
        </div>
      </div>
    </nav>

            <div className='bg-black flex justify-center items-center  z-10 flex-col text-[#F8F8F8] h-[75vh] w-full'>
                <motion.h1 
                initial={{y: "50vh", opacity: 0, scale: 0.5, color: '#00FF00'}}
                animate={{y: 0, opacity: 1, scale: 1, color: '#FFFFFF'}}
                transition={{duration: 3, type: 'spring', stiffness: 150}}
                className='font-bold text-start lg:text-center lg:mt-[-80px] lg:w-[80vw] w-[80vw] text-5xl lg:text-8xl'>rewards for paying <br />
                    credit card bills.</motion.h1>
                     <div className='w-[80vw] lg:mt-0 lg:w-[50vw] lg:text-center mt-6'>
                     <motion.p
                    initial={{y: "60vh", scale: 0.5, opacity: 0}}
                    animate={{y: 0, scale: 1, opacity: 1}}
                    transition={{duration: 3, type: 'spring', stiffness: 111}} 
                    className='font-bold text-xs lg:mt-9 lg:text-xl'>join 9M+ members who win rewards and cashbacks everyday</motion.p>
                     </div>
                    <div className='lg:pr-0 pr-[110px]'>
                    <motion.button
                    initial={{y: "70vh", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 1}}
                     className='lg:px-10 px-5  hover:bg-transparent border-2 hover:text-white py-2 lg:py-3 mt-8 lg:mt-14 bg-white text-black font-semibold text-lg lg:text-xl rounded-full'>Download CRED</motion.button>
                    </div>
            </div>
        </>
    )
}

export default Navbar