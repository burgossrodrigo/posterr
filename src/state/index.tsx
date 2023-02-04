import { createContext, useReducer } from 'react'
import { IPostInput } from '../interfaces';

const initialState = {
  modal: false,
  input: { 
    quote: false, 
    repost: false, 
    quoteId: undefined, 
    repostId: undefined,
    refresh: false
  },
  refresh: false
};

type AppState = typeof initialState;

type ACTIONTYPE =
  | { type: "OPEN_MODAL"; payload: boolean }
  | { type: "CLOSE_MODAL"; payload: boolean }
  | { type: "SET_INPUT"; payload: any | IPostInput }
  | { type: 'REFRESH'; payload: boolean}

function reducer(state: AppState, action: ACTIONTYPE) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, modal: true };
    case "CLOSE_MODAL":
      return { ...state, modal: false };
    case "SET_INPUT":
      return { ...state, input: { ...state.input, ...action.payload } };
    case "REFRESH":
      return { ...state, refresh: action.payload }  
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<ACTIONTYPE>;
}>({ state: initialState, dispatch: () => {} });

export function AppProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext };