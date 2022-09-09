import styles from './style.module.scss';
import { useState, useEffect } from 'react'
import { db } from '../../selectors/db';
import { Rating } from 'react-simple-star-rating';
import { useDispatch } from 'react-redux/es/exports';
import { createReview } from '../../../store/reviews/reviewSlice';
import { useLiveQuery } from 'dexie-react-hooks';

export default function Reviews() {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [pathLocation, setPathLocation] = useState(window.location.pathname);
    const handleRating = (rate) => setRating(rate);
    const dispatch = useDispatch()
    const arrReviews = useLiveQuery(() => db.reviews.toArray())

    async function addReview(date) {
        try {
            if(name && review && rating !== 0) {
                await db.reviews.add({ name,review,rating,pathLocation,date })
                setName('')
                setReview('')
                setRating('')
            }
        } catch(error) {
            console.error(`Failed to add ${name}: ${error}`);
        } 
    }
    useEffect(() => {
        dispatch(createReview(arrReviews))
    })
    return (
       <div className={styles.form_review}>
            <input 
                type="text"
                placeholder='Name...'
                className={styles.input_form}
                maxLength={20}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea 
                type="text"
                required
                placeholder='Your review...'
                className={styles.input_form}
                maxLength={200}
                value={review}
                onChange={(e) => setReview(e.target.value)}
            />
            <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={20}
                label
                transition
                fillColor='orange'
                emptyColor='gray'
            />
            <button 
                className={styles.button_primary__blue} 
                onClick={() => addReview(new Intl.DateTimeFormat('en-Us').format(new Date()))}>Submit
            </button>
       </div>
    )
}
