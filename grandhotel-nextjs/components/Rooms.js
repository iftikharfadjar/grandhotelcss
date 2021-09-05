import React from 'react';
import Image from 'next/image';
import * as s from '../styles/Rooms.module.css';
import singleRoom from '../public/img/single-room.jpeg';
import doubleRoom from '../public/img/double-room.jpeg';
import luxRoom from '../public/img/lux.jpeg';
import vipRoom from '../public/img/vip.jpeg';

const Rooms = () => {
  return (
    <section className={`${s['rooms']}`}>
      <div className={`${s['common-header']}`}>
        <h1 className={`${s['common-heading']}`}>Rooms In Grand Hotel</h1>
        <div className={`${s['underline']}`}>
          <div className={`${s['small-underline']}`}></div>
          <div className={`${s['big-underline']}`}></div>
        </div>
      </div>

      <div className={`${s['rooms-cards-wrapper']}`}>
        <CardRooms
          url={singleRoom}
          heading="Single Room"
          paragraph="lorem ipsum lorem ipsum lorem"
          price="$99.00"
        />
        <CardRooms
          url={doubleRoom}
          heading="Double Room"
          paragraph="lorem ipsum lorem ipsum lorem"
          price="$199.00"
        />
        <CardRooms
          url={luxRoom}
          heading="Lux"
          paragraph="lorem ipsum lorem ipsum lorem"
          price="$299.00"
        />
        <CardRooms
          url={vipRoom}
          heading="VIP"
          paragraph="lorem ipsum lorem ipsum lorem"
          price="$399.00"
        />
      </div>

      <button className={`${s['rooms-btn']}`}>Check All Rooms</button>
    </section>
  );
};

const CardRooms = (props) => {
  return (
    <div className={`${s['room-card']}`}>
      <div className={`${s['room-img']}`}>
        <Image src={props.url} />
      </div>
      <div className={`${s['room-card-content']}`}>
        <h4 className={`${s['room-card-heading']}`}>{props.heading}</h4>
        <p className={`${s['room-card-paragraph']}`}>{props.paragraph}</p>
        <p className={`${s['room-price']}`}>{props.price}</p>
        <button className={`${s['room-card-btn']}`}>
          Book now
          <i
            className={`${s['fas fa-angle-double-right']} ${s['btn-arrow']}`}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Rooms;
