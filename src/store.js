import rootReducer from './reducers/root'
import { createStore, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk';

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like here name, actionsBlacklist, actionsCreators or immutablejs support
      }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  );

export default createStore(rootReducer,enhancer);