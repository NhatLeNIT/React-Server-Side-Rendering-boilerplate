import React, { Component } from 'react';
import styles from './About.scss';
export default class About extends Component {
    render() {
        return (
            <div className={styles.About + ' abc'}>About</div>
        )
    }
}

export function getAboutData() {
    console.log('getAboutData');
}