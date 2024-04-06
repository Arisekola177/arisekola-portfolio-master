'use client';
import { useState } from "react";
import Link from "next/link";
import {FaBars, FaTimes, FaToggleOn, FaToggleOff} from 'react-icons/fa'

const Navbar = ({handleDarkmode, darkmode}) => {
  const [open, setOpen] = useState(false)
  

  const Links = [
    {name: 'About' , path: '#about'},
    {name: 'Experience' , path: '#experience'},
    {name: 'Projects' , path: '#projects'},


  ]


 
  return (
    <nav className="w-full font-font1 sticky top-0 z-10 ">
  
     <div className="lg:w-8/12 sm:w-10/12 mx-auto flex flex-col justify-center items-center   md:flex-row md:justify-between md:items-center py-8">
      <Link href='/'>
      <div className="font-bold text-lg lg:text-[24px]  text-white hover:text-sky-500 ">ARISEKOLA</div>
      </Link>
     
         <div className="flex items-center sm:mt-5 md:mt-0 gap-4 cursor-pointer ">
         {
          Links.map((link) => (
            <div key={link.name} >
              <Link href={link.path} className="text-neutral-200 sm:text-xs md:text-sm hover:text-sky-500 border-sky-500  hover:underline-offset-8 hover:border-b-2 ">{link.name}</Link>
            </div>
          ))
         }
           <button className="text-white bg-gradient-to-t from-sky-500 to-cyan-500 p-2 rounded-lg sm:text-xs md:text-sm hover:scale-95 duration-300">
           <Link href='https://resume-topaz-beta.vercel.app/' target="blank">View Resume</Link>
           </button>
         </div>
        
       

 
   </div>
  </nav>
  )
}

export default Navbar;
