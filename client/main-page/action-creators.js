import * as actions from './actions';

function changePageActionCreator(type, page) {
    return {
        type,
        page
    };
}

export function changePage(dispatch, page) {
    dispatch(changePageActionCreator(actions.CHANGE_PAGE, page));
}

