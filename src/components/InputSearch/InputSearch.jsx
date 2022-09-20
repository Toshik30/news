import { useDispatch } from 'react-redux';
import { handleFilterReviews } from '../../store/reviews/reviewSlice';
import styles from './style.module.scss';

export default function InputSearch () {
  const dispatch = useDispatch()
  return (
    <div className='container'>
        <div className={styles.input__block}>
          <input 
            onChange={(e) => dispatch(handleFilterReviews(e.target.value.toLocaleLowerCase()))}
            className={styles.input_text} 
            type="text"
            placeholder='Search...' 
          />
          <button className={styles.submit} type="submit"   >Searching</button>
        </div>
    </div>
  )
}
