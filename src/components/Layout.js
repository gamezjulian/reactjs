import React from 'react';
import Router from '../router/Router';
import Notification from './Notification'

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Router />
                <Notification />
            </div>
        );
    }
}