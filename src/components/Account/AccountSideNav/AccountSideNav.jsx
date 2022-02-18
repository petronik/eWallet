import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './AccountSideNav.module.scss'


const AccountSideNav = () => {
  const menu = [
    {
      title: 'Account',
      link: 'account',
    },
    {
      title: 'Security',
      link: 'security',
    },
    {
      title: 'Notification settings',
      link: 'notificationsettings',
    },
  ]
  return (
    <nav className={styles.sidenav}>
        
        <ul>Menu
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
      </nav>
  )
}

export default AccountSideNav