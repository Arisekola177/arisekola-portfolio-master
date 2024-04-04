import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-10/12 md:w-11/12 lg:w-10/12 mx-auto mt-10 mb-4 flex py-3 gap-6 flex-col md:flex-row justify-between items-center">
          <div>
          <Link href='/'>
          <h4 className="font-semibold text-[20px] dark:text-neutral-200 ">ARISEKOLA</h4>
          </Link>
          </div>
          <div>
          <p className="font-normal text-[14px]  opacity-50 dark:text-neutral-200">Copyright © 2024. All rights reserved.</p>
          </div>
            <div>
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
    </section>
  )
}

export default Footer