import React from 'react';

// components
import * as Actions from '../actions/Actions';

// material
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

export default class AddProject extends React.Component {
    constructor(props) {
        super(props);
        this.initializeState();
        this.addProjectHandle = this.addProjectHandle.bind(this);
    }

    initializeState(state) {
        if (!state) {
            this.state = {
                project: {
                    id: '',
                    title: '',
                    description: '',
                    owner: '',
                    startDate: '',
                    endDate: ''
                }
            };
        } else {
            this.setState({
                project: {
                    id: '',
                    title: '',
                    description: '',
                    owner: '',
                    startDate: '',
                    endDate: ''
                }
            });
        }
    }

    addProjectHandle(e) {
        const project = {
            id: Date.now(),
            title: this.state.project.title,
            description: this.state.project.description,
            owner: this.state.project.owner,
            startDate: this.state.project.startDate,
            endDate: this.state.project.endDate
        }
        Actions.ProjectActions.addProject(project);
        Actions.NotificationActions.projectAdded("Project added successfully");
        this.initializeState({ project: null });
    }

    handleOnChange = name => event => {
        var project = this.state.project;
        project[name] = event.target.value;
        this.setState({ project });
    };

    render() {
        return (
            <form>
                <Grid className="add-project" container spacing={24}>
                    <Grid item xs={12}>
                        <h2>Create new project!</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Title"
                            placeholder="Title"
                            value={this.state.project.title}
                            onChange={this.handleOnChange('title')} />
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
                            value={this.state.project.description} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Owner"
                            placeholder="Owner"
                            onChange={this.handleOnChange('owner')}
                            value={this.state.project.owner} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            label="Start Date"
                            type="date"
                            value={this.state.project.startDate}
                            onChange={this.handleOnChange('startDate')} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            type="date"
                            onChange={this.handleOnChange('endDate')}
                            value={this.state.project.endDate}
                            label="End Date" />
                    </Grid>
                    <br />
                    <Grid item xs={12}>
                        <Button color="primary" onClick={this.addProjectHandle}>Add Project</Button>
                    </Grid>
                    <br />
                    <br />
                </Grid>
            </form>
        );
    }
}