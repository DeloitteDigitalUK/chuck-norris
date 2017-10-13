import * as React from 'react';
import { IJoke } from '../../ducks/JokesDucks';

const styles = require('./Joke.css');

interface IProps {
    joke: IJoke;
}

const Joke = ({ joke }: IProps) => (
  <div className={styles.joke}>
    <p>{joke.value}</p>
  </div>
);

export default Joke;