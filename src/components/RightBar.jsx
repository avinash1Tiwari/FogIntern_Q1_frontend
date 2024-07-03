
import sideImg from '../assets/side-menu.png'
import React, { useState } from 'react';
import '../componentStyle/RightBar3.css';
import { BiRadioCircleMarked,BiRadioCircle } from "react-icons/bi";
import crowd from '../assets/crowd.png'
// import { BiRadioCircle } from "react-icons/bi";

const Rightbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnterZone = () => {
    setIsOpen(true);
  };

  const handleMouseLeaveSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Hover Zone */}
      <div 
        className="hover-zone" 
        onMouseEnter={handleMouseEnterZone}
      ></div>

      {/* Sidebar */}
      <div 
        className={`sidebar ${isOpen ? 'open' : ''}`} 
        onMouseLeave={handleMouseLeaveSidebar}
      >
        <div className="sidebar-content text-white divide-y divide-blue-200  ">
          {/* <hr className='bg-red-400' /> */}
          <section className='py-3'>
          <div className='flex gap-2 '>
            <img src={crowd} className='w-4' alt="" />
           { isOpen && <h2>Suad</h2>}
            </div>
            <div   className='flex gap-3'>
            <img src={sideImg} alt="" />
            <div className='flex flex-col text-xs mt-3 py-1 px-2 w-full hover:bg-white hover:text-black' >
            <p>Suad Join</p>
            
            </div>
            </div>
          </section>
          {/* <hr /> */}
          <section className='py-3'>
            <div className='flex gap-2 '>
            <BiRadioCircleMarked />
           { isOpen && <h2>Online</h2>}
            </div>
            <div   className='flex gap-3'>
            <img src={sideImg} alt="" />
            <div className='flex flex-col text-xs mt-3 py-1 px-2 w-full hover:bg-white'>
            <p className='hover:text-black'>MarryJone</p>
            <p className='text-slate-400'>Online</p>
            </div>
            </div>
          </section>
          {/* <hr /> */}
          <section className='py-3'>
          <div className='flex gap-2 '>
            <BiRadioCircle />
           { isOpen && <h2>Offline</h2>}
            </div>
            <div   className='flex gap-3'>
            <img src={sideImg} className='w-10' alt="" />
            <div className='flex flex-col w-full py-1 px-2 text-xs mt-3 text-slate-400 hover:bg-white'>
            <p className='hover:text-black'>420</p>
            <p>Offline</p>
            </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Rightbar;

