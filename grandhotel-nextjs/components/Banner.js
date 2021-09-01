import React from 'react';
import Image from 'next/image';
import styles from '../styles/Banner.module.css';

const Banner = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['brand']}>
        <Image src="/img/crown.png" width={80} height={60} />
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
