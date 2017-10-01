import React from 'react';

import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

import { withRouter } from 'react-router-dom';

const iconStyles = {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10
};

class Nav extends React.Component {

    constructor(props) {
        super(props)

        this.state = { value: 0 };
        // this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleOnClick = name => e => {
        this.props.history.push(name);        
    };

    render() {
        const { value } = this.state;

        return (
            <BottomNavigation value={value} showLabels>
                <BottomNavigationButton
                    label="New Project"
                    icon={<RestoreIcon />}
                    style={iconStyles}
                    onClick={this.handleOnClick('/')}
                />
                <BottomNavigationButton
                    icon={<FavoriteIcon />}
                    label="Projects"
                    style={iconStyles}
                    onClick={this.handleOnClick('/projects')}
                />
                <BottomNavigationButton
                    icon={<LocationOnIcon />}
                    label="Details"
                    style={iconStyles}
                    onClick={this.handleOnClick('/project/:id')}
                />
            </BottomNavigation>
        );
    }
}

export default withRouter(Nav);