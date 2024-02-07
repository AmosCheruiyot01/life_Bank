import React from 'react'
import { useState } from 'react';

  function RequestBlood() {
    const [requestInfo, setRequestInfo] = useState({
      patientName: '',
      bloodType: '',
      unitsRequired: '',
      contactNumber: '',
      hospitalName: '',
      additionalInfo: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setRequestInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your logic here to handle the form submission
      console.log('Request Information:', requestInfo);
      // Reset the form after submission
      setRequestInfo({
        patientName: '',
        bloodType: '',
        unitsRequired: '',
        contactNumber: '',
        hospitalName: '',
        additionalInfo: '',
      });
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-3xl font-semibold mb-6 text-center text-red-500">Blood Request Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Patient Name:
              </label>
              <input
                type="text"
                name="patientName"
                value={requestInfo.patientName}
                onChange={handleChange}
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
                name="bloodType"
                value={requestInfo.bloodType}
                onChange={handleChange}
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
                name="unitsRequired"
                value={requestInfo.unitsRequired}
                onChange={handleChange}
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
                name="contactNumber"
                value={requestInfo.contactNumber}
                onChange={handleChange}
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
                name="hospitalName"
                value={requestInfo.hospitalName}
                onChange={handleChange}
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
                name="additionalInfo"
                value={requestInfo.additionalInfo}
                onChange={handleChange}
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