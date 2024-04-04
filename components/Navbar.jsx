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
    {name: 'Hire me' , path: '#contact'}

  ]

  const handleNav = () => {
    setOpen(!open)
  }

 
  return (
    <nav className="w-full font-font1 dark:bg-neutral-700 ">
  
     <div className="w-10/12 mx-auto flex justify-between items-center py-8">
      <Link href='/'>
      <div className="font-bold text-lg lg:text-[24px] leading-[30px] text-black cursor-pointer dark:text-neutral-200">ARISEKOLA</div>
      </Link>
      <div className="flex  gap-4 items-center">
         <div className="hidden md:flex  gap-4 cursor-pointer ">
         {
          Links.map((link) => (
            <div key={link.name} >
              <Link href={link.path} className="hover:underline-offset-8 hover:border-b-2 hover:border-black dark:border-white dark:text-neutral-200">{link.name}</Link>
            </div>
          ))
         }
         </div>
         <div className="cursor-pointer flex justify-center items-center" onClick={handleDarkmode}>
           {
            darkmode ? (<button className="dark:text-neutral-200"><FaToggleOn className="text-2xl" /></button>)
            :
            ( <button className="dark:text-neutral-200"><FaToggleOff className="text-2xl" /></button>)
           }
         </div>
       </div>


   <div onClick={handleNav} className="block md:hidden cursor-pointer">
  {
    open ? (<FaTimes className="dark:text-white" />)  :  (<FaBars className="dark:text-white" />)
  }
   </div>
 
   </div>
  </nav>
  )
}

export default Navbar;
