import React from 'react';
import * as ProjectActions from '../actions/ProjectActions';

export default class Project extends React.Component {

    removeProjectHandler = (e) => {
        let { id } = this.props;
        ProjectActions.removeProject(id)
    }

    render() {
        return (
            <div>
                <div>Id: {this.props.id}</div>
                <div>Title: {this.props.title}</div>
                <div>Description: {this.props.description}</div>
                <div>Owner: {this.props.owner}</div>
                <button onClick={this.removeProjectHandler}>Remove</button>
            </div>
        );
    }
}