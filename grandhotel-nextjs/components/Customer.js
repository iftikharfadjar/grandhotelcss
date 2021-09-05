import React from 'react';
import Image from 'next/image';
import * as s from '../styles/Customer.module.css';
import customer1 from '../public/img/customer-1.jpeg';
import customer2 from '../public/img/customer-2.jpeg';

const Customer = () => {
  return (
    <section className={`${s['customers']}`}>
      <div className={`${s['common-header']}`}>
        <h1 className={`${s['common-heading']}`}>Our Customer</h1>
        <div className={`${s['underline']}`}>
          <div className={`${s['small-underline']}`}></div>
          <div className={`${s['big-underline']}`}></div>
        </div>
      </div>

      <p className={`${s['customer-paragraph']}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum,
        augue ut posuere vestibulum, sem massa ullamcorper lacus, quis faucibus
        sapien ipsum eget nisi
      </p>

      <div className={`${s['customers-cards-wrapper']}`}>
        <CustomerCard url={customer1} name="hol holland" />
        <CustomerCard url={customer2} name="yom baketry" />
      </div>
    </section>
  );
};

const CustomerCard = (props) => {
  return (
    <div className={`${s['customer-card']}`}>
      <div className={`${s['customer-image-wrapper']}`}>
        <Image src={props.url} className={`${s['customer-image']}`} />
      </div>
      <div className={`${s['customer-info']}`}>
        <h3 className={`${s['customer-fullname']}`}>{props.name}</h3>
        <p className={`${s['customer-paragraph-1']}`}>Happy Customer</p>
        <p className={`${s['customer-paragraph-2']}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          interdum, augue ut posuere vestibulum, sem massa ullamcorper lacus,
          quis faucibus sapien ipsum eget nisi
        </p>
      </div>
    </div>
  );
};

export default Customer;
