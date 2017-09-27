import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProjectList from './ProjectList';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={ProjectList} />
                        <Route exact path="/projects" component={ProjectList} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}