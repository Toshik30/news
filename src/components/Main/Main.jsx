import React from 'react';
import InputSearch from '../InputSearch/InputSearch';
import styles from './style.module.scss';
import Carousel from './Swiper/Carousel';
import About from '../About/About';

export default function Main() {
  return (
    <section>
        <div className="container">
            <div className={styles.main_page}>
                <h1 className={styles.heading}>
                    Where hiring comes together.
                </h1>
                <h4 className={styles.heading__description}>
                    Everything you need to organise your hiring and make a great impression.
                </h4>
                <InputSearch/>
                <div className={styles.companys}>
                    <Carousel/>
                </div>
            </div>
            <About />
        </div>
    </section>
  )
}
