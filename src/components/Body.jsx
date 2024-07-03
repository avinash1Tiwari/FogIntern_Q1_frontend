
import backImg from "../assets/back.png";
import Rule from "./Rule";
import Advanced from "./Advanced";
import Setting from "./Setting";
import '../componentStyle/Body.css'
import Cards from "./Cards";

const Body = () => {


  return (
    <div className="bg-slate-700 pr-10 pl-10 w-3/4">
      <div className="flex gap-4 mt-10 ">
        <div>
          <img className="h-8" src={backImg} alt="" />
        </div>

        <div className="mt-1  text-white font-bold">
          {" "}
          MULTIPLAYER / SERVERBROWSER /
        </div>
      </div>

      <div>
        <p className="mt-5 text-4xl text-white font-bold">SERVER INFO</p>
      </div>

      <div className=" max-w-[86rem]  ">
        <div className="mt-20 max-h-[32rem] overflow-y-scroll custom-scrollbar ">
         <div className="pr-28">
         <div>
            <p className=" text-3xl text-white ">! RC3-BASEMAPS</p>
          </div>

        
            <p className="text-white mt-4 text-sm">CONQUEST - LANCANG DAM - CUSTOM - 60HZ</p>
            <p className="text-white  mt-4  text-sm w-[52rem]">Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d</p>
            <div className="flex  gap-5 mt-5 text-xs font-bold">
                <button className="px-12 py-1 text-white border border-1 border-white">JOIN</button>
                <button className="px-12 py-1 text-white border border-1 border-white">SPECTATE</button>
                <button className="px-12 py-1 text-white border border-1 border-white">JOIN AS A COMMANDER</button>
                <button className="px-10 py-1 text-white border border-1 border-white">13672</button>

          </div>


        <div className="flex gap-20 text-white font-bold mt-3">
            <div className="flex flex-col">
            <p className="text-xs">PLAYERS</p>
            <p className="text-xl">60/64</p>
            </div>
            <div className="flex flex-col">
            <p className="text-xs">PING</p><p className="text-xl">104</p>
            </div>
            <div className="flex flex-col">
            <p className="text-xs">TICKETS</p><p className="text-xl">60</p>
            </div>
        </div>



        <div className="flex gap-3 pt-5 text-white">

         
            <Setting></Setting>
            <Advanced></Advanced>

            <Rule></Rule>
            {/* <Cards></Cards> */}

        </div>
         </div>
       
        



          <div className="mt-5 ">

            <div>
            <Cards/>
            </div>
          
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
