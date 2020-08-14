import React from 'react';
import { GoCalendar } from "react-icons/go";

const InfoContainer = () => {
  return (
    <div className="info-content">
      <div className="info-content-header" >
        <p className="info-content-p">Logged In/Registered users get MORE!</p>
      </div>
      <div className="info-content-body">
        <ul className="info-content-ul">
          <li className="info-content-li">
            <GoCalendar />
            <p className="line-p">View/Cancel/Reshedule bookings</p>
          </li>
          <li className="info-content-li">
            <GoCalendar />
            <p className="line-p">View/Cancel/Reshedule bookings</p>
          </li>
          <li className="info-content-li">
            <GoCalendar />
            <p className="line-p">View/Cancel/Reshedule bookings</p>
          </li>
          <li className="info-content-li">
            <GoCalendar />
            <p className="line-p">View/Cancel/Reshedule bookings</p>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default InfoContainer