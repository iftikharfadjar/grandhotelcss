import React, { useState } from 'react';
import styles from '../styles/Sidebar.module.css';

const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <SidebarBtn
        openNavbar={props.openNavbar}
        handleNavBar={props.handleNavBar}
      />

      <ul className={styles.socialIconsList}>
        <IconSidebar iconName="fab fa-facebook-f" />
        <IconSidebar iconName="fab fa-twitter" />
        <IconSidebar iconName="fab fa-google-plus-g" />
        <IconSidebar iconName="fab fa-instagram" />
      </ul>

      <div className={styles.year}>
        <p>2021</p>
      </div>
    </div>
  );
};

const IconSidebar = (props) => {
  return (
    <React.Fragment>
      <li>
        <a href={props.url || '#'} className={styles.socialLink}>
          <i className={props.iconName}></i>
        </a>
      </li>
    </React.Fragment>
  );
};

const SidebarBtn = (props) => {
  return (
    <div className={styles.menuicon} onClick={props.handleNavBar}>
      <div
        className={`${styles.line} ${styles.line1} ${
          props.openNavbar && styles['line-1-open']
        }`}
      ></div>
      <div
        className={`${styles.line} ${
          props.openNavbar && styles['line-2-open']
        }`}
      ></div>
      <div
        className={`${styles.line} ${styles.line3} ${
          props.openNavbar && styles['line-3-open']
        }`}
      ></div>
    </div>
  );
};

export default Sidebar;
