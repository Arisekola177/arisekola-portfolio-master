'use client'
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {

  const [darkmode, setDarkmode] = useState(false)

  const handleDarkmode = () => {
    setDarkmode(!darkmode)
  } 
  return (
    <div className={`${darkmode && 'dark'}` }>
        <div className="dark:bg-neutral-700 font-Poppins">
       <Navbar handleDarkmode={handleDarkmode} darkmode={darkmode} />
     
        <Hero />
        <About />
        <Experience />
        <Projects/>
        <Contact />
        <Footer />
        </div>
    </div>
     
  )
}
