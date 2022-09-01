import React, { useState } from 'react'
import { DETAILED_NEWS } from '../selectors/dataNews'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'
import InputSearch from '../InputSearch/InputSearch'

export default function Blog() {
  const random = () => {
    return Math.random().toString(36).slice(2)
  }
  const [filter, setFilter] = useState(DETAILED_NEWS)
  
  const handleFilterNews = (name) => {
    setFilter(DETAILED_NEWS.filter((item) => item.name.toLowerCase().includes(name)))
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
                  <p >{item.shortDescription.substring(0, 100)}</p>
                </Link>
              ))}
            </div>
        </div>
    </section>
  )
}
