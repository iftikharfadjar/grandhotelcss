import React from 'react';
import styles from '../styles/Navigation.module.css';

const NavigationBar = (props) => {
  return (
    <nav
      className={`${styles['navigation']} ${
        props.open && styles['navigation-open']
      }`}
    >
      <NavigationHeader>
        <NavigationFormSearch />
      </NavigationHeader>

      <ul className={styles['navigation-list']}>
        <NavigationItem itemName="Home" />
        <NavigationItem itemName="About Us" />
        <NavigationItem itemName="Rooms" />
        <NavigationItem itemName="Events" />
        <NavigationItem itemName="Customers" />
        <NavigationItem itemName="Contact" />
      </ul>

      <div className={styles['copyright']}>
        <p>&copy; 2021 Grand Hotel. All Rights Reserved</p>
      </div>
    </nav>
  );
};

const NavigationHeader = (props) => {
  return (
    <div className={styles['navigation-header']}>
      <h1 className={styles['navigation-heading']}>Grand Hotel</h1>
      {props.children}
    </div>
  );
};

const NavigationFormSearch = () => {
  return (
    <form className={styles['navigation-search']}>
      <input
        type="text"
        placeholder="Search.."
        className={styles['navigation-search-input']}
      />
      <button className={styles['navigation-search-button']}>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

const NavigationItem = (props) => {
  return (
    <li className={styles['navigation-item']}>
      <a href="#" className={styles['navigation-link']}>
        {props.itemName}
      </a>
    </li>
  );
};
export default NavigationBar;
