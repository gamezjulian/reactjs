import React, { Component } from 'react';

//Components
import Header from './components/Header';
import Layout from './components/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Layout />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
