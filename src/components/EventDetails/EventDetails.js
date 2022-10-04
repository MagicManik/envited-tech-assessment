import React from 'react';
import cake from '../../assets/Images/Birthday-Cake.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BiCalendar } from "react-icons/bi";

import './EventDetails.css';

const EventDetails = () => {
    return (
        <section className='event'>
            <div className='event-page-body'>
                <div className='event-page-heading'>
                    <h1>Birthday Bash</h1>
                    <p>Hosted by Elysia</p>
                </div>
                <div className='event-date-container'>
                    <div className='event-date-text'>
                        <div className='calender-container'>
                            <BiCalendar className='calender' />
                            {/* <IoCalendarOutline className='calender' /> */}
                        </div>
                        <div className="event-date-details">
                            <h5>18 August 6:00PM</h5>
                            <h6>to 19 August 1:00PM UTC +10</h6>
                        </div>
                    </div>
                    <div className="arrow-sign">
                        <MdKeyboardArrowRight className='arrow' />
                    </div>
                </div>
            </div>
            <div>
                <img src={cake} alt="" />
            </div>
        </section>
    );
};

export default EventDetails;