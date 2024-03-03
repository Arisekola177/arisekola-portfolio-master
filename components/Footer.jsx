import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-10/12 md:w-11/12 lg:w-10/12 mx-auto mt-10 mb-4 flex py-3 gap-6 flex-col md:flex-row justify-between items-center">
          <div>
          <h4 className="font-extrabold text-[24px] dark:text-neutral-200 ">ARISEKOLA</h4>
          </div>
          <div>
          <p className="font-normal text-[14px]  opacity-50 dark:text-neutral-200">Copyright © 2024. All rights reserved.</p>
          </div>
            <div>
            <div className="flex justify-between items-center gap-4" >
              <FaFacebook className="text-xl dark:text-white" />
               <FaLinkedin className="text-xl dark:text-white" />
               <FaInstagram className="text-xl dark:text-white" />
               <FaTwitter className="text-xl dark:text-white"/> 
             
               </div>
            </div>
    </section>
  )
}

export default Footer