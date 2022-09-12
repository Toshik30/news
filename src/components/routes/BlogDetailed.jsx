import React from 'react'
import { DETAILED_NEWS } from '../selectors/dataNews'
import { useLocation, Link } from 'react-router-dom'
import styles from './style.module.scss'
import { useAuth0 } from '@auth0/auth0-react';
import ReviewsList from '../Main/Reviews/ReviewsList';
import Reviews from '../Main/Reviews/Reviews';

export default function BlogDetailed() {
  const location = useLocation()
  const { isAuthenticated } = useAuth0()
  return (
    <section className={styles.detailed}>
      <Link to='/blog' className={styles.arrow}>Backspace</Link>
      <div className="container">
        {DETAILED_NEWS.filter((item) => item.path.replace(/ /g, '').toLowerCase() === location.pathname).map((elem, index) => (
            <div key={index} className={styles.detailed__company}>
                <img className={styles.image} src={elem.image} alt={elem.name} />
                <h2>{elem.heading}</h2>
                <p>{elem.fullDescription}</p>
                {elem?.descriptionLvl ? <>
                  <h2>{elem.descriptionLvl?.rev1?.heading}</h2>
                  <p>{elem.descriptionLvl?.rev1?.desc}</p>
                  <p>{elem.descriptionLvl?.rev1?.desc1}</p>
                  <h2>{elem.descriptionLvl?.rev2?.heading}</h2>
                  <p>{elem.descriptionLvl?.rev2?.desc}</p>
                  <p>{elem.descriptionLvl?.rev2?.desc1}</p>
                  {elem.descriptionLvl?.image ? <img src={elem.descriptionLvl?.image} style={{margin: '20px 0px'}} alt="img" /> : null}
                  <h2>{elem.descriptionLvl?.rev3?.heading}</h2>
                  <p>{elem.descriptionLvl?.rev3?.desc}</p>
                  <p>{elem.descriptionLvl?.rev3?.desc1}</p>
                  <p>{elem.descriptionLvl?.rev3?.desc2}</p>
                  <h2>{elem.descriptionLvl?.rev4?.heading}</h2>
                  <p>{elem.descriptionLvl?.rev4?.desc}</p>
                  <p>{elem.descriptionLvl?.rev4?.desc1}</p>
                </> : null}
            </div>
        ))}
          <ReviewsList/>
          {isAuthenticated && (
              <Reviews/>
          )}
      </div>
    </section>
  )
}
