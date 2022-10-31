import styles from './style.module.scss';
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating';
import { useDispatch } from 'react-redux';
import { addNewComment } from '../../../store/reviews/reviewSlice';

export const getComments = (name,review,rating,pathLocation, date, idUser) => new Promise((res) => {
   res({name,review,rating,pathLocation, date, idUser})
})
export default function Reviews() {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [pathLocation, ] = useState(window.location.pathname);
    // const [APIdata, setAPIdata] = useState([])
    const handleRating = (rate) => setRating(rate);
    const dispatch = useDispatch()
    
    const addReview = () => {
        dispatch(addNewComment({name,review,rating,pathLocation,idUser: 'id' + (new Date()).getTime(), date: new Intl.DateTimeFormat('en-Us').format(new Date())},setName(''),setReview(''),setRating('')))
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
