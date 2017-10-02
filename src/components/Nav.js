import React from 'react';

import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

import { withRouter } from 'react-router-dom';

class Nav extends React.Component {

    constructor(props) {
        super(props)

        this.state = { value: 0 };
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
            <BottomNavigation value={value} onChange={this.handleChange} showLabels>
                <BottomNavigationButton
                    label="New Project"
                    icon={<RestoreIcon />}
                    onClick={this.handleOnClick('/')}
                />
                <BottomNavigationButton
                    icon={<FavoriteIcon />}
                    label="Projects"
                    onClick={this.handleOnClick('/projects')}
                />
                <BottomNavigationButton
                    icon={<LocationOnIcon />}
                    label="Details"
                    onClick={this.handleOnClick('/project/')}
                />
            </BottomNavigation>
        );
    }
}

export default withRouter(Nav);