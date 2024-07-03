import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../assets/Services';
const Rule = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}rules`);
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

  console.log("data from rules ")
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
                <p className="text-xs font-bold">RULES</p>
                <div className="pt-3 w-56 ml-3 text-sm">
                <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
                <p>TICKETS</p>
                <p>{data.tickets}</p>
                </div>
              
                <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
                <p>VEHICLE SPAWN DELAY</p>
                <p>{data.vehicleDelay}</p>
                
                </div>
                
                <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
                <p>BULLET DAMAGE</p>
                <p>{data.bullet}</p>
                </div>
                
                <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm ">
                <p>KICK AFTER TEAM KILLS</p>
                <p>{data.kickAfterteam}</p>
                </div>
              
               <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
               <p>PLAYER HEALTH</p>
               <p>{data.playerHealth}</p>
               </div>
               <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
               <p>PLAYER RESPAWN TIME</p>
               <p>{data.playerRespawn}</p>
               </div>
               <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
               <p>KICK AFTER IDLE</p>
               <p>{data.kickAfteridle}</p>
               </div>
               <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
               <p>BAN AFTER KICKS</p>
               <p>{data.banAfterkick}</p>
               </div>
              
               </div>
            </div>
  )
}

export default Rule