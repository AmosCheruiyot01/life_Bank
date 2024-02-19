import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { bloodStore } from "../DB";
import {useForm} from "react-hook-form";
import Donor from "../features/operations/Donor";
import Request from "../features/operations/request";
import Search, { bloodSearch } from "./Search";

function Dashboard() {

;
  const navigate = useNavigate();
  const[available, setAvailable] = useState();

  function submit(data){
    if (!data) return;
    console.log(data);
    const available = bloodSearch(data.search.toUpperCase()).
    map((blood) => blood.units).reduce((acc, unit) => acc + unit, 0);
    setAvailable(available);
      }

  const total = 
  bloodStore.reduce((acc, blood) => acc + parseInt(blood.units), 0);

  return (
    <main>
      <nav className="flex justify-around my-7">
        <p  onClick={() => navigate('/donate')} className=" text-2xl font-semibold capitalize border-b-2 pb-2 transition-all duration-400 hover:border-red-400  border-gray-400 ">
          donate blood
        </p>
        <p onClick={() => navigate('/request')} className=" text-2xl font-semibold capitalize  border-b-2 hover:border-red-400  border-gray-400">
          request blood
        </p>
        <p onClick={() => navigate('/appointments')} className=" text-2xl font-semibold capitalize  border-b-2 hover:border-red-400  border-gray-400">
          Appointments
        </p>
        <div className="flex flex-col my-1">
        <Search submit={submit}/>

{available && <p><b>{available}</b> units available</p>}
        </div>
      </nav>

      <img src="./bg1.jpg" alt="bg-image" className="bg-no-repeat object-cover h-[80%] w-screen absolute mix-blend-overlay"/>
<p className=" text-red-400 shadow-3xl font-semibold tracking-wider text-3xl p-10  text-center bg-slate-300">
In every drop of donated blood, there beats a <br />
 compassionate heart, extending the hand of <br />
 humanity to those in need. Give the gift <br />
 that truly keeps on giving – the gift of life.
</p>
      <div>
        <div className="flex justify-around mt-[8rem]">
         <Donor/>

         <Request/>
         
          <div className="flex flex-col items-center bg-red-500 rounded p-5 shadow-2xl font-semibold">
            <p className="text-2xl font-semibold">{total}</p>
            <p>total blood available</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
