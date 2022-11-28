import styles from './style.module.scss';
import Carousel from './Swiper/Carousel';
import About from '../About/About';
import { DETAILED_NEWS } from '../selectors/dataNews';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Main() {
    const [isFocused, setIsFocused] = useState(false)
    const [search, setSearch] = useState(DETAILED_NEWS)
    const handleSearchValue = (value) => {
        setSearch(DETAILED_NEWS.filter((item) => item.name.toLowerCase().includes(value)))
    }
    return (
        <section >
            <div className="container">
                <div className={styles.main_page}>
                    <h1 className={styles.heading}>
                        The place that unite us
                    </h1>
                    <h4 className={styles.heading__description}>
                        Everything you need to find a reputation.
                    </h4>
                    <div className={styles.datalist} onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) ?  setIsFocused() : ''}>
                       
                        <input
                            className={styles.input_text} 
                            type="text"
                            placeholder='Search..'         
                            onFocus={() => setIsFocused(isFocused ? styles.work : styles.ctn)}
                            onChange={(e) => handleSearchValue(e.target.value.toLowerCase())}
                        />
                        <div className={isFocused ? styles.work : styles.ctn}  >
                            {search.map((item, index) => 
                            <Link 
                                key={index}
                                target='_blank'
                                to={`/blog/${item.name.replace(/ /g, '').toLowerCase()}`}
                            >{item.name}
                            </Link>
                            )}
                        </div>
                    </div>
                    <div className={styles.companys}>
                        <Carousel/>
                    </div>
                </div>
                <About />
            </div>
        </section>
    )
}
