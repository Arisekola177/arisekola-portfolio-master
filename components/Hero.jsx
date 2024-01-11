
'use client';
import { slideIn,staggerContainer,textVariant } from "../utils/motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { TitleText, TypingText } from "./CustomTexts";
import { socials } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const [text] = useTypewriter({
            words: ["I am a Sotfware engineer", "Frontend Developer", "Influencer", "Content Creator", 'Volunteer'],
            loop: true,
            typeSpeed: 30,
            deleteSpeed: 20,
            delaySpeed: 2000,
         });

  return(
   <section className="w-10/12 md:w-11/12 xl:w-10/12 mx-auto">
   <motion.div 
     variants={staggerContainer}
     initial='hidden'
     whileInView='show'
     viewport={{once: false, amount: 0.25}}
    className= "flex flex-col md:flex-row justify-between items-center mt-10 lg:mt-20"
 >
    
    <motion.div variants={textVariant(1.1)}>
    <TypingText  title=" | Welcome to my world"/> 
     <TitleText  title={<>Hi, I'm  <span className="text-purple-400 ">Saibu <br/> Arisekola Azeez</span></>} />
       <h2 className="lg:text-4xl md:text-2xl text-3xl font-bold text-red-400">
           <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
            <p className="mt-5 max-w-md text-sm leading-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, vitae iure. 
             Sunt esse consectetur mollitia cupiditate doloremque, quae culpa quos id dolorem error recusandae magnam, 
             optio ipsam incidunt corporis temporibus!</p>
             
           <motion.div
             variants={textVariant(1.5)}
             className="mt-10 flex flex-col items-start justify-start"
              >
            <h2 className="uppercase text-2xl font-semibold mb-5 ">Find me on</h2>
            <motion.div   
             variants={textVariant(1.8)}
             className="flex justify-between items-center gap-4"
            >
                 
                {socials.map((social) => (
                <div key={social.name } >
                     <img src={social.url} alt={social.name} />
                  </div>
                ))}
              
             </motion.div>
        </motion.div>
    </motion.div>

      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="mt-10 md:mt-0"
     >
     <img src='/ola.jpg' 
     alt="portfolio"
     className="rounded-full w-[500px] h-[300] md:w-[400px] xl:w-[500px] "
     />
     </motion.div>

    </motion.div>
  
  
    
  </section>
  )
} 



export default Hero;
