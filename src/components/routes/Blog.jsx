import React, { useState, useEffect } from 'react'
import { DETAILED_NEWS, getNews } from '../selectors/dataNews'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'
import InputSearch from '../InputSearch/InputSearch'

const COUNT = 6;
const random = () => {return Math.random().toString(36).slice(2)}

export default function Blog() {
  const [hasMore, setHasMore] = useState(true);
  const [news, setNews] = useState([]);
  const [, setFilterReviews] = useState([])
  const handleShowMore = () => {
    handleLoadMore();
  }

  const handleFilterNews = (value) => {
    setFilterReviews(DETAILED_NEWS.filter(({name}) => name.toLowerCase().includes(value)))
  }
  const handleLoadMore = async (offset = news.length, countToLoad = news.length + COUNT) => {
    if (hasMore) {
      const { data, count } = await getNews(offset, countToLoad);
      setNews([...news, ...data]);
      setHasMore(count >= countToLoad);
    }
  }
  useEffect(() => {
    handleLoadMore()
  },[])

  return (
    <section className={styles.blog}>
        <div className='container'>
            <h1>Reviews</h1>
            <InputSearch
              handleFilterNews={handleFilterNews}
            />
            <div className={styles.wrapper}>
              {news.map((item) => (
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
            <button className={styles.show_more} onClick={handleShowMore}>Show more</button>
        </div>
    </section>
  )
}
