import React from 'react'
import { DETAILED_NEWS } from '../selectors/dataNews'
import { useLocation, Link } from 'react-router-dom'
import styles from './style.module.scss'

export default function BlogDetailed() {
  const location = useLocation()
  return (
    <section className={styles.detailed}>
      <Link to='/blog' className={styles.button_primary__blue}>Backspace</Link>
      <div className="container">
        {DETAILED_NEWS.filter((item) => item.path.replace(/ /g, '').toLowerCase() === location.pathname).map((elem, index) => (
            <div key={index} className={styles.detailed__company}>
                <img src={elem.image} alt={elem.name} />
                <h2>{elem.heading}</h2>
                <p>{elem.fullDescription}</p>
            </div>
        ))}
      </div>
    </section>
  )
}
