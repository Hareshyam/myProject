//Using Thunk
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer/Index';
import ReduxThunk from 'redux-thunk';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middlewares = [ReduxThunk]

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))

);
export const persistor = persistStore(store);


//Using toolkit
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducer/Index';
// import { persistStore } from 'redux-persist';
// const store = configureStore({
//     reducer : rootReducer,  // Set the rootReducer here
// });

// const persistor = persistStore(store);

// export {store, persistor};