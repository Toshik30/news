import styles from './style.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { DETAILED_NEWS } from '../selectors/dataNews'

export default function Products() {
  const [isFocused, setIsFocused] = useState(false)
  
  return (
    <section>
        <div className='container'>
            <div className={styles.datalist} onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) ?  setIsFocused() : ''}>
              <input 
                type="text"             
                onFocus={() => setIsFocused(isFocused ? styles.work : styles.ctn)}
              />
              <div className={isFocused ? styles.work : styles.ctn}  >
                {DETAILED_NEWS.map((item, index) => 
                  <Link 
                    key={index}
                    target='_blank'
                    to={`/blog/${item.name.replace(/ /g, '').toLowerCase()}`}
                  >{item.name}
                  </Link>
                  )}
              </div>
            </div>
        </div>
    </section>
  )
}
