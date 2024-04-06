import React from 'react'

const Skills = () => {
  return (
    <div className='w-full mt-32'>
        <div className='lg:w-8/12 sm:w-10/12 p-4 md:p-0 mx-auto '>
        <div className="text-center ">
        <p className="text-neutral-200">| Explore my </p>
       <p className="font-semibold mt-5 text-3xl text-neutral-200">Skills</p>
       </div>
       <div className='mt-16 '> 
           <div>
            <h3 className='text-gray-200 text-lg'>HTML</h3>
          <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-lg' /> 
          </div>
          <div className='mt-6'>
            <h3 className='text-gray-200 text-lg'>CSS & Tailwind</h3>
          <span className='w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-lg' /> 
          </div>
          <div className='mt-6'>
            <h3 className='text-gray-200 text-lg'>JavaScript</h3>
          <span className='w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-lg' /> 
          </div>
          <div className='mt-6'>
            <h3 className='text-gray-200 text-lg'>Reactjs & Nextjs</h3>
          <span className='w-[60%] mt-2 h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-lg' /> 
          </div>
          <div className='mt-6'>
      
            <h3 className='text-gray-200 text-lg'>Ui design in Figma</h3>
          <span className='w-[70%] mt-2 h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-lg' />
          </div>
         </div>
        </div> 
    </div>
  )
}

export default Skills