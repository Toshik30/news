import styles from './style.module.scss'
// import { authefication } from '../../store/auth/authSlice';
// import { useDispatch } from 'react-redux';
// import { dbb } from '../selectors/db';
// import { useLiveQuery } from 'dexie-react-hooks';

export default function Contacts() {
    // const dispatch = useDispatch()
    // const handleChange = ({target: {name, value}}) => dispatch(authefication({value, name}))
    // const arrAuth = useSelector(state => state.auth)
    // const users = useLiveQuery(() => dbb.isAuth.toArray())
    // async function handleAuth() {
    //     try {
    //         if(arrAuth.name.length !== 0) {
    //             await dbb.isAuth.put(arrAuth)
    //         } 
    //         } catch(error) {
    //             console.error('error :' + error)  
    //     }
    // }
    
    return (
        <section className={styles.contacts}>
            <div className='container'>
                <div className={styles.contacts__description}>
                    <h1>Get in touch with us!</h1>
                    <h3>We’re always happy to connect, if you need anything feel free to contact us.</h3>
                </div>
                <div className={styles.contacts__registration}>
                    <div className={styles.contacts__registration__address}>
                        <h2>Our information</h2>
                        <div className={styles.contacts__registration__address__element}>
                            <h3>CANADA</h3>
                            <p>66 Wellington St W, Toronto, ON M5K 1A1, Canada</p>
                            <p>+14168393174</p>
                            <p>support@trustbreaking.com</p>
                        </div>
                        {/* <div className={styles.contacts__registration__address__element}>
                            <h3>Australia / APAC</h3>
                            <p>Level 13 and Ground Floor, 50 Cavill Avenue Surfers Paradise QLD, 4214</p>
                            <p>+1 61 5635 4283</p>
                            <p>apac@sitejabber.com</p>
                        </div> */}
                    </div>
                    {/* <div className={styles.contacts__registration__form}>
                        <h2>The best way to reach our support staff is to fill out the form below with as much detail as possible.</h2>
                        <form>
                            <input onChange={handleChange} 
                                type="text"
                                name='name' 
                                placeholder='Name' 
                                className={styles.input} 
                            />
                            <input 
                                onChange={handleChange} 
                                type="email" 
                                name='email'
                                placeholder='E-mail' 
                                className={styles.input}
                            />
                            <input 
                                onChange={handleChange} 
                                type="password" 
                                name='password'
                                placeholder='Password' 
                                className={styles.input} 
                            />
                            <button 
                                onClick={() => handleAuth(users)} 
                                type="submit" 
                                className={styles.button_primary__blue} 
                            >Registration</button>
                        </form>
                    </div> */}
                </div>
            </div>
            
        </section>
    )
}
