import React from 'react';
import styles from './search.module.css';

const TopSearch = () => {
    return (
        <div className={styles.Brand_list}>
            <ul>
                <a className={styles.Brand_box} href='!#'>
                    <img src='./images/search/1.png' alt='brand' />
                </a>
                <a className={styles.Brand_box} href='!#'>
                    <img src='./images/search/2.png' alt='brand' />
                </a>
                <a className={styles.Brand_box} href='!#'>
                    <img src='./images/search/3.png' alt='brand' />
                </a>
                <a className={styles.Brand_box} href='!#'>
                    <img src='./images/search/4.png' alt='brand' />
                </a>
                <a className={styles.Brand_box} href='!#'>
                    <img src='./images/search/5.png' alt='brand' />
                </a>
                <a className={styles.Brand_box} href='!#'>
                    <img src='./images/search/6.png' alt='brand' />
                </a>
            </ul>
        </div>
    )
}

export default TopSearch;