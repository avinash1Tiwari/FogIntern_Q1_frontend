import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { BASE_URL } from '../assets/Services'
const Advanced = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}multiplayer/serverinfo/advanced`);
          setData(response.data.data);
          console.log(response.data)
        } catch (error) {
          console.log("error")
          console.log(error)
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

    console.log("data from advanced ")
console.log(data)
// console.log(data.minimap)


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }




  return (
    <div >
    <p className="text-xs font-bold">ADVANCED</p>
    <div className="pt-3 w-56 ml-3">
    <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
    <p>MINIMAP</p>
    <p>{data.minimap}</p>
    </div>
  
    <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
    <p>ONLY SQUAD LEADER SPAWN</p>
    <p>{data.sqaudLeader}</p>
    
    </div>
    
    <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
    <p>VEHICLES</p>
    <p>{data.vehicles}</p>
    </div>
    
    <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
    <p>TEAM BALANCE</p>
    <p>{data.teamBalance}</p>
    </div>
  
   <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
   <p>MINIMAP SPOTTING</p>
   <p>{data.spotting}</p>
   </div>
   <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
   <p>HUD</p>
   <p>{data.hud}</p>
   </div>
   <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
   <p>3P VEHICLE CAM</p>
   <p>{data.pvehicleCam}</p>
   </div>
   <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
   <p>REGENERATIVE HEALTH</p>
   <p>{data.regenearativeHealth}</p>
   </div>
   <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
   <p>KILL CAM</p>
   <p>{data.killCam}</p>
   </div>
   <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
   <p>FRIENDLY FIRE</p>
   <p>{data.friendFire}</p>
   </div>
   <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
   <p>3D SPOTTING</p>
   <p>{data.spotting}</p>
   </div>
   <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
   <p>ENEMY NAME TAGS</p>
   <p>{data.enemyName}</p>
   </div>
   </div>
</div>
  )
}

export default Advanced