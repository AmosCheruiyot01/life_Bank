import React from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <main>
      <nav className="flex justify-around my-7">
        <p  onClick={() => navigate('/donate')} className=" text-2xl font-semibold capitalize border-b-2 pb-2 transition-all duration-400 hover:border-red-400  border-gray-400 ">
          donate blood
        </p>
        <p onClick={() => navigate('/request')} className=" text-2xl font-semibold capitalize  border-b-2 hover:border-red-400  border-gray-400">
          request blood
        </p>
        <select name="appointments" id="" className=" text-2xl font-semibold capitalize  border-b-2 hover:border-red-400  border-gray-400">
          <option value="">appointments</option>
          <option value="">app 2</option>
          <option value="">app 3</option>
        </select>
        <input
          type="text"
          className="focus:outline-none ring rounded ring-gray-400 focus:ring-red-400 transition-all duration-300 
          "
          placeholder={`search for blood group`}
        />
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
          <div className="flex flex-col items-center bg-red-600 rounded p-5 shadow-2xl font-semibold">
            <p className="text-2xl font-semibold">0</p>
            <p>total blood donated</p>
          </div>
          <div className="flex flex-col items-center bg-red-500 rounded p-5 shadow-2xl font-semibold">
            <p className="text-2xl font-semibold">0</p>
            <p>total blood requested</p>
          </div>
          <div className="flex flex-col items-center bg-red-500 rounded p-5 shadow-2xl font-semibold">
            <p className="text-2xl font-semibold">0</p>
            <p>total blood available</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
