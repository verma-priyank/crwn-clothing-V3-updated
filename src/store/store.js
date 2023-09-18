import { compose , applyMiddleware , createStore} from "redux";
import {  persistStore , persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
const middleware = [logger] 

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
  };
const persistedReducer = persistReducer(persistConfig , rootReducer)
const composedEnhancers = compose(applyMiddleware(...middleware))

export const store = createStore(persistedReducer, undefined , composedEnhancers )

export const persistor = persistStore(store)