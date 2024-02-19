import React from 'react'
import styled from 'styled-components';

function AppointmentsRow({donor}) {
    const TableRow = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
    column-gap: 2.4rem;
    align-items: center;
    padding: 1.4rem 2.4rem;
  
    &:not(:last-child) {
      border-bottom: 1px solid var(--color-grey-100);
    }
  `;


  const Donor = styled.div`
  font-size: 1.6rem;
  color:  #4b5563;
  font-family: "Sono";
`;

const Date = styled.div`
  font-family: "Sono";
`;

const Status = styled.div`
  font-family: "Sono";
  color: #374151;
`;

  return (
    <TableRow role='row'>
    <Donor role='cell'>{donor.donor || donor.recipient}</Donor>
    <Donor role='cell'>{donor.location}</Donor>
    <Status>{donor.bloodType || "N/A"}</Status>
    <Status>{donor.appointmentDate  }</Status>
    <Date>{donor.contactNumber}</Date>
    <Date>{donor.status || "pending"}</Date>

    </TableRow>
    )
}

export default AppointmentsRow