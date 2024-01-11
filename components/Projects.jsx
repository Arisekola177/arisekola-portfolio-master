import { fadeIn } from '@/utils/motion'
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

const Projects = ({index, img, project, desc}) => {
  return (
    <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className='flex md:flex-row flex-col gap-1 lg:gap-4'
   >
     <img
      src={img}
      alt='planet-01'
      className='md:w-[270px] w-full h-[250px] rounded-[32px] object-cover'
     />
     <div className='w-full flex justify-between items-center'>
             <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
                    <h4 className='font-normal lg:text-[42px] text-[26px] text-purple-500'>{project}</h4>
                    <p className='mt-[16px] font-normal lg:text-[20px] text-[14px] '>{desc}</p>
                    <Link className='block text-red-400 text-xl mt-5 underline animate-bounce lg:hidden' href='#'>See Demo</Link>
             </div>
             <div className='hidden lg:flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white hover:bg-red-400'>
               <img 
                 src='arrow.svg'
                 alt='arrow'
                 className='w-[40%] h-[40%] object-contain animate-bounce'
               />
             </div>
     </div>
   </motion.div>
                 
      
  )
}

export default Projects