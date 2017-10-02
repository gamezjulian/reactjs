import React from 'react';

import ProjectStore from '../stores/ProjectStore';

import * as Actions from '../actions/Actions';
import ConfirmationDialog from './ConfirmationDialog';

// material

import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Table, {
    TableBody,
    TableCell,    
    TableHead,    
    TableRow    
} from 'material-ui/Table';


export default class ProjectList extends React.Component {

    constructor() {
        super();

        this.isSelected = this.isSelected.bind(this);

        this.state = {
            projects: ProjectStore.getProjects(),
            selected: '',
            open: false
        };
    }

    getProjects = () => {
        this.setState({ projects: ProjectStore.getProjects() });
    }

    removeProject = () => {
        let { selected } = this.state;
        const projects = ProjectStore.getProjects();
        const proj = projects.find(x => x.id === selected);
        Actions.ProjectActions.removeProject(proj.id);
        this.setState({
            selected: ''
        });
    }


    handleClick = (event, id) => {
        if (this.state.selected !== id) {
            this.setState({
                selected: id
            })
        } else {
            this.setState({
                selected: ''
            })
        }
    }
 
    goToDetails = () => {
        this.props.history.push(`/project/${this.state.selected}`);
    }

    isSelected = (id) => {
        return this.state.selected === id
    };

    render() {
        const { projects } = this.state;
        const projs = projects.map((p, index) => {

            const isSelected = this.isSelected(p.id);
            return (
                <TableRow
                    hover
                    key={p.id}
                    onClick={event => this.handleClick(event, p.id)}
                    selected={isSelected}
                >
                    <TableCell>
                        <Checkbox checked={isSelected} ></Checkbox>
                    </TableCell>
                    <TableCell >{p.id}</TableCell >
                    <TableCell >{p.title}</TableCell >
                    <TableCell >{p.description}</TableCell >
                    <TableCell >{p.owner}</TableCell >
                    <TableCell >{p.startDate}</TableCell >
                    <TableCell >{p.endDate}</TableCell >
                </TableRow>
            )
        })

        return (
            <div className="project-list">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                            </TableCell>
                            <TableCell>ID</TableCell >
                            <TableCell>Title</TableCell >
                            <TableCell>Description</TableCell >
                            <TableCell>Owner</TableCell>
                            <TableCell>Start Date</TableCell >
                            <TableCell>End Date</TableCell >
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projs}
                    </TableBody>
                </Table>
                <br />
                <Divider />
                <div>
                    <ConfirmationDialog
                        title={'Remove project'}
                        content={'You are about to delete the project. Are you sure?'}
                        disabled={!this.state.selected}
                        onRemove={this.removeProject}
                    />
                    <Button color="primary" disabled={!this.state.selected} onClick={this.goToDetails} >Details</Button>
                </div>
            </div>
        );
    }
}