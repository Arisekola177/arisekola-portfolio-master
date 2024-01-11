'use client'
import { slideIn, staggerContainer, textVariant } from "@/utils/motion"
import { TypingText } from "./CustomTexts"
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: 'false', amount: 0.25}}
    className="w-10/12 md:w-11/12 lg:w-10/12 mt-28 h-full mx-auto "  > 
      <TypingText title="| Contact"  />
           <div className="flex flex-col md:flex-row gap-6  md:justify-between items-center">
             <div className="flex-1 flex flex-col gap-5 md:gap-[20px]">
                 <motion.h1 variants={textVariant(1.1)} className="lg:text-[100px] md:text-[70px] text-[60px] md:leading-[88px] font-semibold text-purple-500" >Let's work <br/><span className="text-red-400">together</span> </motion.h1>
                 <motion.div variants={textVariant(1.2)}  >
                  <span>E-mail:</span>
                  <p>shuaibazeez14@gmail.com</p>
                 </motion.div>
                 <motion.div variants={textVariant(1.3)}>
                  <span>Address:</span>
                  <p>Lagos, Nigeria.</p>
                 </motion.div>
                 <motion.div variants={textVariant(1.4)}>
                  <span>Phone:</span>
                  <p>+234 8064272889</p>
                 </motion.div>
             </div>
             <div className="flex-1 w-full">
              <motion.form
               variants={slideIn('left', 0.2, 1)}
              className="flex flex-col gap-6 mt-8">
                <input className="py-3 px-6 rounded-lg bg-transparent border-[1px] border-white text-white" type="text" required placeholder="Name" />
                <input className="py-3 px-6 rounded-lg bg-transparent border-[1px] border-white text-white" type="email" required placeholder="Email" />
                <textarea className="py-3 px-6 rounded-lg bg-transparent border-[1px] border-white text-white" rows={8} required placeholder="Message" />
                <button className="p-[16px] border-none bg-purple-500 cursor-pointer rounded-lg font-semibold hover:bg-red-400">Submit</button>
              </motion.form>
             </div>
           </div>
           <p className="border border-b-[1px] border-gray-600 w-[100%] mt-32"></p>
    </motion.div>
  )
}

export default Contact