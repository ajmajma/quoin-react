import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class MainHeader extends React.Component {
    constructor(props) {
        super(props);

        this.menuClick = this.menuClick.bind(this);
    }

    menuClick(event, value) {
        this.props.changePage(value);
    }

    render() {
        return (
            <AppBar
                title="React Redux Presentation"
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                iconElementRight={
                    <IconMenu
                        iconButtonElement={
                          <IconButton><MoreVertIcon /></IconButton>
                        }
                        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                        onChange={this.menuClick}
                        value={this.props.currentPage}
                        >
                        <MenuItem primaryText="Intro" value="intro" />
                        <MenuItem primaryText="React" value="react" />
                        <MenuItem primaryText="Redux" value="redux" />
                    </IconMenu>
                }
                />
        );
    }
}
MainHeader.displayName = 'MainHeader';

MainHeader.propTypes = {
    changePage: React.PropTypes.func,
    currentPage: React.PropTypes.string
};
