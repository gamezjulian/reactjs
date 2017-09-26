import React from 'react';
import * as ProjectActions from '../actions/ProjectActions';

export default class AddProject extends React.Component {
    constructor() {
        super();
    }

    addProjectHandle = (e) => {        
        ProjectActions.addProject(this.state.project);

    }

    render() {
        return (
            <div>
                <div>Title:
                    <input value={this.props.title} onChange={this.handleOnChange} ref="title" />
                </div>
                <div>Description:
                    <input ref="description" onChange={this.handleOnChange} />
                </div>
                <div>Owner:
                    <input ref="owner" onChange={this.handleOnChange} />
                </div>
                <br />
                <button type='submit' onClick={this.addProjectHandle} >Add Project</button>
                <br />
                <br />
            </div>
        );
    }

    handleOnChange = (e) => {
        this.setState({
            project: {
                title: this.refs.title.value,
                description: this.refs.description.value,
                owner: this.refs.owner.value
            }
        });        
    }
}