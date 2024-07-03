import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import cardimg from '../assets/cardImg.png'
// import cardimg from "../assets/back.png";
const Cards = () => {


    
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/multiplayer/serverinfo/cards');
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


        <div className='grid grid-cols-4 gap-3 mr-3 w-100%'>
            {
                data.map(card => (
                    <div  key={card.id} className='bg-slate-400 hover:-translate-y-1 transition duration-150 ease-in-out'>
                        <img src={cardimg} className='h-20 w-[18rem]' alt="" />
                        <div className='bg-gray-800 text-sm text-white font-semibold p-2 hover:bg-white hover:text-black'>
                          <p>{card.header}</p>
                          <p>{card.desc}</p>
                          </div>
                       
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards