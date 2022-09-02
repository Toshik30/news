import styles from './style.module.scss';
import { NavLink ,Link } from 'react-router-dom';
import { ROUTES_LINK } from '../selectors/routes';
// import { dbb } from '../selectors/db';
// import { useLiveQuery } from 'dexie-react-hooks';
import { useAuth0 } from '@auth0/auth0-react';
// import { LOGO } from '../selectors/dataImages';
import { useState } from 'react';

export default function Header() {
    const [activeBurger, setActiveBurger] = useState(false)
    const activeLink = ({ isActive }) => isActive ? styles.active : 'inactive'
    // const named = useLiveQuery(() => dbb.isAuth.toArray())
    const handleActive = () => {
        setActiveBurger(current => !current)
    }
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()
  
    return (
        <header>
            <div className="container">
                <div className={styles.nav}>
                <div className={styles.logo}>
                    <Link to='/'>
                       
                    </Link>
                </div>
                <nav className={styles.navigation}>
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
                    {isAuthenticated  ? 
                    
                        <div className={styles.navigate__block}>
                            <img className={styles.navigate__img} src={user.picture} alt="img" />
                            <strong>{user.name}</strong>
                            <Link to='/' onClick={() => logout()} className='button_primary__blue'>Logout</Link>
                        </div> :
                        <Link to='/' onClick={() => loginWithRedirect()} className='button_primary__blue'>Login</Link>
                    }
                </div>
                <div className={`${styles.burger_button} ${ activeBurger ? styles.burger_button_active : ''}`} onClick={handleActive} >
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                </div>
            </div>
            <nav className={`${styles.burger} ${ activeBurger ? styles.burger_active : ''}`}>
                <div className={`${styles.burger_button} ${ activeBurger ? styles.burger_button_active : ''}`} onClick={handleActive} >
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                {ROUTES_LINK.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        className={styles.burger_link}
                        value={item.name}
                        onClick={() => setActiveBurger()}
                    >
                        {item.name}
                    </NavLink> 
                    ))}  
                </nav>
        </header>
    )
}
