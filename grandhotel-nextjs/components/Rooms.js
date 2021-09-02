import React from 'react'
import Image from 'next/image'
import * as s from '../styles/Rooms.module.css'

const Rooms = () => {
    return(
        <section className={`${s["rooms"]}`}>
			<div className={`${s["common-header"]}`}>
				<h1 className={`${s["common-heading"]}`}>
					Rooms In Grand Hotel
				</h1>
				<div className={`${s["underline"]}`}>
					<div className={`${s["small-underline"]}`}></div>
					<div className={`${s["big-underline"]}`}></div>
				</div>
			</div>
			
			<div className={`${s["rooms-cards-wrapper"]}`}>
			
		    </div>
			
		
		<button className={`${s["rooms-btn"]}`}>
				Check All Rooms
			</button>
		
		</section>
    )
}

const Card = (props) => {
return (
    <div className={`${s["room-card"]}`}>
        <img src="img/single-room.jpeg" className={`${s["room-img"]}`}>
        <div className={`${s["room-card-content"]}`}>
            <h4 className={`${s["room-card-heading"]}`}>
                Single Room
            </h4>
            <p className={`${s["room-card-paragraph"]}`}>
                lorem ipsum lorem ipsum lorem
            </p>
            <p className={`${s["room-price"]}`}>
                $99.00
            </p>
            <button className={`${s["room-card-btn"]}`}>
                Book now
                <i className={`${s["fas fa-angle-double-right"]} ${s["btn-arrow"]}`}></i>
            </button>
        </div>
    </div>
	
)
}