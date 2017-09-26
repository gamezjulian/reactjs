import React from 'react';

export default class Project extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div>Title: {this.props.title}</div>
                <div>Description: {this.props.description}</div>
                <div>Owner: {this.props.owner}</div>
            </div>
        );
    }
}