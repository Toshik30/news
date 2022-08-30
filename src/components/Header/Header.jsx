import styles from './style.module.scss';
import { NavLink ,Link } from 'react-router-dom';
import { ROUTES_LINK } from '../selectors/routes';
// import { dbb } from '../selectors/db';
// import { useLiveQuery } from 'dexie-react-hooks';
import { useAuth0 } from '@auth0/auth0-react';
import { LOGO } from '../selectors/dataImages';

export default function Header() {
    const activeLink = ({ isActive }) => isActive ? styles.active : 'inactive'
    // const named = useLiveQuery(() => dbb.isAuth.toArray())

    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()
  
    return (
        <header>
            <div className="container">
                <div className={styles.nav}>
                <div className={styles.logo}>
                    <Link to='/'>
                        <img src={LOGO} alt="logo" />
                    </Link>
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
                    {isAuthenticated  ? 
                    
                        <div className={styles.navigate__block}>
                            <img className={styles.navigate__img} src={user.picture} alt="img" />
                            <strong>{user.name}</strong>
                            <Link to='/' onClick={() => logout()} className='button_primary__blue'>Logout</Link>
                        </div> :
                        <Link to='/' onClick={() => loginWithRedirect()} className='button_primary__blue'>Login</Link>
                    }
                </div>
                </div>
            </div>
        </header>
    )
}
