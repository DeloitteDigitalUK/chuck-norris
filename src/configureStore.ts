import { createStore, applyMiddleware, compose } from 'redux';
import jokesReducer from './ducks/JokesDucks';
import { ajax } from 'rxjs/observable/dom/ajax';

import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics/index';

export function configureStore(deps: {} = {})  {
  const epicMiddleware = createEpicMiddleware(rootEpic, {
    dependencies: {
      ajax,
      ...deps
    }
  });

  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    jokesReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  );
}