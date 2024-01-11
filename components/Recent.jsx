'use client'
import { TypingText } from "./CustomTexts"
import {motion} from 'framer-motion'
import { staggerContainer, textVariant } from '../utils/motion';
import { projects } from "@/constants";
import Projects from "./Projects";

const Recent = () => {

    
  return (
    <motion.div 
    variants={staggerContainer}
   initial="hidden"
   whileInView="show"
   viewport={{once: 'false', amount: 0.25}}
    className="w-10/12 md:w-11/12 xl:w-10/12 mx-auto mt-16 md:mt-20">
           <TypingText title="| What i have done?"  />
           <motion.h1 variants={textVariant(1.1)} className="lg:text-8xl md:text-7xl text-6xl font-semibold text-center mt-10 font-titleFont text-red-400">Projects</motion.h1>
           <div className="mt-[50px] flex flex-col gap-[15px] xl:gap-[30px]">
          {
            projects.map((project, index) => (
              <Projects
               key={project.id}
               {...project}
               index={index + 1}
              />
            ))
          }
       </div>
             
         
          
    </motion.div>
  )
}

export default Recent