import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'
import { menu } from './menu';


const Navbar = () => {
  return (
    <div className={styles.wrapper} id='wrapper'>
        <ul className={styles.menu}>
          {menu.map((item, indx) => (
            <li key={`menu item${indx}`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Navbar;