'use client';
import Image from "next/image";
import { navVariants } from "../utils/motion";
import { motion } from "framer-motion";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleNav = () => {
    setOpen(!open)
  }
  return (
    <motion.nav
   variants={navVariants}
   initial= 'hidden'
   whileInView='show'
   className="w-10/12 md:w-11/12 xl:w-10/12 mx-auto flex justify-between items-center py-8">
  
   <div >
    <Image 
    src='/search.svg'
    alt="search"
    width={20}
    height={20}
    className="w-[24px] h-[24px] object-contain"
    /> 
   </div>
   <div className="font-extrabold text-[24px] leading-[30px] text-white">ARISEKOLA</div>
   <div onClick={handleNav} className="cursor-pointer">
  {
    open ? ( <Image 
      src='/close.png'
      alt="close"
      width={16}
      height={16}
      className=" object-contain"
      /> ) : ( <Image 
      src='/menu.svg'
      alt="menu"
      width={20}
      height={20}
      className="w-[24px] h-[24px] object-contain"
      /> )
  }
   </div>
  
  </motion.nav>
  )
}

export default Navbar;
