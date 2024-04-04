

const About = () => {
 
  return (
     <div id="about" className="w-10/12 mx-auto mt-32 font-font1">
          
          <div className="text-center ">
            <p className="dark:text-neutral-200">| What i do? </p>
              <p className="font-semibold mt-5 text-3xl dark:text-neutral-200">About Me</p>
          </div>
           <div className="mt-10 flex justify-between gap-10 items-center">
             <div className="hidden lg:block" >
              <img className="rounded-lg" src='/ola.jpg' />
             </div>
             <div className="flex-1">
            
                <p className="text-center md:text-start mt-5 text-sm leading-8 dark:text-neutral-200"> I thrive on the dynamic nature of web development, constantly seeking new challenges and embracing emerging technologies to elevate user experiences. My expertise lies in translating design concepts into seamless, responsive layouts, utilizing HTML, CSS, and JavaScript to bring ideas to life with precision and finesse.

Beyond coding, I am deeply invested in user-centered design principles, meticulously refining interfaces to ensure accessibility and usability for diverse audiences. In addition to my technical skills, I bring a collaborative spirit and a knack for effective communication to every project. I excel in cross-functional teams, valuing diverse perspectives and leveraging collective expertise to deliver exceptional results. Whether brainstorming ideas, troubleshooting issues, or iterating on feedback, I approach every interaction with enthusiasm and a commitment to excellence.

Driven by a passion for continuous learning and growth, I am dedicated to honing my craft and staying ahead of the curve in an ever-evolving field. I am eager to contribute my skills and creativity to projects that inspire and challenge me, forging meaningful connections and leaving a lasting impact on the digital landscape. </p>
             
             </div>
          </div>
     </div>
  )
}

export default About


          
