

const Experience = () => {
  return (
    <div className="w-10/12 mx-auto mt-32 font-font1">    
    <div className="text-center ">
     <p className="dark:text-neutral-200">| Explore my </p>
       <p className="font-semibold mt-5 text-3xl dark:text-neutral-200">Experience</p>
    </div>
       <div className="mt-10 flex flex-col gap-10 md:flex-row md:justify-between items-center ">
         <div className="w-full h-full md:h-[300px] lg:w-[600px] lg:h-[350px] border-[1px] border-black dark:border-neutral-200 rounded-2xl">
              <h2 className="lg:py-4 py-2 lg:text-2xl text-xl font-bold text-center dark:text-neutral-200">Frontend Development</h2>
              <div className="flex justify-between items-center w-full lg:w-[400px] mx-auto py-4 ">
                <div className="flex flex-col gap-1 lg:gap-2   ">
                   <p className="uppercase font-bold text-lg lg:text-xl px-2 dark:text-neutral-200 ">html</p>
                   <p className="text-gray-300 text-base px-2">Experienced</p>
                </div>
                <div className="flex flex-col gap-1 lg:gap-2 ">
                   <p className="uppercase font-bold text-lg lg:text-xl px-2 dark:text-neutral-200">css</p>
                   <p className="text-gray-300 text-base px-2">Experienced</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full lg:w-[400px] mx-auto py-4  ">
                <div className="flex flex-col gap-1 lg:gap-2 ">
                   <p className="uppercase font-bold text-lg lg:text-xl px-2 dark:text-neutral-200">Javascript</p>
                   <p className="text-gray-300 text-base px-2">Intermediate</p>
                </div>
                <div className="flex flex-col gap-1 lg:gap-2 ">
                   <p className="uppercase font-bold text-lg lg:text-xl px-2 dark:text-neutral-200">Tailwind</p>
                   <p className="text-gray-300 text-base px-2">Experienced</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full lg:w-[400px] mx-auto py-4  ">
                <div className="flex flex-col gap-1 lg:gap-2 ">
                   <p className="uppercase font-bold text-lg lg:text-xl px-2 dark:text-neutral-200">React.js</p>
                   <p className="text-gray-300 text-base px-2">Intermediate</p>
                </div>
                <div className="flex flex-col gap-1 lg:gap-2 ">
                   <p className="uppercase font-bold text-lg lg:text-xl px-2 dark:text-neutral-200">Next.js</p>
                   <p className="text-gray-300 text-base sm:px-2 px-2">Intermediate</p>
                </div>
              </div>
         </div>
         <div className="w-full h-full md:h-[300px] lg:w-[600px] lg:h-[350px] border-[1px] border-black dark:border-neutral-200 rounded-2xl">
              <h2 className="py-4 text-2xl font-bold text-center dark:text-neutral-200">Backend Development</h2>
              <div className="flex justify-between items-center w-full lg:w-[400px] mx-auto py-4">
                <div className="flex flex-col gap-1 lg:gap-2">
                   <p className="uppercase font-bold text-lg lg:text-xl px-2 dark:text-neutral-200">Node.js</p>
                   <p className="text-gray-300 text-base px-2">Basic</p>
                </div>
                <div className="flex flex-col gap-1 lg:gap-2">
                   <p className="uppercase font-bold text-lg lg:text-xl px-2 dark:text-neutral-200">Express</p>
                   <p className="text-gray-300 text-base px-2">Basic</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full lg:w-[400px] mx-auto py-4 ">
                <div className="flex flex-col gap-1 lg:gap-2">
                   <p className="uppercase font-bold text-lg lg:text-xl px-2 dark:text-neutral-200">Mongodb</p>
                   <p className="text-gray-300 text-base px-2">Basic</p>
                </div>
                <div className="flex flex-col gap-1 lg:gap-2">
                   <p className="uppercase font-bold text-lg lg:text-xl px-2 dark:text-neutral-200">Sanity</p>
                   <p className="text-gray-300 text-base px-2">Basic</p>
                </div>
              </div>
              
             
         </div>
       </div>
    </div>
  )
}

export default Experience