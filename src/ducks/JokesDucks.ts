// Interfaces
export interface IJoke {
    icon_url: string;
    id: string;
    url: string;
    value: string;
}

export interface IState {
    jokes: IJoke[];
    isLoading: boolean;
    hasError: boolean;
    query: string;
}

export interface IAction {
    type: string;
    payload?: any;
}

// Actions
const JOKES_LOADING = 'JOKES_LOADING';
const JOKES_SEARCH = 'JOKES_SEARCH';
const JOKES_SEARCH_SUCCESS = 'JOKES_SEARCH_SUCCESS';
const JOKES_SEARCH_ERROR = 'JOKES_SEARCH_ERROR';

export const actions = {
    JOKES_LOADING,
    JOKES_SEARCH,
    JOKES_SEARCH_SUCCESS,
    JOKES_SEARCH_ERROR
};

// Action creators
export const searchJokesLoading = (isLoading: boolean) => ({
    type: JOKES_LOADING,
    payload: isLoading
});

export const searchJokes = (query: string) => ({
    type: JOKES_SEARCH,
    payload: query
});

export const searchJokesSuccess = (jokes: IJoke[]) => ({
    type: JOKES_SEARCH_SUCCESS,
    payload: jokes
});

export const searchJokesError = (err: Error) => ({
    type: JOKES_SEARCH_ERROR,
    payload: err.message
});

export const actionCreators = {
    searchJokes,
    searchJokesLoading,
    searchJokesSuccess,
    searchJokesError
};

// Reducers
const initialState = {
    jokes: [],
    isLoading: false,
    hasError: false,
    query: ''
};

const REDUCERS = {
    [JOKES_LOADING]: (state: IState, action: IAction) => ({
        ...state,
        isLoading: action.payload
    }),

    [JOKES_SEARCH]: (state: IState, action: IAction) => ({
        ...state,
        jokes: [],
        hasError: false,
        query: action.payload
    }),

    [JOKES_SEARCH_SUCCESS]: (state: IState, action: IAction) => ({
        ...state,
        jokes: action.payload,
        hasError: false,
        isLoading: false
    }),

    [JOKES_SEARCH_ERROR]: (state: IState, action: IAction) => ({
        ...state,
        hasError: true,
        isLoading: false
    })
};

export default function reducer(
    state: IState = initialState, action: IAction
) {
    const handler = REDUCERS[action.type];
    return handler ? handler(state, action) : state;
}