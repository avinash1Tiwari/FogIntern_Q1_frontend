// // src/App.js
// import React from 'react';
// import './App.css';
// import Body from './components/Body';
// import LeftBar from './components/LeftBar';

// import RightBar from './components/RightBar';

// function App() {
//   return (
//     <div className="App bg-slate-700 h-screen ">
//       {/* <RightBar/> */}
     
//        <div className='flex flex-row'>
//         {/* Your main content here */}
//         {/* <h1>Main Content</h1>
//         <p>This is the main content area.</p> */}

//         <LeftBar/>
//         <Body></Body>
//       </div>
//     </div>
//   );
// }

// export default App;
// //  className="content"












import React from 'react';
import './App.css';
import Body from './components/Body';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import Cards from './components/Cards';
function App() {
  return (
    <div className="App bg-slate-700 h-screen overflow-hidden">
      <div className='flex flex-row h-full'>
        <LeftBar />
        <Body />
        <RightBar />
        
      </div>
    </div>
  );
}

export default App;
