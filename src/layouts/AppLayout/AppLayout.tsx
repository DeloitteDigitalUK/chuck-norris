import * as React from 'react';
import Search from '../../components/Search';
import { IConnectedProps } from '../../containers/AppContainer/AppContainer';
import JokesList from '../../components/JokesList';
import Header from '../../components/Header';
import Error from '../../components/Error';

const styles = require('./AppLayout.css');

interface IProps extends IConnectedProps {
    onSearchJokes: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppLayout = ({ jokes, onSearchJokes, isLoading, hasError, query }: IProps) => (
  <div className={styles.app}>
    <Header />
    <Search onSearchJokes={onSearchJokes} isLoading={isLoading} />
    {hasError && <Error />}
    {!hasError && jokes && !!jokes.length && <JokesList jokes={jokes} />}
  </div>
);

export default AppLayout;
