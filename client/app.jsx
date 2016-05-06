import immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    applyMiddleware,
    createStore,
    compose
} from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutable';
import createLogger from 'redux-logger';

import mainPage from './main-page';

import DevTools from './dev-tools';

const middlewares = [];


function stateTransformer(state) {
    return state.toJS();
}


if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({
        duration: true,
        timestamp: true,
        stateTransformer
    });

    middlewares.push(logger);
}

const composed = [applyMiddleware(...middlewares)];

if (process.env.NODE_ENV !== 'production') {
    composed.push(DevTools.instrument());
}
const reducers = combineReducers({
    ...mainPage.combinedReducers
});

const enhancer = compose(...composed);
const store = createStore(reducers, immutable.Map(), enhancer);
// const initFirstBuilder = {
//     items: {
//         one: {
//             num: 1,
//             name: "one",
//             value: false
//         },
//         two: {
//             num: 2,
//             name: "two",
//             value: false
//         },
//         three: {
//             num: 3,
//             name: "three",
//             value: false
//         },
//         four: {
//             num: 4,
//             name: "four",
//             value: false
//         }
//     }
// };
// const initPlatform = {
//     vegetable: "potatoe"
// };

// store.dispatch(firstBuilder.actionCreators.initFirstBuilder(initFirstBuilder));
// store.dispatch(genericPlatform.actionCreators.initPlatform(initPlatform));

function getDevTools() {
    if (process.env.NODE_ENV !== 'production') {
        return <DevTools />;
    }
    return null;
}


ReactDOM.render(
    <Provider store={store}>
        <div>
            <mainPage.Container />
            {getDevTools()}
        </div>
    </Provider>,
    document.getElementById('app') // eslint-disable-line no-undef
);

