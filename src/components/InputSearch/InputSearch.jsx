import styles from './style.module.scss';

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
  
        </div>
    </div>
  )
}
