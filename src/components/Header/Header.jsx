import React from 'react';
import styles from './style.module.scss';
import { NavLink ,Link } from 'react-router-dom';
import { ROUTES_LINK } from '../selectors/routes';

export default function Header() {
  const activeLink = ({ isActive }) => isActive ? styles.active : 'inactive'
  
  return (
    <header>
        <div className="container">
            <div className={styles.nav}>
            <div className={styles.logo}>
                <Link to='/'>Logotype</Link>
            </div>
            <nav>
                <ul>
                    {ROUTES_LINK.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        className={activeLink}
                        value={item.name}
                    >
                        {item.name}
                    </NavLink> 
                    ))}  
                </ul>
            </nav>
            <div className={styles.navigate}>
                <button  className='button_primary'>Learn</button>
                <Link to='/contacts'  className='button_primary__blue'>Login</Link>
            </div>
            </div>
        </div>
    </header>
  )
}
