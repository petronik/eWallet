import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './SideNav.module.scss'



const SideNav = () => {
  const menu = [
    {
      title: 'Top up card',
      link: '',
    },
    {
      title: 'Send money',
      link: 'sendmoney',
    },
    {
      title: 'Withdraw',
      link: 'withdraw',
    },
  ]
  return (
    <nav className={styles.sidenav}>
        
        <ul>Transfers
          {menu.map((item, indx) => (
            <li key={`menu item${indx}`} >
              <NavLink
                to={item.link}
                style={({ isActive }) => ({
                  borderLeft: isActive ? '2px solid #1E4DFC' : '2px solid transparent',
                  paddingLeft: '4px',
                  paddingBottom: '4px',
                  borderBottom: 0,
                  color: isActive ? '#1E4DFC' : '#000'
                })}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul>Archive
          <li>
            <NavLink 
              to={'/archive'}
            >
              Archive
            </NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default SideNav