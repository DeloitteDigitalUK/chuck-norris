import * as React from 'react';
import Joke from '../Joke';
import { IJoke } from '../../ducks/JokesDucks';

const styles = require('./JokesList.css');

interface IProps {
    jokes: IJoke[];
}

const JokesList = ({ jokes }: IProps) => (
  <div className={styles.jokes}>
    <div className={styles.jokes__header}>
        <h2>{jokes.length} jokes found</h2>
    </div>
    {jokes.map(joke => <Joke joke={joke} key={joke.id} />)}
  </div>
);

export default JokesList;