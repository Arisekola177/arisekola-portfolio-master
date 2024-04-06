import { FaCode } from "react-icons/fa"

const Experience = () => {
  return (
     <div className="w-full mt-32 font-font1">
    <div id="experience" className="lg:w-8/12 sm:w-10/12 p-4 md:p-0 mx-auto ">    
    <div className="text-center ">
     <p className="text-neutral-200">| Explore my </p>
       <p className="font-semibold mt-5 text-3xl text-neutral-200">Expertise</p>
    </div>
         <div className="grid grid-cols-1  gap-4 mt-10 ">
             <div className="flex flex-col gap-4 bg-gradient-to-t from-sky-500 to-cyan-500   shadow-xl cursor-pointer rounded-lg py-5 px-3 hover:border-b-[4px] border-blue-500 duration-300 hover:scale-95 ">
                  <FaCode className="text-neutral-700 text-3xl" />

                  <h2 className="font-bold text-xl text-neutral-700">Front-End</h2>

                  <p className="text-sm text-neutral-800 leading-8">As a proficient frontend developer skilled in React, Tailwind, and Redux, I design and construct the visual and interactive components of websites and web applications, ensuring they meet high standards of user-friendliness, responsiveness, accessibility, and cross-browser compatibility, all while collaborating
                   effectively with cross-functional teams and remaining updated on the latest advancements and best practices in the field.</p>
             </div>

             <div className="flex flex-col gap-4  bg-gradient-to-t from-sky-500 to-cyan-500   shadow-xl cursor-pointer rounded-lg py-5 px-3 hover:border-b-[4px] border-blue-500 duration-300 hover:scale-95 ">
                  <FaCode className="text-neutral-700 text-3xl" />

                  <h2 className="font-bold text-xl">Back-End</h2>

                  <p className="text-sm leading-8">As a seasoned backend developer adept in Node.js, Express, and MongoDB, I specialize in crafting and maintaining the server-side architecture, database management, and application logic of websites and web applications. With a focus on robustness, scalability, security, and efficiency, I collaborate seamlessly with frontend developers, designers, and stakeholders to deliver solutions that meet diverse user needs. Continuously staying abreast of advancements and best practices in backend development, 
                  I ensure our projects are at the forefront of technological innovation and industry standards.</p>
             </div>
             <div className="flex flex-col gap-4  bg-gradient-to-t from-sky-500 to-cyan-500   shadow-xl cursor-pointer rounded-lg py-5 px-3 hover:border-b-[4px] border-blue-500 duration-300 hover:scale-95  ">
                  <FaCode className="text-neutral-700 text-3xl" />

                  <h2 className="font-bold text-xl">UI & UX Design</h2>

                  <p className="text-sm leading-8">I specialize in creating intuitive, visually appealing, and engaging digital experiences for websites and web applications. Leveraging a deep understanding of user psychology and design principles, I meticulously craft interfaces that prioritize usability, accessibility, and responsiveness across different devices and platforms. Through collaborative efforts with cross-functional teams, I translate user requirements and feedback into innovative design solutions that exceed expectations. Proficient in industry-standard tools and methodologies, I remain dedicated to continuous learning and experimentation, ensuring our projects are at the forefront of UI/UX innovation and best practices.</p>
             </div>
         </div>
    </div>
    </div>
  )
}

export default Experience