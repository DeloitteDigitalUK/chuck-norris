import { createStore, applyMiddleware, compose } from 'redux';
import jokesReducer from './ducks/JokesDucks';

export function configureStore(deps: {} = {})  {

  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    jokesReducer,
    composeEnhancers(
      applyMiddleware()
    )
  );
}