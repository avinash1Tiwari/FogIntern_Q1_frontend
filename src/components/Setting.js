import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

export const Setting = () => {


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/multiplayer/serverinfo/settings');
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

  console.log("data from settings ")
console.log(data)

if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error.message}</div>;
}

  return (
    <div>
    <p className="text-xs font-bold"> SETTINGS</p>

    <div className="pt-3 w-56 ml-3">
     <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
     <p>REGION</p>
     <p>{data.region}</p>
     </div>
   
     <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
     <p>PUNKBASTER</p>
     <p>{data.punkbaster}</p>
     
     </div>
     
     <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
     <p>FAIRFIGHT</p>
     <p>{data.fairfight}</p>
     </div>
     
     <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
     <p>PASSWORD</p>
     <p>{data.password}</p>
     </div>
   
    <div className="border-b-2 border-white-300 py-1 flex justify-between text-sm">
    <p>PRESET</p>
    <p>{data.preset}</p>
    </div>
   
    </div>
 </div>
  )
}

export default Setting
