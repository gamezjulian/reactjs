import React from 'react';

// components
import * as Actions from '../actions/Actions';

// material
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

export default class AddProject extends React.Component {
    constructor(props) {
        super(props);

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
        const project = {
            id: Date.now(),
            title: this.state.title,
            description: this.state.description,
            owner: this.state.owner,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }
        Actions.ProjectActions.addProject(project);
        Actions.NotificationActions.projectAdded("Project added successfully");
        this.initializeState({ project: null });
    }

    handleOnChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {

        return (
            <Grid className="add-project" container spacing={24}>
                <Grid item xs={12}>
                    <h2>Create new project!</h2>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        label="Title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleOnChange('title')}
                        id="title" />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        multiline
                        margin="none"
                        rows={4}
                        rowsMax={8}
                        label="Description"
                        onChange={this.handleOnChange('description')}
                        placeholder="Description"
                        id="description" />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Owner"
                        placeholder="Owner"
                        onChange={this.handleOnChange('owner')}
                        id="owner" />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="Start Date"
                        type="date"
                        id="startDate"
                        onChange={this.handleOnChange('startDate')} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="date"
                        id="endDate"
                        onChange={this.handleOnChange('endDate')}
                        label="End Date" />
                </Grid>
                <br />
                <Grid item xs={12}>
                    <Button color="primary" onClick={this.addProjectHandle}>Add Project</Button>
                </Grid>
                <br />
                <br />
            </Grid>
        );
    }
}