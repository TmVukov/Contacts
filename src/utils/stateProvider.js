import React, { useReducer, createContext, useEffect, useContext } from 'react';
import { auth } from '../utils/firebase';
import { SET_CURRENT_USER, SET_LOADING } from '../constants';

export const StateContext = createContext(null);

const initialState = {
  contacts: [],
  name: '',
  surname: '',
  username: '',
  email: '',
  mobile: null,
  phone: null,
  currentUser: null,
  currentPage: 1,
  contactsPerPage: 10,
  loading: true,
};

function reducer(state, action) {  
  const { type, payload } = action;
  const { key, value} = payload;

  switch (type) {
    case type:
      if (state.hasOwnProperty(key)) {
        return { ...state, [key]: value };
      } else {
        throw new Error(`Unknown field: ${key}`);
      }
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
}

export default function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: { key: 'currentUser', value: user },
      });

      dispatch({
        type: SET_LOADING,
        payload: { key: 'loading', value: false },
      });
    });

    return () => unsubscribe();
  }, []);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {!state.loading && children}
    </StateContext.Provider>
  );
}

export function useStateContext() {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error('useStateContext must be used within StateContextProvider');
  }

  return context;
}
