import * as React from 'react';

const styles = require('./Spinner.css');

interface IProps {
    isLoading: boolean;
}

const getClasses = (isLoading: boolean) => isLoading
    ? styles.spinner
    : `${styles.spinner} ${styles['spinner--hidden']}`;

const Spinner = ({ isLoading }: IProps) => (
    <div className={getClasses(isLoading)} />
);

export default Spinner;