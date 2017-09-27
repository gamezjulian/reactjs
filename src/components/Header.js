import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome to Project Manager</h2>
                    </div>
                </div>                            
            </header>
        )
    }
}