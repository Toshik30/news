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
          <button className={styles.submit} type="submit"   >Searching</button>
        </div>
    </div>
  )
}
