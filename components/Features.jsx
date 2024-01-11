'use client'
import { staggerContainer, textVariant, textVariant2 } from "@/utils/motion"
import { TypingText } from "./CustomTexts"
import Card from "./Card"
import { cards } from "@/constants"
import Image from "next/image"
import {motion} from "framer-motion"
import { useState } from "react"

const variants = {
  initial:{
    y:500,
    opacity: 0
  },
  animate: {
    y:0,
    opacity: 1,
    transition:{
      duration: 0.5,
      staggerChildren: 0.1,
    }
  }
}

const Features = () => {
  const [active, setActive] = useState('world-2')
  return (
    <section className="w-10/12 md:w-11/12 lg:w-10/12 h-full mx-auto mt-20" variants={variants}>
      
    <motion.div 
     variants={staggerContainer}
     initial='hidden'
     whileInView='show'
     viewport={{once: false, amount: 0.25}}
     >

      <TypingText title="| What i do?"  />
        <motion.div 
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.25}}
        className="mt-10 w-full md:w-[1000px] md:mx-auto">
          <motion.h2 variants={textVariant(1.1)}  className="md:text-8xl mt-2 text-6xl font-bold text-purple-500">Unique <span className="font-extralight text-gray-300">Ideas</span></motion.h2>
          <motion.h2 variants={textVariant(1.2)} className="text-start mt-3 lg:mt-10 lg:text-8xl md:text-7xl text-6xl text-white font-semibold">For Your <span className="font-extralight text-red-400">Business</span></motion.h2>
        </motion.div>
          <div className="flex lg:flex-row flex-col mt-[50px] min-h-[70vh] gap-5">
            {
              cards.map((card, index) => (
                <Card 
                key={card.id}
                {...card}
                index={index}
                active={active}
                handleClick={setActive}
                />
              ))
            }
          </div>
        </motion.div>
    </section>
  )
}

export default Features




