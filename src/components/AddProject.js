import React from 'react';
import * as Actions from '../actions/Actions';
import { RaisedButton } from 'material-ui';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import ProjectStore from '../stores/ProjectStore';

export default class AddProject extends React.Component {

    constructor() {
        super();

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleEndDateOnChange = this.handleEndDateOnChange.bind(this);
        this.handleStartDateOnChange = this.handleStartDateOnChange.bind(this);
        this.addProjectHandle = this.addProjectHandle.bind(this);
        this.state = {};

        this.initializeState();

    }

    initializeState(state) {
        if (!state) {
            this.state = {
                project: {
                    id: null,
                    title: null,
                    description: null,
                    owner: null,
                    startDate: null,
                    endDate: null
                }
            };
        } else {
            this.setState({
                project: {
                    id: null,
                    title: null,
                    description: null,
                    owner: null,
                    startDate: null,
                    endDate: null
                }
            });
        }
    }

    addProjectHandle(e) {
        Actions.ProjectActions.addProject(this.state.project);
        Actions.NotificationActions.projectAdded("Project added successfully");
        this.initializeState({ project: null });
    }

    handleEndDateOnChange(event, date) {
        var project = this.state.project;
        project.endDate = date.toDateString();

        this.setState({
            project
        });
    }

    handleStartDateOnChange(event, date) {
        var project = this.state.project;
        project.startDate = date.toDateString();

        this.setState({
            project
        });
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
            <div className="add-project">
                <div>
                    <h2>Create new project!</h2>
                </div>
                <div>
                    <TextField hintText="Title" floatingLabelText="Title" value={this.state.title} onChange={this.handleOnChange} ref="title" />
                </div>
                <div>
                    <TextField
                        multiLine={true}
                        rows={4}
                        rowsMax={8}
                        hintText="Description"
                        onChange={this.handleOnChange}
                        floatingLabelText="Description"
                        ref="description" />
                </div>
                <div>
                    <TextField hintText="Owner" floatingLabelText="Owner" ref="owner" onChange={this.handleOnChange} ref="owner" />
                </div>
                <div>
                    <DatePicker hintText="Start Date" floatingLabelText="Start Date" ref="startDate" onChange={this.handleStartDateOnChange} />
                </div>
                <div>
                    <DatePicker hintText="End Date" floatingLabelText="End Date" ref="endDate" onChange={this.handleEndDateOnChange} />
                </div>
                <br />
                <RaisedButton primary={true} onClick={this.addProjectHandle} label="Add Project"></RaisedButton>
                <br />
                <br />
            </div>
        );
    }
}