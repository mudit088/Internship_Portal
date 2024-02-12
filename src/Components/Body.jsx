import React from 'react'

const Body = () => {
  return (
    <div>
         <div className='flex'>
            <div>
            <img className='p-4 ' src="/image.webp" alt="" />
            </div>
            <div className=' pt-72 pl-96 absolute  hover:scale-105 ' >
            <img className='h-56 pl-96  hover:scale-105' src="public/image2.png" alt="" />
            </div>
            <div className='pt-20 pl-96  hover:scale-105 absolute'>
                <img  className='h-72 pl-36 ml-40 ' src="/image-4.png" alt="" />
            </div>
            <div className='pt-20 pl-96  hover:scale-105 absolute'>
                <img  className='h-96 pl-96 ml-40 ' src="/project-3.png" alt="" />
            </div>
         </div>
    </div>
  )
}

export default Body