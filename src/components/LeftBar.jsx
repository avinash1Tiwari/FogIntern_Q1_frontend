import React from 'react'
import sideimg from '../assets/side-menu.png'
const LeftBar = () => {
  return (
  <div className='w-20 bg-slate-400 h-full border-r-2 border-white'>

    <div className='pt-52 pl-4 flex flex-col gap-5 '>
        <img className='w-10 hover:bg-white' src={sideimg} alt="" />
        <img className='w-10 hover:bg-white' src={sideimg} alt="" />
        <img className='w-10 hover:bg-white' src={sideimg} alt="" />
        <img className='w-10 hover:bg-white' src={sideimg} alt="" />
        <img className='w-10 hover:bg-white' src={sideimg} alt="" />
    </div>

      
  </div>
  )
}

export default LeftBar














// import React from 'react';
// import sideimg from '../assets/side-menu.png';

// const LeftBar = () => {
//   return (
//     <div className='w-24 bg-slate-700 h-full border-r-2 border-white'>
//       <div className='pt-52 pl-4 flex flex-col gap-5'>
//         <img className='w-12' src={sideimg} alt="" />
//         <img className='w-12' src={sideimg} alt="" />
//         <img className='w-12' src={sideimg} alt="" />
//         <img className='w-12' src={sideimg} alt="" />
//         <img className='w-12' src={sideimg} alt="" />
//       </div>
//     </div>
//   );
// };

// export default LeftBar;
