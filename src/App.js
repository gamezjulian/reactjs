import React, { Component } from 'react';

//Components
import Header from './components/Header';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (

        <div className="container">
          <Header />
          <Layout />
        </div>
     
    );
  }
}

export default App;
