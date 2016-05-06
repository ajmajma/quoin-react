import * as actions from './actions';
import * as actionCreators from './action-creators';
import Component from './component';
import container from './container';
import namespace from './namespace';
import reducers from './reducers';

export default {
    actions,
    actionCreators,
    Component,
    container,
    Container: container(),
    combinedReducers: {
        [namespace]: reducers
    }
};
