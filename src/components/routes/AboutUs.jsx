import React from 'react'
import styles from './style.module.scss'
import author from '../../images/businessman.png'

export default function AboutUs() {
  return (
    <section className={styles.about}>
        <div className="container">
          <div className={styles.about_us}>
            <div className={styles.about_us__description}>
              <h1>We are journalism professionals</h1>
              <p>Experienced information market monitoring experts are committed to providing exceptional service to our readers in Europe and Canada</p>
              <p>Trust Breaking's dedicated account managers fully understand our Clients' goals, allowing them to focus on the objectivity and truthfulness of the information provided.</p>
              <p>We do not cooperate with scammers or suspicious companies. Our aim is to deliver information in an honest way.</p>
            </div>
            <div className={styles.animate__block}>
                {/* <strong>CONSUMERS:</strong> */}
                <h4>How does it work ?</h4>
                <div className={styles.animate__block__round}>
                  <span className={styles.arrow}></span>
                  <span>We work with independent experts in many fields, and we also take into account the experiences of ordinary people and social surveys. </span>
                </div>
                <strong>BUSINESSES:</strong>
                <h4>Which is built on experience</h4>
            </div>
          </div>
          <div className={styles.interwiew}>
            <div className={styles.interwiew__header}>
              <h2>We collect reviews about the company</h2>
            </div>
            <div className={styles.interwiew__wrapper}>
              <div className={styles.interwiew__wrapper__author}>
                <img src={author} alt="img" />
              </div>
              <div className={styles.interwiew__wrapper__description}>
                <h3>“My name is Harry Nelson and I am a Trust Breaking SEO. 
                    We've all had disappointments, from eating in a disgusting restaurant or buying property in a 'bad neighbourhood'. I as any other person encounter this on a regular basis and by reading reviews of anything or checking the reputation of a brand, the company has realised that it is all bought-and-pasted good reviews, I am outraged at how easily large resources go under the influence of money and have decided to put a stop to it! I have decided I will create my own, honest, non-compromising review site where I can honestly look my readers in the eye and give feedback at whatever the cost. ”</h3>
                <h3>Our team is growing rapidly, we are already known in over 30 countries in Europe and North America. We are heading in the right direction.</h3>
                <p>Harry Nelson</p>
                <p>Trust Breaking SEO</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
