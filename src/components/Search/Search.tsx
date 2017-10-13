import * as React from 'react';
import Spinner from '../Spinner';

const styles = require('./Search.css');

interface IProps {
    onSearchJokes: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isLoading: boolean;
}

const Search = ({ onSearchJokes, isLoading }: IProps) => (
  <div className={styles.search}>
    <div className={styles.search__container}>
      <label htmlFor="search" className={styles['visually-hidden']}>Search</label>
      <input
        name="search"
        id="search"
        type="search"
        placeholder="type here to search for jokes..."
        onChange={onSearchJokes}
      />
      <Spinner isLoading={isLoading} />
    </div>
  </div>
);

export default Search;