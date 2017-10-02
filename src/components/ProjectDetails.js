import React from 'react';
import { withRouter } from 'react-router-dom';

import ProjectStore from '../stores/ProjectStore';

class ProjectDetails extends React.Component {

    constructor(props) {
        super(props)

        this.id = this.props.match.params.id;

        this.loadProject(this.id);
    }

    loadProject(id) {
        let project = ProjectStore.getProject(id);
        let title = "";

        if (project) {
            title = project.title;
            this.state = {
                title: title
            };
        } else {
            console.log(`Project not found: ${this.id}`)
        }
    }

    render() {

        return (
            <div>
                {this.state.title}
            </div>
        );
    }
}

export default withRouter(ProjectDetails);