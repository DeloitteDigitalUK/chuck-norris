import { Observable } from 'rxjs';
import { Epic, combineEpics } from 'redux-observable';
import { actions, actionCreators, IAction, IState } from '../ducks/JokesDucks';

const getSearchUrl = (query: string) => `/jokes/search?query=${encodeURIComponent(query)}`;

const searchJokesEpic: Epic<IAction, IState> = (action$, store, deps) => {
    const { 
        searchJokesLoading,
        searchJokesSuccess,
        searchJokesError
    } = actionCreators;

    return action$.ofType(actions.JOKES_SEARCH)
        .debounceTime(200, deps.scheduler)
        .filter(action => action.payload !== '')
        .switchMap((action) => {
            const payload = action.payload as string;

            // loading state in UI
            const loading = Observable.of(searchJokesLoading(true));

            // external API call
            const request = deps.ajax.getJSON(getSearchUrl(payload))
                .map((response: any) => searchJokesSuccess(response.result || []))
                .catch((err: Error) => Observable.of(searchJokesError(err)));
        
            return Observable.concat(
                loading,
                request,
            );
        });
};

export const rootEpic = combineEpics(searchJokesEpic);
