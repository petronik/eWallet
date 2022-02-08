import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss'
import { menu } from './menu';


const Navbar = () => {
  return (
    <div className={styles.wrapper} id='wrapper'>
        <ul className={styles.menu}>
          {menu.map((item, indx) => (
            <li key={`menu item${indx}`} >
              <NavLink to={item.link} >{item.title}</NavLink>
            </li>
          ))}
          
        </ul>
      </div>
  );
};

export default Navbar;