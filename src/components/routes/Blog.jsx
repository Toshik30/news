import React, { useState, useEffect, useMemo } from 'react'
import { DETAILED_NEWS } from '../selectors/dataNews'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'
import InputSearch from '../InputSearch/InputSearch'

export default function Blog() {
  const random = () => {return Math.random().toString(36).slice(2)}
  const [showedItemsCount, setShowedItemsCount] = useState(6)
  const featuredReviews = useMemo(() => (DETAILED_NEWS.slice(0, showedItemsCount)), [showedItemsCount]);
  const [filter, setFilter] = useState([])

  useEffect(() => {
    setFilter(featuredReviews)
  },[featuredReviews])
  
  const handleShowedItemsCount = () => {
    setShowedItemsCount(showedItemsCount + 3)
    setFilter(featuredReviews)
  }
  const handleFilterNews = (value) => {
    setFilter(DETAILED_NEWS.filter(({name}) => name.toLowerCase().includes(value)))
  }
  return (
    <section className={styles.blog}>
        <div className='container'>
            <h1>Reviews</h1>
            <InputSearch
              handleFilterNews={handleFilterNews}
            />
            <div className={styles.wrapper}>
              {filter.map((item) => (
                <Link 
                  key={random()}
                  to={`/blog/${item.name.replace(/ /g, '').toLowerCase()}`}
                >
                  <img src={item.image} alt="img" />
                  <h3>{item.shortHeading}</h3>
                  <p className={styles.paragraph}>{item.fullDescription.substring(0, 100) + '...'}</p>
                </Link>
              ))}
            </div>
            {featuredReviews.length >= showedItemsCount ? <button className={styles.show_more} onClick={handleShowedItemsCount}>Show more</button> : null} 
        </div>
    </section>
  )
}
