import React from 'react';
import styles from './myStyles.module.css';

const Stylesheet = (props) => {
    const className = props.primary ?  styles.primary  : '';
    return <p className = { `${ className } ${ styles.fontXl }` }>Stylesheets</p>;
}

export default Stylesheet;
