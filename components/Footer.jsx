'use client'
import Link from "next/link";
import { socials } from "@/constants";

const Footer = () => {
  return (
    <section className="w-10/12 md:w-11/12 lg:w-10/12 mx-auto mt-10 mb-4 flex py-3 gap-6 flex-col md:flex-row justify-between items-center">
          <div>
          <h4 className="font-extrabold text-[24px] text-white">ARISEKOLA</h4>
          </div>
          <div>
          <p className="font-normal text-[14px] text-white opacity-50">Copyright © 2024. All rights reserved.</p>
          </div>
            <div>
            <div className="flex justify-between items-center gap-4" >
                {socials.map((social) => (
                <div key={social.name } >
                     <img src={social.url} alt={social.name} />
                   </div>
                ))}
               </div>
            </div>
    </section>
  )
}

export default Footer