import React from 'react';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menuicon}>
        <div className={`${styles.line} ${styles.line1}`}></div>
        <div className={styles.line}></div>
        <div className={`${styles.line} ${styles.line3}`}></div>
      </div>

      <ul className={styles.socialIconsList}>
        <li>
          <a href="#" className={styles.socialLink}>
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#" className={styles.socialLink}>
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#" className={styles.socialLink}>
            <i className="fab fa-google-plus-g"></i>
          </a>
        </li>
        <li>
          <a href="#" className={styles.socialLink}>
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>

      <div className={styles.year}>
        <p>2021</p>
      </div>
    </div>
  );
};

export default Sidebar;
