import React from 'react';

import mainHeader from '../main-header';

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../theme';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { open: false };
        this.constructor.childContextTypes = {
            muiTheme: React.PropTypes.object
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(MyRawTheme)
        };
    }

    handleToggle() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div>
                <mainHeader.Component />
                <RaisedButton
                    label="Toggle LeftNav"
                    onTouchTap={this.handleToggle}
                    />
                <LeftNav open={this.state.open}>
                  <MenuItem>Menu Item</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
                </LeftNav>
            </div>
        );
    }
}
MainPage.displayName = 'MainPage';

MainPage.propTypes = {
};
