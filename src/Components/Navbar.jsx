import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
// import { TypeAnimation } from 'react-type-animation';

const Navbar = () => {
     const [Nav, setNav] = useState(false);
  const links = [
    { id: 1, link: 'About' },
    { id: 2, link: 'Internships' },
    { id: 3, link: 'Perks' },
    { id: 4, link: 'Courses' },
    { id: 5, link: 'Jobs' },
  ];
  return (

    <div className=''>
    <div className='flex row justify-between'>
    <div className='ml-36'>
        <img src="/vikasa logo 2-bg.png" alt="Logo" className="h-28 hover:scale-105 duration-300 " />
    </div>
    <div className='flex justify-end items-center mr-36 mb-2'>
        <button className='px-10 font-semibold py-3 text-xl mt-6 rounded-xl border-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:scale-105 duration-300'>Apply</button>
    </div>
</div>


    <div className='flex justify-center items-center'>

    <ul className="flex   items-center">
      {links.map(({ id, link }) => (
        <li key={id} className="px-8 cursor-pointer pb-3 font-semibold capitalize text-2xl text-gray-800 hover:scale-105 duration-200">
          <Link to={link} smooth duration={500}>
            {link}
          </Link>
        </li>
      ))}
    </ul>
    </div>
    

<div onClick={() => setNav(!Nav)} className="cursor-pointer  ml-56 m-4 mt-10 z-10 text-gray-500 md:hidden">
{Nav ? <FaTimes size={50} /> : <FaBars size={50} />}
</div>

{Nav && (
<ul className="flex flex-col duration-300 justify-center  items-center scroll-m-0 top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
  {links.map(({ id, link }) => (
    <li key={id} className="px-4 cursor-pointer duration-500 capitalize py-6 text-2xl">
      <Link onClick={() => setNav(!Nav)} to={link} smooth duration={500}>
        {link}
      </Link>
    </li>
  ))}
</ul>
)}
</div>

   
  )
}

export default Navbar