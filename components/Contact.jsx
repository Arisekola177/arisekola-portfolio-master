import { FaEnvelope, FaPhone } from "react-icons/fa"

const Contact = () => {
  return (
    <div id="contact" className="w-full mt-32" > 
    <div  className="lg:w-8/12 sm:w-10/12 p-4 md:p-0 mx-auto "  > 
       <div className="text-center ">
         <p className="text-neutral-200">| Get in touch </p>
       <p className="font-semibold mt-5 text-3xl text-neutral-200">Contact</p>
    </div>
          <div className="md:w-[450px] sm:w-full px-4 md:px-0 h-auto mx-auto border-[1px] border-neutral-200 rounded-3xl flex flex-col md:flex-row md:justify-between items-center mt-10">
            <div className="py-4 px-4 flex  gap-2 items-center text-neutral-200">
              <FaEnvelope />
             <p className="sm:text-sm md:text-base">Shuaibazeez14@gmail.com</p> 
              </div>
            <div className="py-4 px-4 flex  gap-2 items-center text-neutral-200">
              <FaPhone />
              <p className="sm:text-sm md:text-base">+234 8064272889</p>
              </div>
          </div>  
      <p className="border border-b-[1px] border-gray-600 w-[100%] mt-32"></p>
    </div>
    </div>
  )
}

export default Contact