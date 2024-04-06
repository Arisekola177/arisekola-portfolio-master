
'use client';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";




const Hero = () => {

  const [text] = useTypewriter({
    words: ["I am a Sotfware engineer", "Frontend Developer", 'Volunteer'],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return(
    
     <div className=" w-full font-font2 mt-10 md:mt-20  ">
      <div className="lg:w-8/12 sm:w-10/12 mx-auto flex gap-4 flex-col md:flex-row md:justify-between items-center">
         
          <div className="flex flex-col gap-3">
          <p className="text-neutral-200 text-2xl ">| Welcome to my world</p> 
          <p className="text-neutral-200 py-2 text-2xl"> Hi, I'm Saibu  Arisekola Azeez </p>
          <h2 className=" font-semibold text-xl text-sky-500  ">
           <span>{text}</span>
           <Cursor cursorStyle="|" cursorColor="#ff014f" />
          </h2>
          <div className="flex gap-4 group">
            <div className=" border-[1px] border-white rounded-lg  text-white bg-gradient-to-t from-sky-500 to-cyan-500 hover:border-black hover:scale-95 duration-300"> 
              <button className="p-2 lg:py-2 lg:px-3 text-sm" ><Link href='https://resume-topaz-beta.vercel.app/' target="blank">View Resume</Link></button>
              </div> 
          </div>
           <div className="mt-5 flex flex-col items-start justify-start">
           <h2 className="uppercase text-2xl font-semibold mb-5 text-neutral-200 ">Find me on</h2>
           <div className="flex justify-between items-center gap-4 cursor-pointer dark:text-white " >
               <Link href='https://www.linkedin.com/in/azeez-saibu-43b554190/' target='blank'>
               <FaLinkedin className="text-xl text-blue-500" />
               </Link>
               <Link href='https://github.com/Arisekola177/' target='blank'>
               <FaGithub className="text-xl " />
               </Link>
              <Link href='https://twitter.com/Harysekola' target='blank'>
               <FaTwitter className="text-xl text-blue-500"/>
               </Link>
          </div>
           </div>
          </div>

          <div className="relative">
          
            <Image
             src='/ola.jpg' 
             alt="photo"
             width={300}
             height={300}
             className="rounded-full sm:w-[300px] lg:w-[400px] relative z-10 "
             />
             
             <div className="hidden lg:block bg-gradient-to-t from-sky-500 to-cyan-500 w-[350px] h-[350px] rounded-full  absolute top-0  left-24 z-0" />
           
          </div>
      </div>
      
     </div>
   
  )
} 

export default Hero;

