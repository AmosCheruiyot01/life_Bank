import React, { useState } from "react";
import Calendar from "react-calendar";

function DonateBlood() {
  const [date, setDate] = useState(new Date());
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    bloodType: "",
    contactNumber: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };


  const onChange = (newDate) => {
    setDate(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log("Donor Information:", donorInfo);
    // Reset the form after submission
    setDonorInfo({
      name: "",
      bloodType: "",
      contactNumber: "",
      email: "",
      address: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-6 text-center text-red-500">
          Donate Blood
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={donorInfo.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Blood Type:
            </label>
            <input
              type="text"
              name="bloodType"
              value={donorInfo.bloodType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter your blood type"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Contact Number:
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={donorInfo.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={donorInfo.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Address:
            </label>
            <textarea
              name="address"
              value={donorInfo.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter your address"
              required
            ></textarea>
          </div>
<div>
<Calendar onChange={onChange} value={date} />
        <p>Selected Date: {date.toDateString()}</p>
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
