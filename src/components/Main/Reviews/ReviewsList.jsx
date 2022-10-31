import styles from './style.module.scss';
import { Rating } from 'react-simple-star-rating';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector} from 'react-redux';
import { getCommentsArray, deleteComment} from '../../../store/reviews/reviewSlice';

import  axios  from 'axios';
import { useEffect } from 'react';

export const getDeleteComment = ({idUser}) => new Promise((res) => {
    res({idUser})
})

export default function ReviewsList() {
    const dispatch = useDispatch()
    const { user } = useAuth0()
    const APIdata = useSelector(state => state.reviews.arrReviews)
    useEffect(() => {
    axios.get('https://sheet.best/api/sheets/b3a38273-5d35-499b-bfca-a5d93b6ad2e1')
    .then((result) => {
        dispatch(getCommentsArray(result.data))
    }) 
   },[])
    return (
        <div className={styles.reviews_block}>
            {APIdata?.filter((item) => item.pathLocation === window.location.pathname)?.map(({name, review, date, rating, idUser}, index) => (
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
                        onClick={() => dispatch(deleteComment({idUser}))}
                    />
                )}
            </div>
            ))}
        </div>
    )
}
