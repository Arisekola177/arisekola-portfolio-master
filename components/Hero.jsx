
'use client';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
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
          <p className="text-neutral-700 dark:text-neutral-200">| Welcome to my world</p> 
          <p className="dark:text-neutral-200 text-xl"> Hi, I'm Saibu  Arisekola Azeez </p>
          <h2 className=" font-semibold text-neutral-800 dark:text-neutral-200">
           <span>{text}</span>
           <Cursor cursorStyle="|" cursorColor="#ff014f" />
          </h2>
          <div className="flex gap-4 group">
            <div className="bg-transparent border-[1px] border-black rounded-lg  text-black group-hover:bg-neutral-800 group-hover:text-white"> 
              <button className="p-2 lg:py-2 lg:px-3 text-sm" >Download Cv</button>
              </div>
            <div className="bg-black border-[1px]  border-black  rounded-lg  text-white group-hover:bg-white group-hover:text-neutral-800">
            <button className="p-2 lg:py-2 lg:px-3 text-sm">Contact Info</button>
            </div>
           
           
          </div>
           <div className="mt-5 flex flex-col items-start justify-start">
           <h2 className="uppercase text-2xl font-semibold mb-5 dark:text-neutral-200 ">Find me on</h2>
           <div className="flex justify-between items-center gap-4 cursor-pointer dark:text-white " >
               <FaFacebook className="text-xl dark:text-white" />
               <FaLinkedin className="text-xl dark:text-white" />
               <FaInstagram className="text-xl dark:text-white" />
               <FaTwitter className="text-xl dark:text-white"/>
          </div>
           </div>
          </div>
      </div>
     </div>
   
  )
} 

export default Hero;

