import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { Link, BrowserRouter, history } from 'react-router-dom';

const iconStyles = {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10
};

const newProjectIcon = <FontIcon style={iconStyles} className="material-icons">lightbulb_outline</FontIcon>;
const projectsIcon = <FontIcon style={iconStyles} className="material-icons">assignment</FontIcon>;
const detailsIcon = <FontIcon style={iconStyles} className="material-icons">details</FontIcon>;



export default class Nav extends React.Component {

    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({ selectedIndex: index });

    render() {
        return (
            <Paper zDepth={1} >
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="New Project"
                        icon={newProjectIcon}
                        style={iconStyles}
                        containerElement={<Link to="/" />}
                        onClick={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        icon={projectsIcon}
                        label="Projects"
                        style={iconStyles}
                        containerElement={<Link to="/projects" />}
                        onClick={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        icon={detailsIcon}
                        label="Details"
                        style={iconStyles}
                        containerElement={<Link to="/projects/:id" />}
                        onClick={() => this.select(2)}
                    />
                </BottomNavigation>
            </Paper >
        );
    }
}