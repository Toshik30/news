import React from 'react';
import styles from './style.module.scss';
export default function InputSearch () {
  return (
    <div className='container'>
        <div className={styles.input__block}>
            <input className={styles.input_text} type="text" placeholder='Search...' />
            <input className={styles.submit} type="submit" value="Searching"  />
        </div>
        <span className={styles.description}>Join thousands of teams hiring with Homerun</span>
    </div>
  )
}
