

const Contact = () => {
  return (
    <div id="contact" className="w-10/12 mx-auto mt-32 font-font1"  > 
       <div className="text-center ">
         <p className="dark:text-neutral-200">| Get in touch </p>
       <p className="font-semibold mt-5 text-3xl dark:text-neutral-200">Contact</p>
    </div>
          <div className="lg:w-[400px] w-full h-auto mx-auto border-[1px] border-black dark:border-neutral-200 rounded-3xl flex flex-col md:flex-row md:justify-between items-center mt-10">
            <div className="py-4 px-4 dark:text-neutral-200">Shuaibazeez14@gmail.com</div>
            <div className="py-4 px-4 dark:text-neutral-200">+234 8064272889</div>
          </div>  
      <p className="border border-b-[1px] border-gray-600 w-[100%] mt-32"></p>
    </div>
  )
}

export default Contact