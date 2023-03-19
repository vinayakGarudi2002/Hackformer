import React from 'react'
// import './TransportationAccomodation.css'
import img from "./hotel.png"

function TransportationAccomodation () {
    return (
        <div class='parent'>
            <div class='child'>
                Transportation
            </div>
            <div class='child'>
                Accommodation
                <img src={img} alt='transportation'/>
                <p>Welcome to our beautiful destination! We are thrilled to invite you to experience the best of what our location has to offer. Our accommodations are designed to provide a comfortable and memorable experience for every traveler.</p>
                <div class='price'>
                    Price: 999
                </div>
            </div>
        </div>
    )
}

export default TransportationAccomodation;