import React from 'react';

import ProjectStore from '../stores/ProjectStore';
import AddProject from './AddProject';
import * as Actions from '../actions/Actions';
import RemoveProject from './RemoveProject';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import NotificationStore from '../stores/NotificationStore';

// material
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


export default class ProjectList extends React.Component {

    constructor() {
        super();

        this.rowSelectionHandler = this.rowSelectionHandler.bind(this);
        this.removeProjectHandler = this.removeProjectHandler.bind(this);
        this.isSelected = this.isSelected.bind(this);
        this.openRemoveModal = this.openRemoveModal.bind(this);
        this.closeRemoveModal = this.closeRemoveModal.bind(this);

        this.state = {
            projects: ProjectStore.getProjects(),
            selected: [],
            open: false
        };
    }

    componentWillMount() {
        ProjectStore.on("project_added", this.getProjects)
    }

    componentWillUnmount() {
        ProjectStore.removeListener("project_added", this.getProjects);
    }

    getProjects = () => {
        this.setState({ projects: ProjectStore.getProjects() });
    }

    removeProjectHandler = () => {
        let { selected } = this.state;
        const projects = ProjectStore.getProjects();
        const proj = projects[selected[0]];
        Actions.ProjectActions.removeProject(proj.id);
        this.setState({
            open: false,
            selected: []
        });
    }

    rowSelectionHandler(selectedRows) {
        if (selectedRows.length) {
            this.setState({
                selected: selectedRows
            });
        } else {
            this.setState({
                selected: []
            });
        }
    }

    closeRemoveModal() {
        this.setState({
            open: false
        });
    }

    openRemoveModal() {
        this.setState({
            open: this.state.selected.length != 0
        });
    }

    isSelected(index) {
        return this.state.selected.indexOf(index) !== -1;
    };

    render() {

        const { projects } = this.state;
        const projs = projects.map((p, index) => {
            return (
                <TableRow key={p.id} selected={this.isSelected(index)}>
                    <TableRowColumn>{p.id}</TableRowColumn>
                    <TableRowColumn>{p.title}</TableRowColumn>
                    <TableRowColumn>{p.description}</TableRowColumn>
                    <TableRowColumn>{p.owner}</TableRowColumn>
                    <TableRowColumn>{p.startDate}</TableRowColumn>
                    <TableRowColumn>{p.endDate}</TableRowColumn>
                </TableRow>
            )
        })

        return (
            <div>
                <Table onRowSelection={this.rowSelectionHandler}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Title</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Owner</TableHeaderColumn>
                            <TableHeaderColumn>Start Date</TableHeaderColumn>
                            <TableHeaderColumn>End Date</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        deselectOnClickaway={false}
                        displayRowCheckbox={true}>
                        {projs}
                    </TableBody>
                </Table>

                {this.state.open ?
                    <RemoveProject onRemove={this.removeProjectHandler} onClose={this.closeRemoveModal} />
                    : null
                }

                <br />
                <Divider />
                <div>
                    <RaisedButton primary={true} label="Delete" disabled={!this.state.selected.length} onClick={this.openRemoveModal} />
                    <RaisedButton primary={true} label="View details" disabled={!this.state.selected.length} />
                </div>
            </div>
        );
    }
}