import React from 'react'
import styles from './style.module.scss';
import { DATA_NEWS } from '../selectors/dataNews';
import Reviews from '../Main/Reviews/Reviews';
import ReviewsList from '../Main/Reviews/ReviewsList';
// import DragAndDrop from '../Main/Reviews/DragAndDrop';
import { useAuth0 } from '@auth0/auth0-react';
export default function About() {
    const { isAuthenticated } = useAuth0()
    return (
        <div className="container">
            <div className={styles.news__list}>
                {DATA_NEWS.map((item, index) => (
                    <div className={styles.news__block} key={index}>
                        <div className={styles.news__image}>
                            <img src={item.image} alt="img" />
                            <span>{item.imageDescription}</span>
                        </div>
                        <div className={styles.news__description}>
                            <h2>{item.heading}</h2>
                            <p>{item.description}</p>
                            <button className={styles.button_primary}>Learn more</button>
                        </div>
                    </div>
                ))}
            </div>
            <ReviewsList></ReviewsList>
            {isAuthenticated && (
                <Reviews></Reviews>
            )}

            {/* <DragAndDrop></DragAndDrop> */}
        </div>
    )
}
