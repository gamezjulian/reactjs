import React, { Component } from 'react';

//Components
import ProjectList from './components/ProjectList';
import Header from './components/Header';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Layout />
      </div>
    );
  }
}

export default App;
