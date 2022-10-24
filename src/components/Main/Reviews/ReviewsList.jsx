import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { Rating } from 'react-simple-star-rating';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch,useSelector } from 'react-redux';
import { handleDeleteReview } from '../../../store/reviews/reviewSlice';
import axios from 'axios';

export default function ReviewsList() {
    const dispatch = useDispatch()
    const [APIdata, setAPIdata] = useState([])
    // const test = useSelector((state) => state.reviews.arrReviews)
    // console.log(test);
    const { user } = useAuth0()
    useEffect(() => {
        axios.get(`https://sheet.best/api/sheets/b3a38273-5d35-499b-bfca-a5d93b6ad2e1`)
        .then((incomingData) => {
            setAPIdata(incomingData.data)
        })
    },[])
    return (
        <div className={styles.reviews_block}>
            {APIdata?.filter((item) => item.pathLocation === window.location.pathname)?.map(({name,id, review, date, rating}, index) => (
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
                 <span 
                        className={styles.close} 
                        onClick={() => dispatch(handleDeleteReview({id}))}
                    />
            </div>
            ))}
        </div>
    )
}
