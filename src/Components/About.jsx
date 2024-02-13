import React from 'react'

const About = () => {
  return (
    <div className=' '>
        <section className='flex justify-center items-center  rounded-xl pl-10 md:p-10'>
            <div >
                <p className='pt-10 md:text-3xl text-2xl font-semibold text-blue-700 pl-6 flex p-2 md:p-6 md:justify-center md:items-center '>Jump Start Your Growth</p>
                <p className='md:text-6xl text-4xl text-black font-semibold text-pretty flex md:p-2 '>Want to hone your skills and <br /></p>
                <p className='md:text-6xl text-4xl text-black font-semibold text-pretty flex md:justify-center md:items-center md:p-2'>gain experience?</p>
                <p className='text-xl font-semibold text-pretty text-blue-700 flex pt-4 md:pt-8 justify-center items-center'>A platform where you will explore, experiment, learn, participate and
</p>
<p className='text-xl font-semibold text-pretty flex md:p-2 text-blue-700 justify-center items-center'>build a project based on an industry-defined approach.</p>
            </div>
        </section>
        <div className='flex  justify-center items-center'>
                <button className=' px-10 font-semibold py-3 text-xl m-2 rounded-xl border-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:scale-105 duration-300'>Get Started</button>
            </div>
       
    </div>
  )
}

export default About