
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";


export default function Home() {

  return (
  
        <div className="bg-primary-black font-Poppins">
       <Navbar  />
        <Hero />
       
        <About />
        
        <Experience />
     
        <Skills />
        
        <Projects/>
       
        <Contact />
     
        <Footer />
        </div>
       
       
 
     
  )
}
