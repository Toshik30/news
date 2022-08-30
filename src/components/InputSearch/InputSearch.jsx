import styles from './style.module.scss';
// import { Link } from 'react-router-dom';
// import { DETAILED_NEWS } from '../selectors/dataNews';

export default function InputSearch ({handleFilterNews}) {
  
  return (
    <div className='container'>
        <div className={styles.input__block}>
          <input 
            onChange={(e) => handleFilterNews(e.target.value.toLocaleLowerCase())}
            className={styles.input_text} 
            type="text"
            placeholder='Search...' 
          />
          <input className={styles.submit} type="submit" value="Searching"  />
          {/* {window.location.pathname === '/' ? 
            <div className={styles.result}>
              {DETAILED_NEWS.map((item, index) => 
                (<Link key={index} to={`/blog/${item.name.replace(/ /g, '').toLowerCase()}`}>{item.name}</Link>)) }
            </div>
            : <span className={styles.description}>Join thousands of teams hiring with Homerun</span>
            } */}
        </div>
    </div>
  )
}
