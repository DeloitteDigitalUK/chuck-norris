import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Action } from 'redux';
import { AppContainer } from './AppContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    isLoading: false,
    hasError: false,
    query: '',
    jokes: [],
    searchJokes: (query: string) => { const action: Action = { type: 'TEST'}; return action; }    
  };

  ReactDOM.render(<AppContainer  {...props} />, div);
});
