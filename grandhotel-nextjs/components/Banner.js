import React from 'react';
import Image from 'next/image';
import styles from '../styles/Banner.module.css';
import imageBanner from '../public/img/header-1.jpeg';
import imageBrand from '../public/img/crown.png';

const Banner = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['banner-image-wrapper']}>
        <Image
          src={imageBanner}
          className={styles['banner-image']}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles['brand']}>
        <div className={`${styles['brand-image']}`}>
          <Image src={imageBrand} />
        </div>

        <h3 className={styles['hotel-heading']}>Grand Hotel</h3>
      </div>

      <div className={styles['banner']}>
        <h1 className={styles['banner-heading']}>Welcome to Grand Hotel</h1>
        <p className={styles['banner-paragraph']}>Make your life luxurios</p>
        <button
          className={`${styles['banner-button']} ${styles['checkout-btn']}`}
        >
          Check Out
        </button>
      </div>
    </header>
  );
};

export default Banner;
