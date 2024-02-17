import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { useSelector } from "react-redux";

function TopNav() {
  const user = useSelector((state) => state.user.userName)


  // function handleLogOut() {
  // }
  
  return (
    <div className="flex justify-around bg-red-400 rounded">
      <h1 className="capitalize font-bold text-4xl">Blood center</h1>

      <div className="flex flex-raw">
        <div  className="self-center">
          <FaPhoneVolume />
        </div>
        <div><p>07455456865</p> 
        <p>info@bloodcenter.ac.ke</p></div>
      </div>

      
        <div className="flex flex-raw">
          <FaRegClock />
          10:00 am - 4:00 pm  
        </div>

        <p>welcome, {user}</p>

        <button >logOut</button>

    </div>
  );
}

export default TopNav;
