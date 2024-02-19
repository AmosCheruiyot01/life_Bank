import React from 'react'
import { useSelector } from 'react-redux';

function Request() {
        const requests = useSelector((store) => store.request.requests.length) || 0;
    return (
        <div className="flex flex-col items-center bg-red-500 rounded p-5 shadow-2xl font-semibold">
        <p className="text-2xl font-semibold">{requests}</p>
        <p>total blood requested</p>
    </div>  )
}

export default Request