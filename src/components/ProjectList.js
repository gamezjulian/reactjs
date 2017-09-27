import React from 'react';

import ProjectStore from '../stores/ProjectStore';
import AddProject from './AddProject';
import * as ProjectActions from '../actions/ProjectActions';
import RemoveProject from './RemoveProject';

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

        this.handleRowSelection = this.handleRowSelection.bind(this);
        this.removeProjectHandler = this.removeProjectHandler.bind(this);
        this.isSelected = this.isSelected.bind(this);

        this.state = {
            projects: ProjectStore.getProjects(),
            selected: [],
            open: false
        };
    }

    componentWillMount() {
        ProjectStore.on("change", this.getProjects)
    }

    componentWillUnmount() {
        ProjectStore.removeListener("change", this.getProjects);
    }

    getProjects = () => {
        this.setState({ projects: ProjectStore.getProjects() });
    }

    removeProjectHandler = () => {
        let { selected } = this.state;
        ProjectActions.removeProject(selected[0])
        this.setState({ open: false });
    }

    handleRowSelection(selectedRows) {
        if (selectedRows.length) {
            this.setState({
                open: true,
                selected: selectedRows
            });
        }
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
                    <TableRowColumn>{p.description}</TableRowColumn>
                    <TableRowColumn>{p.owner}</TableRowColumn>
                </TableRow>
            )
        })

        return (
            <div>
                <AddProject />
                <Table onRowSelection={this.handleRowSelection}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Owner</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={true}>
                        {projs}
                    </TableBody>
                </Table>
                <RemoveProject onRemove={this.removeProjectHandler} open={this.state.open} />
            </div >
        );
    }
}