import React from 'react';
import styles from '../styles/index.module.css';
import Seo from "./Seo";


export default function MainContainer() {
    return (
        <div className={styles.container}>
            <Seo title="Home" />
            <div className={styles.main_container}>
                <h1 className={styles.main_text}>Hello.</h1>
                <h2 className={styles.hide_text}>This my Portfolio Site.</h2>
            </div>
            <div className={styles.content_line}>Contents</div>
        </div>
    )
}