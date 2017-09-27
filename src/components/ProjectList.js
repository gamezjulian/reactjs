import React from 'react';

import Project from './Project';
import ProjectStore from '../stores/ProjectStore';
import AddProject from './AddProject';

export default class ProjectList extends React.Component {

    constructor() {
        super();

        this.state = {
            projects: ProjectStore.getProjects()
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

    render() {

        const { projects } = this.state;
        const projs = projects.map((p) => {
            return (
                <div key={p.id}>
                    <Project title={p.title} id={p.id} description={p.description} owner={p.owner} />
                    <br />
                </div>
            )
        })

        return (
            <div>
                <AddProject />
                {projs}
            </div>
        );
    }
}