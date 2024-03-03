

const About = () => {
 
  return (
     <div className="w-10/12 mx-auto mt-32 font-font1">
          
          <div className="text-center ">
            <p className="dark:text-neutral-200">| What i do? </p>
              <p className="font-semibold mt-5 text-3xl dark:text-neutral-200">About Me</p>
          </div>
           <div className="mt-10 flex justify-between gap-10 items-center">
             <div className="hidden lg:block" >
              <img className="rounded-lg" src='/ola.jpg' />
             </div>
             <div className="flex-1">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full h-full lg:w-[400px] lg:h-[150px] border-[1px] border-black dark:border-neutral-200 rounded-lg flex flex-col text-center gap-4 py-3 px-4">
                     <p className="text-2xl font-bold dark:text-neutral-200">Experience</p>
                     <p className="text-lg text-gray-400">3+ Years</p>
                     <p className="font-semibold text-xl dark:text-neutral-200">Frontend Developement</p>
                  </div>
                  <div  className="w-full h-full lg:w-[400px] lg:h-[150px] border-[1px] border-black dark:border-neutral-200 rounded-lg flex flex-col text-center gap-4 py-3 px-4">
                    <p className="text-2xl font-bold dark:text-neutral-200">Education</p>
                     <p className="text-lg text-gray-400 ">B.sc Accounting</p>
                     <p className="font-semibold text-xl dark:text-neutral-200">University of Lagos</p>
                  </div>
                </div>
                <p className="text-center md:text-start mt-5 text-sm leading-6 dark:text-neutral-200"> A passionate and creative Frontend Developer with a love for crafting clean and user-friendly interfaces.
               My journey into the world of web development started with a fascination for transforming ideas into interactive 
               and visually appealing websites. I believe in the power of collaboration and am always eager to work with like-minded individuals who share a passion for 
               pushing the boundaries of what's possible on the web. </p>
               <p className="mt-3 sm:text-center md:text-start text-xl font-bold dark:text-neutral-200">Let's build something extraordinary together!</p>
             </div>
          </div>
     </div>
  )
}

export default About


          
