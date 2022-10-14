import styles from './style.module.scss';
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../../selectors/db'
import { Rating } from 'react-simple-star-rating';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { handleDeleteReview } from '../../../store/reviews/reviewSlice';

export default function ReviewsList() {
    const reviewsList = useLiveQuery(() => db?.reviews?.toArray())
    const dispatch = useDispatch()
    const test = useSelector((state) => state.reviews.arrReviews)
    console.log(test)
    const { user } = useAuth0()
    return (
        <div className={styles.reviews_block}>
            {reviewsList?.filter((item) => item.pathLocation === window.location.pathname)?.map(({name,id, review, date, rating}, index) => (
            <div key={index} className={styles.review_list}>
                <span className={styles.avatar}>{name[0]}</span>
                <span className={styles.name_user}>{name}</span>
                <p className={styles.review}>{review}</p>
                <p className={styles.actual_date}>{date}</p>
                <Rating
                    ratingValue={rating}
                    size={20}
                    readonly={true}
                />
                {user?.name === 'admin@gmail.com' && (
                    <span 
                        className={styles.close} 
                        onClick={() => dispatch(handleDeleteReview({id}))}
                    />
                )}
            </div>
            ))}
        </div>
    )
}
