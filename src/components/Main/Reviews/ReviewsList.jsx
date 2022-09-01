import styles from './style.module.scss';
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../../selectors/db'
import { Rating } from 'react-simple-star-rating';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
export default function ReviewsList() {
   
    const reviewsList = useLiveQuery(() => db?.reviews?.toArray())
    const handleDeleteReview = async(id) => {
        db.reviews.delete(id)
        await db.reviews.toArray();  
    }
    const { user } = useAuth0()
    console.log(reviewsList)
    return (
        <div className={styles.reviews_block}>
            {reviewsList?.filter((item) => item.pathLocation === window.location.pathname)?.map((item, index) => (
            <div key={index} className={styles.review_list}>
                <span className={styles.avatar}>{item.name[0]}</span>
                <span className={styles.name_user}>{item.name}</span>
                <p className={styles.review}>{item.review}</p>
                <Rating
                    ratingValue={item.rating}
                    size={20}
                    readonly={true}
                />
                {user?.name === 'admin@gmail.com' && (
                    <span className={styles.close} onClick={() => handleDeleteReview(item.id)}></span>
                )}
            </div>
            ))}
        </div>
    )
}
