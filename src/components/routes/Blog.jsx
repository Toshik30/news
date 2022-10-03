import React, { useEffect, useMemo } from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'
import InputSearch from '../InputSearch/InputSearch'
import { addNewReviews } from '../../store/reviews/reviewSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Blog() {

  const dispatch = useDispatch()
  const arrCompanys = useSelector((state) => state.reviews.companys)
  const inputValue = useSelector((state) => state.reviews.search)

  const itemsToRender = useMemo(() => arrCompanys.filter(({name}) => name.toLowerCase().includes(inputValue)) , [arrCompanys, inputValue])

  useEffect(() => {
    dispatch(addNewReviews())
  },[])

  return (
    <section className={styles.blog}>
        <div className='container'>
            <h1>Reviews</h1>
            <InputSearch/>
            <div className={styles.wrapper}>
              {itemsToRender?.map((item, index) => (
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
            <button 
              className={styles.show_more}
            >
              Show more</button>
        </div>
    </section>
  )
}
