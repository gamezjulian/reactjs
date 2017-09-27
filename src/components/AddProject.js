import React from 'react';
import * as ProjectActions from '../actions/ProjectActions';
import { FlatButton } from 'material-ui';
import TextField from 'material-ui/TextField';

export default class AddProject extends React.Component {

    constructor() {
        super();

        this.handleOnChange = this.handleOnChange.bind(this);
        this.addProjectHandle = this.addProjectHandle.bind(this);
        this.state = { project: {} };
    }

    addProjectHandle(e) {
        ProjectActions.addProject(this.state.project);
    }

    handleOnChange() {
        const id = Date.now();

        this.setState({
            project: {
                id: id,
                title: this.refs.title.getValue(),
                description: this.refs.description.getValue(),
                owner: this.refs.owner.getValue()
            }
        });
    }

    render() {
        return (
            <div className>
                <div>
                    <h2>Create new project!</h2>
                </div>
                <div>
                    <TextField hintText="Title" value={this.props.title} onChange={this.handleOnChange} ref="title" />
                </div>
                <div>
                    <TextField hintText="Description" onChange={this.handleOnChange} ref="description" />
                </div>
                <div>
                    <TextField hintText="Owner" ref="owner" onChange={this.handleOnChange} ref="owner" />
                </div>
                <br />
                <FlatButton onClick={this.addProjectHandle}>Add Project</FlatButton>
                <br />
                <br />
            </div>
        );
    }
}