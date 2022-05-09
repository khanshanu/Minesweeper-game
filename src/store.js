import { createStore, applyMiddleware } from 'redux'
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./reducers";

let middlewares = [];
const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: "user",
    storage: storage,
    whitelist: [
        "authReducer"
    ], // which reducer want to store
};

if (process.env.NODE_ENV === "development") {
    const loggerMiddleware = createLogger();
    middlewares = [...middlewares, loggerMiddleware];
}

// middlewares.push(thunk);

const devTools =
    process.env.NODE_ENV === "production"
        ? applyMiddleware(sagaMiddleware)
        : composeWithDevTools(applyMiddleware(sagaMiddleware));

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, devTools);


const persistor = persistStore(store);

export { store, persistor };

