import React from 'react'
import './TransportationAccomodation.css' // import CSS file
import img from "./hotel.png"

function TransportationAccomodation () {
    const price = Math.floor(Math.random() * 1100) + 900; // generate a random price between 900 and 2000

    return (
        <div className='card'>
            <div className='card-header'>
                Transportation & Accommodation
            </div>
            <div className='card-body'>
                <img src={img} alt='transportation'/>
                <p>Welcome to our beautiful destination! We are thrilled to invite you to experience the best of what our location has to offer. Our accommodations are designed to provide a comfortable and memorable experience for every traveler.</p>
                <div className='price'>
                    Price: {price} per night
                </div>
            </div>
        </div>
    )
}

export default TransportationAccomodation;
