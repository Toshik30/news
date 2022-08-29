import React from 'react'
import { LOGO } from '../selectors/dataImages';
import styles from './style.module.scss';
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__nav}>
          <div className={styles.logo}>
            <img src={LOGO} alt="logo" />
          </div>
          <button className={styles.button_primary__blue}>Button</button>
        </div>
        <div className={styles.footer__body}>
          <div className={styles.footer__check}>
            <ul>
              <h5>About:</h5>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/contacts'>Contacts</Link>
              </li>
            </ul>
            <ul>
              <h5>Legal:</h5>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
            <ul>
              <h5>Social:</h5>
              <li>Telegram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div className={styles.contacts}>
            <p>Receive must-read articles and trends on company culture, hiring and work/life balance.</p>
            <p>Address</p>
            <p>+55767 695064645</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
