import styles from './style.module.scss';
import { useState } from 'react'
import { db } from '../../selectors/db';
import { Rating } from 'react-simple-star-rating';

export default function Reviews() {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [pathLocation, setPathLocation] = useState(window.location.pathname);
  const handleRating = (rate) => setRating(rate)

  async function addReview() {
    try {
        if(name && review && rating !== 0) {
            await db.reviews.add({ name,review,rating,pathLocation })
        setName('')
        setReview('')
        setRating('')
        setPathLocation('')
        }
    } catch(error) {
        console.error(`Failed to add ${name}: ${error}`);
    }
  }
  
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
                onClick={addReview}>Submit
            </button>
       </div>
    )
}
