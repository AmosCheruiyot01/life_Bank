import React, { useState } from 'react'
import styled from 'styled-components'
// import { donorData } from '../DB';
import AppointmentsRow from './AppointmentsRow';
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

function Appointments() {
  const donorData = useSelector((state) => state.donor.donations)
  const requestData = useSelector((state) => state.request.requests)
  console.log(donorData)
  const Table = styled.div`
  border: 1px solid #c7d2fe;

  font-size: 1.4rem;
  background-color:  #fff;
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: #fec0c0;
  border-bottom: 1px solid #f3f4f6;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color:  #4b5563;
  padding: 1.6rem 2.4rem;
`;

const navigate = useNavigate();

  return (
<>
<button className='text-white p-3 bg-red-700 rounded font-semibold font-medium ' onClick={() => navigate("/")}>❌ close</button>

    <div>
 { donorData.length > 0 &&
 (<div>
 <p>Donations</p>
    <Table role='table'>
      <TableHeader role='row'>
        <p>Donor</p>
        <p>Location</p>
        <p>Blood Type</p>
        <p>Appointment Date</p>
        <p>Contact Number</p> 
        <p>status</p>
      </TableHeader>
      {donorData.map((donor) => (
        <AppointmentsRow donor = {donor} key={donor.id}/>
      ))}
    </Table>
 </div>)}

{requestData.length > 0 && (<div>
  <p>requests:</p>
 <Table role='table'>
      <TableHeader role='row'>
        <div>Recipient</div>
        <div>Location</div>
        <div>Blood Type</div>
        <div>Date</div>
        <div>Contact Number</div> 
        <div>status</div>
      </TableHeader>
      {requestData.map((donor) => (
        <AppointmentsRow donor={donor} key={donor.id}/>
      ))}
    </Table>
 </div>)}

  </div>
 
</>
  )
}

export default Appointments