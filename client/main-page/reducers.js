import immutable from 'immutable';


import * as actions from './actions';

export default function(state = immutable.Map(), action) {
    if (action && action.type) {
        switch (action.type) {

            case actions.CHANGE_PAGE:
                return state.set('currentPage', action.page);

            default:
                return state;
        }
    }
    return state;
}
