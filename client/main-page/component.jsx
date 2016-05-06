import React from 'react';

import mainHeader from '../main-header';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <mainHeader.Component />
            </div>
        );
    }
}
MainPage.displayName = 'MainPage';

MainPage.propTypes = {
};
