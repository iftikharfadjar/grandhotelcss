import React from 'react';
import Image from 'next/image';
import * as s from '../styles/Footer.module.css';

const FooterPage = () => {
  return (
    <footer className={`${s['footer']}`}>
      <div className={`${s['main-part']}`}>
        <FooterListWrapper header="Grand Hotel">
          <FooterList item="support@grandhotel.com" />
          <FooterList item="new york, Main street 123" />
          <FooterList item="tel: +123 456 789" />
        </FooterListWrapper>

        <FooterListWrapper header="Explore">
          <FooterList item="Home" />
          <FooterList item="About Us" />
          <FooterList item="Rooms" />
          <FooterList item="Events" />
          <FooterList item="Customer" />
          <FooterList item="Contact" />
        </FooterListWrapper>

        <InputForm />

        <GalleryFooter />
      </div>

      <div className={`${s['creator-part']}`}>
        <FootText
          class={`${s['copyright-text']}`}
          text="Copyright &copy; 2021. Grand Hotel. All Rights Reserved"
        />
        <FootText
          class={`${s['copyright-text']}`}
          text={[
            'Made With ',
            <i className="fas fa-heart"></i>,
            ' by',
            <span>CodeAndCreate</span>,
          ]}
        />
      </div>
    </footer>
  );
};

const ImageFooter = (props) => {
  return (
    <div className={`${s['image-wrapper']}`}>
      <Image src={props.url} layout="fill" className={`${s['footer-image']}`} />
    </div>
  );
};

const GalleryWrapper = (props) => {
  return (
    <div className={`${s['gallery']}`}>
      <h3 className={`${s['footer-heading']}`}>Gallery</h3>
      <div className={`${s['gallery-images']}`}>{props.children}</div>
    </div>
  );
};

const GalleryFooter = () => {
  return (
    <GalleryWrapper>
      <ImageFooter url="/img/gallery-img-1.jpeg" />
      <ImageFooter url="/img/gallery-img-2.jpeg" />
      <ImageFooter url="/img/gallery-img-3.jpeg" />
      <ImageFooter url="/img/gallery-img-4.jpeg" />
      <ImageFooter url="/img/gallery-img-5.jpeg" />
      <ImageFooter url="/img/gallery-img-6.jpeg" />
    </GalleryWrapper>
  );
};

const FooterListWrapper = (props) => {
  return (
    <div className={`${s['footer-list-wrapper']}`}>
      <h3 className={`${s['footer-heading']}`}>{props.header}</h3>
      <ul className={`${s['footer-list']}`}>{props.children}</ul>
    </div>
  );
};

const FooterList = (props) => {
  return (
    <li className={`${s['footer-list-item']}`}>
      <a href="#" className={`${s['footer-list-link']}`}>
        {props.item}
      </a>
    </li>
  );
};

const InputForm = (props) => {
  return (
    <div className={`${s['contact']}`}>
      <h3 className={`${s['footer-heading']}`}>Contact</h3>
      <p>Sign Up for News</p>
      <form className={`${s['footer-form']}`}>
        <input
          type="text"
          className={`${s['footer-input']}`}
          placeholder="Your email..."
        />
        <button className={`${s['footer-btn']}`}>Sign Up</button>
      </form>
    </div>
  );
};

const FootText = (props) => {
  return (
    <div className={props.class}>
      <p>{props.text}</p>
    </div>
  );
};

export default FooterPage;
