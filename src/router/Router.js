import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import ProjectList from '../components/ProjectList';
import AddProject from '../components/AddProject';
import ProjectDetails from '../components/ProjectDetails';

export default class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={AddProject} />
                        <Route exact path="/projects" component={ProjectList} />
                        <Route path="/project/:id" component={ProjectDetails} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}