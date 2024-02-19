import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addRequest } from '../features/operations/requestSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

  function RequestBlood() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
  
    const {register, handleSubmit, reset} = useForm();

  
    const submit = (data) => {
      console.log(data);
      dispatch((addRequest(data)));
      reset()
      navigate("/appointments")
    }
 
   
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-3xl font-semibold mb-6 text-center text-red-500">Blood Request Form</h2>
          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Patient Name:
              </label>
              <input
                type="text"
                id="recipient"
                {...register("recipient")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                placeholder="Enter patient's name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Blood Type:
              </label>
              <input
                type="text"
                id="bloodType"
                {...register("bloodType")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                placeholder="Enter required blood type"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Units Required:
              </label>
              <input
                type="number"
                id="unitsRequired"
                {...register("unitsRequired")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                placeholder="Enter number of units required"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Contact Number:
              </label>
              <input
                type="tel"
                id="contactNumber"
                {...register("contactNumber")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                placeholder="Enter contact number"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Hospital Name:
              </label>
              <input
                type="text"
                id="hospitalName"
                {...register("hospitalName")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                placeholder="Enter hospital name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Additional Information:
              </label>
              <textarea
                id="additionalInfo"
                {...register("additionalInfo")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                placeholder="Enter any additional information"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  


export default RequestBlood