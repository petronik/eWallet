import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './SideNav.module.scss'



const SideNav = () => {
  const menu = [
    {
      title: 'Top up card',
      link: '/transfers',
    },
    {
      title: 'Send money',
      link: '/transfers/sendmoney',
    },
    {
      title: 'Withdraw',
      link: '/transfers/withdraw',
    },
  ]
  return (
    <div className={styles.sidenav}>
        
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
              style={({ isActive }) => ({
                borderLeft: isActive ? '2px solid #1E4DFC' : '2px solid transparent',
                paddingLeft: '4px',
                paddingBottom: '4px',
                borderBottom: 0,
                color: isActive ? '#1E4DFC' : '#000'
              })}
            >
              Archive
            </NavLink>
          </li>
        </ul>
      </div>
  )
}

export default SideNav