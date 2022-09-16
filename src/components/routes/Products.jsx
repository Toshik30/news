import  styles  from './style.module.scss'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewReviews } from '../../store/reviews/reviewSlice'

const testArr = [
  {
    name: 'audi',
    count: 1
  },
  {
    name: 'bmw',
    count: 2
  },
  {
    name: 'porsche',
    count: 3
  },
  {
    name: 'renault',
    count: 1
  },
  {
    name: 'tayota',
    count: 5
  },
  {
    name: 'mercedes',
    count: 1
  }
]
const tt = testArr.map((value, index) => index );
console.log(tt)
export default function Products() {
  const [showMore, setShowMore] = useState(2)
  const handleShowMore = () => {
    setShowMore(showMore + 2)
  }
  const users = useSelector(state => state.reviews.users)
  console.log(users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addNewReviews())
  }, [])
  return (
    <section>
        <div className='container'>
            <h1>Heelo</h1>
            {testArr.map((item, index) => (
              <div key={index}><p>{item.name} {item.count}</p></div>
            )).splice(0, showMore)}
            {testArr.length !== showMore ? <button onClick={handleShowMore}>hello</button> : null} 
        </div>
        <div className={styles.polygon}></div>
        <div className={styles.polygon1}></div>
        <div className="container">
        {users?.map((value, index) => (
          <div key={index}>
            <p>{value.id}</p>
            <p>{value.title}</p>
            <p>{value.body}</p>
          </div>
        ))}
        </div>
    </section>
  )
}

