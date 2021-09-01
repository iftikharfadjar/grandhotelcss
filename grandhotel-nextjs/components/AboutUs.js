import React from 'react';
import * as s from '../styles/Aboutus.module.css';
import Image from 'next/image';
// import Image1 from '../public/img/about-us-img-1.jpeg'

const AboutUs = () => {
  return (
    <section className={s['about-us']}>
      <div className={s['about-us-content']}>
        <h1 className={s['about-us-heading']}>About Us</h1>
        <div className={s['underline']}>
          <div className={s['small-underline']}></div>
          <div className={s['big-underline']}></div>
        </div>
        <h3 className={s['about-us-sub-heading']}>Grand Hotel</h3>
        <p className={s['about-us-paragraph']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          interdum, augue ut posuere vestibulum, sem massa ullamcorper lacus,
          quis faucibus sapien ipsum eget nisi. Mauris blandit eros eget
          volutpat laoreet. Nunc accumsan pulvinar urna, eu tincidunt mi
          ultrices vitae. Pellentesque dolor sapien, imperdiet non tortor et,
          rutrum tempor justo. Aliquam enim nisi, accumsan eu libero a, luctus
          sagittis ex. Aliquam congue ultricies luctus. Suspendisse sed ex id
          est tempor tempor at bibendum nisl. Pellentesque quam justo, accumsan
          id nibh nec, egestas imperdiet augue. Proin id velit in diam bibendum
          venenatis. Etiam eu quam sollicitudin, fringilla sapien et, accumsan
          ligula.
        </p>
        <button className={s['about-us-btn']}>
          Read More
          <i className={`fas fa-angle-double-right ${s['btn-arrow']}`}></i>
        </button>
      </div>
      <div className={`${['about-us-images']}`}>
        <ImageAboutUs url="/img/about-us-img-1.jpeg" />
      </div>
    </section>
  );
};

const ImageAboutUs = (props) => {
  return (
    <div className={s['image']}>
      <Image src={props.url} layout="fill" className={`${s['image-1']}`} />
    </div>
  );
};

export default AboutUs;
