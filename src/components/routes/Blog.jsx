import React, { useEffect, useMemo } from 'react'
// import { DETAILED_NEWS,  } from '../selectors/dataNews'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'
import InputSearch from '../InputSearch/InputSearch'
import { addNewReviews } from '../../store/reviews/reviewSlice'
import { useDispatch, useSelector } from 'react-redux'
// import { DETAILED_NEWS } from '../selectors/dataNews'

// const COUNT = 6;
export default function Blog() {
  // const [hasMore, setHasMore] = useState(true);
  // const [news, setNews] = useState(DETAILED_NEWS);
  // const [, setFilterReviews] = useState([])
  const dispatch = useDispatch()
  const arrReviews = useSelector((state) => state.reviews.arrReviews)
  const items = useMemo(() =>  arrReviews, [])

  const handleShowMore = () => {
    // handleLoadMore();
  }
  
  const handleFilterNews = (value) => {
    console.log(items)
    items.filter(({name}) => name.toLowerCase().includes(value))
  }
  // const handleLoadMore = async (offset = news.length, countToLoad = news.length + COUNT) => {
  //   if (hasMore) {
  //     const { data, count } = await getNews(offset, countToLoad);
  //     setNews([...news, ...data]);
  //     setHasMore(count >= countToLoad);
  //   }
  // }

  useEffect(() => {
    dispatch(addNewReviews())
  },[])

  return (
    <section className={styles.blog}>
        <div className='container'>
            <h1>Reviews</h1>
            <InputSearch
              handleFilterNews={handleFilterNews}
            />
            <div className={styles.wrapper}>
              {arrReviews?.map((item, index) => (
                <Link 
                  key={index}
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
