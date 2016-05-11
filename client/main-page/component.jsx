import React from 'react';

import { indigo500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import mainHeader from '../main-header';

import introSlide from '../intro-slide';
import reactSlide from '../react-slide';
import reduxSlide from '../redux-slide';

const components = {
    intro: introSlide.Component,
    react: reactSlide.Component,
    redux: reduxSlide.Component
};

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo500,
        pickerHeaderColor: indigo500
    },
    appBar: {
        height: 50
    }
});

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.renderSlide = this.renderSlide.bind(this);
    }

    renderSlide() {
        const Comp = components[this.props.currentPage || 'intro'];

        return <Comp />;
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <mainHeader.Component changePage={this.props.changePage} />
                    <div className="slide-body">
                        {this.renderSlide()}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
MainPage.displayName = 'MainPage';

MainPage.propTypes = {
    changePage: React.PropTypes.func,
    currentPage: React.PropTypes.string
};
