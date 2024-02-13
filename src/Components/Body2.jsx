import React from 'react'

const Body2 = () => {
  return (
    <div>
    <section className='flex flex-col-reverse md:flex-row justify-between items-center md:mt-20 mb-20'>
        <div className='md:pl-72 mb-36'>
            <p className='pt-20 text-3xl font-semibold text-blue-700 flex p-6 '>
                Get industry ready
            </p>
            <p className='p-3 text-5xl font-semibold'>Projects across multiple <br /> technologies with <br /> experience letter</p>
            <p className='p-2 font-semibold text-lg'>More than 500+ real-time industry projects across all major domains. <br /> Get a real experience letter post project completion.</p>
        </div>
        <div className='md:pr-72 mt-8'>
            <section className='bg-gray-500 rounded-2xl'>
                <div className='p-4 md:p-10'>
                    <div className='mb-4 md:mb-0'>
                        <video autoPlay loop muted className="w-full md:h-72 rounded-xl">
                            <source src="/ProjectBoard.mov" type="video/mp4" />
                        </video>
                    </div>
                    <div className='text-center md:text-left'>
                        <p className='font-semibold text-2xl pt-2 md:flex md:justify-center md:items-center'>Keep Track Of Your Project</p>
                        <p className='font-semibold text-lg md:flex md:justify-center md:items-center'>Stay on top of your development </p>
                        <p className='font-semibold text-lg md:flex md:justify-center md:items-center'>with KANBAN methodology</p>
                    </div>
                </div>
            </section>
        </div>
    </section>
</div>

)
}

export default Body2