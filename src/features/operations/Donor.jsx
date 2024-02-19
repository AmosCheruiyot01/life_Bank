import React from 'react'
import { useSelector } from 'react-redux'


function Donor() {
    const donations = useSelector((state) => state.donor.donations).length || 0;
  return (
    <div className="flex flex-col items-center bg-red-600 rounded p-5 shadow-2xl font-semibold">
    <p className="text-2xl font-semibold">{donations}</p>
    <p>total blood donated</p>
  </div>  )
}

export default Donor