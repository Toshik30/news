import  styles  from './style.module.scss'
import { useState } from 'react'

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
export default function Products() {
  const [showMore, setShowMore] = useState(2)
  const handleShowMore = () => {
    setShowMore(showMore + 2)
  }
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
    </section>
  )
}

