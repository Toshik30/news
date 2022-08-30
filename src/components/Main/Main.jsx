import styles from './style.module.scss';
import Carousel from './Swiper/Carousel';
import About from '../About/About';
import DatalistInput from 'react-datalist-input';
import { DETAILED_NEWS } from '../selectors/dataNews';
import { Link } from 'react-router-dom';
import React, { useState, useMemo, useCallback } from 'react';
export default function Main() {

    const [, setItem] = useState();
    const onSelect = useCallback((selectedItem) => {
        console.log('selectedItem', selectedItem);
        setItem(selectedItem);
      }, []);
      const items = useMemo( () => DETAILED_NEWS.map((item, index) => ({
            id: item.name,
            value: item.name,
            key: index,
            ...item,
            node: <Link to={`/blog/${item.name.replace(/ /g, '').toLowerCase()}`}>{item.name}</Link>
          })),
        [],
      );
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
                    <DatalistInput
                        placeholder="Search...." 
                        items={items} 
                        onSelect={onSelect}
                    />
                    <div className={styles.companys}>
                        <Carousel/>
                    </div>
                </div>
                <About />
            </div>
        </section>
    )
}
