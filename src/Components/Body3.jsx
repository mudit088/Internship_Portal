import React from 'react'

const Body3 = () => {
  return (
    <div className=''>
    <div className='text-center  md:pb-10'>
        <h1 className='text-4xl md:text-5xl'>What will you get?</h1>

        <div className='flex flex-col md:flex-row justify-center items-center'>

            <button className='border-1 cursor-default hover:scale-105 duration-300 m-2 md:m-10'>
                <div className='flex justify-center items-center'>
                    <img src="/image.svg" alt="" className='h-24 md:h-32' />
                </div>
                <p className='font-semibold text-lg p-2'>FREE REAL TIME PROJECT IDEA</p>
                <p className='font-semibold text-md'>Follow development cycles the same way <br /> it's done in real life</p>
            </button>

            <button className='border-1 cursor-default hover:scale-105 duration-300 m-2 md:m-10'>
                <div className='flex justify-center items-center'>
                    <img src="/image (1).svg" alt="" className='h-20 md:h-32' />
                </div>
                <p className='font-semibold text-lg p-2'>TEAM BUILDING</p>
                <p className='font-semibold text-md'>Collaborate and build projects along with <br /> your peers</p>
            </button>

            <button className='border-1 cursor-default hover:scale-105 duration-300 m-2 md:m-10'>
                <div className='flex justify-center items-center'>
                    <img src="/image (2).svg" alt="" className='h-14 md:h-24' />
                </div>
                <p className='font-semibold text-lg p-2'>CONNECTION WITH OUR TEAM</p>
                <p className='font-semibold text-md'>Our team will review your projects to ensure you are <br /> on the right track</p>
            </button>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center'>

            <button className='border-1 cursor-default hover:scale-105 duration-300 m-2 md:m-10'>
                <div className='flex justify-center items-center'>
                    <img src="/image (3).svg" alt="" className='h-13 md:h-24' />
                </div>
                <p className='font-semibold text-lg p-2'>OFFER LETTER</p>
                <p className='font-semibold text-md'>Start your first project to generate your <br /> offer letter</p>
            </button>

            <button className='border-1 cursor-default hover:scale-105 duration-300 m-2 md:m-10'>
                <div className='flex justify-center items-center'>
                    <img src="/image (4).svg" alt="" className='h-14 md:h-24' />
                </div>
                <p className='font-semibold text-lg p-2'>EXPERIENCE LETTER</p>
                <p className='font-semibold text-md'>Earn your experience letter post  successful <br /> project completion.</p>
            </button>
        </div>
    </div>
</div>

  )
}

export default Body3