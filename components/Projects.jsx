import Link from "next/link"


const Projects = () => {
  return (
    <div id="projects" className="w-10/12 mx-auto mt-32 font-font1">    
     <div className="text-center ">
      <p className="dark:text-neutral-200">| Browse my recent </p>
        <p className="font-semibold mt-5 text-3xl dark:text-neutral-200">Projects</p>
     </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center">
           <div className="  rounded-lg shadow-lg flex flex-col gap-3">
              <div className="py-3 px-2">
                <img className="h-[250px] rounded-3xl" src="/project1.jpg" />
              </div>
              <hr/>
              <div className="p-4">
                <h2 className="text-xl font-bold py-3 text-center dark:text-neutral-200">Project 1</h2>
                   <p className="text-xs text-center dark:text-neutral-200 ">An exceptional e-commerce platform with payment functionality has been meticulously developed, 
              employing cutting-edge technologies such as Reactjs, Firebase, Redux-Toolkit, Tailwind CSS, Paystack, and a suite of other innovative tools.</p>
                   <div className="flex justify-center items-center gap-2 mt-4 group ">
                      <div className="bg-transparent border-[1px] border-black rounded-lg  text-black group-hover:bg-neutral-800 group-hover:text-white">
                        <Link href='https://github.com/Arisekola177/gladys-store' target="_blank">
                        <button className="py-2 px-3 text-sm">Github</button>
                        </Link>
                      </div>
                      <div className="bg-black border-[1px]  border-black  rounded-lg  text-white group-hover:bg-white group-hover:text-neutral-800">
                       <Link href='https://gladys-store-123.vercel.app/' target="_blank">
                      <button className="py-2 px-3 text-sm">Live Demo</button>
                      </Link>
                      </div>
                   </div>
              </div>
           </div>
           <div className="  rounded-lg shadow-lg flex flex-col gap-3">
              <div className="py-3 px-2">
                <img className="h-[250px] rounded-3xl" src="/project2.jpg" />
              </div>
              <hr/>
              <div className="p-4">
              <h2 className="text-xl font-bold py-3 text-center dark:text-neutral-200">Project 2</h2>
                   <p className="text-xs text-center dark:text-neutral-200 ">An exceptional hackathon challenge, 
              this React project with a multi-page website aims to showcase innovative features and functionalities while seamlessly 
              integrating user-friendly navigation and engaging content across various pages</p>
                   <div className="flex justify-center items-center gap-2 mt-4 group ">
                      <div className="bg-transparent border-[1px] border-black rounded-lg  text-black group-hover:bg-neutral-800 group-hover:text-white">
                        <Link href='https://github.com/Arisekola177/getlink-app' target="blank">
                        <button className="py-2 px-3 text-sm">Github</button>
                        </Link>
                      </div>
                      <div className="bg-black border-[1px]  border-black  rounded-lg  text-white group-hover:bg-white group-hover:text-neutral-800">
                      <Link href='https://getlink-app.vercel.app/' target="blank">
                      <button className="py-2 px-3 text-sm">Live Demo</button>
                      </Link>
                      </div>
                   </div>
              </div>
           </div>
           <div className=" rounded-lg shadow-lg flex flex-col gap-3">
              <div className="py-3 px-2">
                <img className="h-[250px] rounded-3xl" src="/project3.png" />
              </div>
              <hr/>
              <div className="p-4">
              <h2 className="text-xl font-bold py-3 text-center dark:text-neutral-200">Project 3</h2>
                   <p className="text-xs text-center dark:text-neutral-200">This is a single page Nextjs project which aims to showcase innovative features and functionalities while seamlessly 
                        integrating user-friendly UI. </p>
                   <div className="flex justify-center items-center gap-2 mt-4 group ">
                      <div className="bg-transparent border-[1px] border-black rounded-lg  text-black group-hover:bg-neutral-800 group-hover:text-white">
                        <Link href='https://github.com/Arisekola177/meta' target="blank">
                        <button className="py-2 px-3 text-sm">Github</button>
                        </Link>
                      </div>
                      <div className="bg-black border-[1px]  border-black  rounded-lg  text-white group-hover:bg-white group-hover:text-neutral-800">
                      <Link href='https://meta-henna-three.vercel.app/' target="blank">
                      <button className="py-2 px-3 text-sm">Live Demo</button>
                      </Link>
                      </div>
                   </div>
              </div>
           </div>
         
        </div>
     </div>           
      
  )
}

export default Projects



     
 
    