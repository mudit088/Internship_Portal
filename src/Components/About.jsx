import React from 'react'

const About = () => {
  return (
    <div className=' '>
        <section className='flex justify-center items-center  rounded-xl p-10'>
            <div >
                <p className='pt-10 text-3xl font-semibold text-blue-700 flex p-6 justify-center items-center '>Jump Start Your Growth</p>
                <p className='text-6xl text-black font-semibold text-pretty'>Want to hone your skills and <br /></p>
                <p className='text-6xl text-black font-semibold text-pretty flex p-2 justify-center items-center'>gain experience?</p>
                <p className='text-xl font-semibold text-pretty text-blue-700 flex  pt-8 justify-center items-center'>A platform where you will explore, experiment, learn, participate and
</p>
<p className='text-xl font-semibold text-pretty flex p-2 text-blue-700 justify-center items-center'>build a project based on an industry-defined approach.</p>
            </div>
        </section>
        <div className='flex  justify-center items-center'>
                <button className=' px-10 font-semibold py-3 text-xl rounded-xl border-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:scale-105 duration-300'>Get Started</button>
            </div>
       
    </div>
  )
}

export default About