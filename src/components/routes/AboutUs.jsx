import React from 'react'
import styles from './style.module.scss'
import author from '../../images/businessman.png'
export default function AboutUs() {
  return (
    <section className={styles.about}>
        <div className="container">
          <div className={styles.about_us}>
            <div className={styles.about_us__description}>
              <h1>We're Postpilot.</h1>
              <p>Trustpilot was founded in 2007 with a vision to create an independent currency of trust. We're a digital platform that brings businesses and consumers together to foster trust and inspire collaboration. We're free to use, open to everybody, and built on transparency.</p>
              <p>Trustpilot hosts reviews to help consumers shop with confidence, and deliver rich insights to help businesses improve the experiences they offer. The more consumers use our platform and share their own opinions, the richer the insights we offer businesses, and the more opportunities they have to earn the trust of consumers from all around the world.</p>
            </div>
            <div className={styles.animate__block}>
                <strong>CONSUMERS:</strong>
                <h4>Share your experiences</h4>
                <div className={styles.animate__block__round}>
                  <span className={styles.arrow}></span>
                  <span>We bring consumers and businesses together to make things better</span>
                </div>
                <strong>BUSINESSES:</strong>
                <h4>Create better experiences</h4>
            </div>
          </div>
          <div className={styles.interwiew}>
            <div className={styles.interwiew__header}>
              <h2>Our 2022 Transparency Report has landed</h2>
            </div>
            <div className={styles.interwiew__wrapper}>
              <div className={styles.interwiew__wrapper__author}>
                <img src={author} alt="img" />
              </div>
              <div className={styles.interwiew__wrapper__description}>
                <h3>“I started Trustpilot to give all consumers a powerful voice and all companies a way to listen, respond, and continually improve. That builds trust because this happens in a transparent environment with no pre-moderation or censorship.I started Trustpilot to give all consumers a powerful voice and all companies a way to listen, respond, and continually improve. That builds trust because this happens in a transparent environment with no pre-moderation or censorship.”</h3>
                <p>Peter Holten Mühlmann</p>
                <p>founder and CEO, Trustpilot</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
