import { LOGO_FOOTER } from '../selectors/dataImages';
import styles from './style.module.scss';
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* <div className={styles.footer__nav}>
         
          
        </div> */}
        <div className={styles.footer__body}>
          <div className={styles.footer__check}>
          <div className={styles.logo}>
            <img src={LOGO_FOOTER} alt="logo" />
          </div>
          <div className={styles.ul_list}>
            <ul>
                <h5>About:</h5>
                <li>
                  <Link to='/blog'>Reviews</Link>
                </li>
                <li>
                  <Link to='/contacts'>Contacts</Link>
                </li>
              </ul>
              <ul>
                <h5>Legal:</h5>
                <li>
                  <Link to='/terms'>Terms</Link>
                </li>
                <li>
                  <Link to='/policy'>Privacy</Link>
                </li>
              </ul>
          </div>
            {/* <ul>
              <h5>Social:</h5>
              <li>Telegram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul> */}
          </div>
          <Link className={styles.button_primary__blue} to='/blog'> Go reviews</Link>
          <div className={styles.contacts}>
            <p>Receive must-read articles and trends on company culture.</p>
            <p>Address:</p>
            <p>66 Wellington St W, Toronto, ON M5K 1A1, Canada</p>
            <p>+14168393174</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
