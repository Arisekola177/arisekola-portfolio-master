'use client';
import {  textContainer, textVariant2 } from "../utils/motion";
import { motion } from "framer-motion";


export const TypingText = ({title}) => (
  <motion.p
   variants={textContainer}
   className='font-normal text-[24px] text-secondary-white'
  >
    {Array.from(title).map((letter, index) => (
     <motion.span
      variants={textVariant2}
      key={index}
     >
       {letter === '' ? '/u00A0' : letter }
     </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({title}) => (
 <motion.h2
 variants={textVariant2}
 initial="hidden"
 whileInView="show"
 className='mt-[8px] font-bold md:text-[30px] lg:text-[50px] xl:text-[58px] text-[40px]'
 >
 {title}
 </motion.h2>
);

export const ParaText = ({title}) => (
  <motion.h2
  variants={textVariant2}
  initial="hidden"
  whileInView="show"
  className='mt-[8px] font-normal w-[98px] md:text-[64px] text-[40px] text-white'
  >
  {title}
  </motion.h2>
 );
