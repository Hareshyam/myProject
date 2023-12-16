import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { SignupReducer } from './signupReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["signupData"]
}

const rootReducer = combineReducers({
    signupData: SignupReducer,

})

export default persistReducer(persistConfig, rootReducer);