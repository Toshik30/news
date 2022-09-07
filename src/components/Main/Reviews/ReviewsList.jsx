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
    console.log(reviewsList)
    const { user } = useAuth0()
    return (
        <div className={styles.reviews_block}>
            {reviewsList?.filter((item) => item.pathLocation === window.location.pathname)?.map((item, index) => (
            <div key={index} className={styles.review_list}>
                <span className={styles.avatar}>{item.name[0]}</span>
                <span className={styles.name_user}>{item.name}</span>
                <p className={styles.review}>{item.review}</p>
                <p className={styles.actual_date}>{item.date}</p>
                <Rating
                    ratingValue={item.rating}
                    size={20}
                    readonly={true}
                />
                {user?.name === 'admin@gmail.com' && (
                    <span 
                        className={styles.close} 
                        onClick={() => handleDeleteReview(item.id)}
                    />
                )}
            </div>
            ))}
        </div>
    )
}
