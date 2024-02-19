import React, { useState } from "react";
import Calendar from "react-calendar";
import {useForm} from "react-hook-form";
import { useDispatch } from "react-redux";
import { addDonor } from "../features/operations/donationSlice";
import { useNavigate } from "react-router-dom";

function DonateBlood() {
  const  dispatch = useDispatch();
const navigate = useNavigate();

const {register, handleSubmit, reset} = useForm();

  const submit = (data) => {
    console.log(data);
    dispatch(addDonor(data));
    reset()
navigate("/appointments")
    ;};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-6 text-center text-red-500">
          Donate Blood
        </h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Name:
            </label>
            <input
              type="text"
              id="donor"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter your name"
              {...register("donor")}
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
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter your blood type"
              required
              {...register("bloodType")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Contact Number:
            </label>
            <input
              type="number"
              id="contactNumber"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your contact number"
              required
              {...register("contactNumber")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              location:
            </label>
            <input
              type="text"
              id="location"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter your location"
              required
              {...register("location")}
            />
          </div>
         

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Date:
            </label>
            <input
              type="date"
              id="appointmentDate"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter your location"
              required
              {...register("appointmentDate")}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-300 text-white font-semibold py-2 rounded-md hover:bg-green-300 transition-all duration-300 focus:outline-none focus:bg-red-600"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default DonateBlood;
