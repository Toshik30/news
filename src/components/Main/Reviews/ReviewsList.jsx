import styles from './style.module.scss';
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../../selectors/db'
import { Rating } from 'react-simple-star-rating';
import React from 'react';

export default function ReviewsList() {
   
    const reviewsList = useLiveQuery(() => db?.reviews?.toArray())
    console.log(reviewsList)
    const handleDeleteReview = async(id) => {
        db.reviews.delete(id)
        console.log('hello')
        console.log(reviewsList)
        await db.reviews.toArray();  
  }
  return (
        <div className={styles.reviews_block}>
            {reviewsList?.map((item, index) => (
            <div key={index} className={styles.review_list}>
                <span className={styles.avatar}>{item.name[0]}</span>
                <span className={styles.name_user}>{item.name}</span>
                <p className={styles.review}>{item.review}</p>
                <Rating
                    ratingValue={item.rating}
                    size={20}
                    readonly={true}
                />
                <span className={styles.close} onClick={() => handleDeleteReview(item.id)}></span>
            </div>
            ))}
        </div>
  )
}
