
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
    
     <div className=" w-full lg:w-10/12 mx-auto font-font2 mt-20 dark:bg-neutral-700 ">
      <div className="sm:w-7/12 md:w-10/12 xl:w-7/12 mx-auto flex gap-4 flex-col md:flex-row md:justify-between items-center">
          <div className="sm:w-[200px] md:w-[400px]">
            <Image
             src='/ola.jpg' 
             alt="photo"
             width={300}
             height={300}
             className="rounded-full md:w-[400px]"
             />
          </div>
          <div className="flex flex-col gap-3">
          <p className="text-neutral-700 dark:text-neutral-200 ">| Welcome to my world</p> 
          <p className="dark:text-neutral-200 text-xl"> Hi, I'm Saibu  Arisekola Azeez </p>
          <h2 className=" font-semibold text-neutral-800 dark:text-neutral-200">
           <span>{text}</span>
           <Cursor cursorStyle="|" cursorColor="#ff014f" />
          </h2>
          <div className="flex gap-4 group">
            <div className="bg-transparent border-[1px] border-black rounded-lg  text-black group-hover:bg-neutral-800 group-hover:text-white"> 
              <button className="p-2 lg:py-2 lg:px-3 text-sm" ><Link href='https://resume-topaz-beta.vercel.app/' target="blank">View Resume</Link></button>
              </div> 
          </div>
           <div className="mt-5 flex flex-col items-start justify-start">
           <h2 className="uppercase text-2xl font-semibold mb-5 dark:text-neutral-200 ">Find me on</h2>
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
      </div>
     </div>
   
  )
} 

export default Hero;

