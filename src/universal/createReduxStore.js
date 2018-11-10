import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../redux/reducers';

export default function createReduxStore({ preloadedState, server } = {}) {
    let enhancer;

    if (process.env.NODE_ENV !== 'production' && !server) {
        enhancer = applyMiddleware(thunkMiddleware/* , loggerMiddleware */);
    } else {
        enhancer = applyMiddleware(thunkMiddleware);
    }

    return createStore(reducers, preloadedState, enhancer);
}


// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from '../redux/reducers';

// export default () => {
//     const store = createStore(reducers, {}, applyMiddleware(thunk));

//     return store;
// }
