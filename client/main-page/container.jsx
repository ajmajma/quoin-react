import immutable from 'immutable';
import { connect } from 'react-redux';

import * as actionCreators from './action-creators';
import MainPage from './component';
import namespace from './namespace';


function mapStateToProps(state) {
    const normalizedState = state.get(namespace, immutable.Map()).toJS();

    return {
        currentPage: normalizedState.currentPage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changePage: actionCreators.changePage.bind(null, dispatch)
    };
}

export default function(componentMain = MainPage) {
    return connect(mapStateToProps, mapDispatchToProps)(componentMain);
}
