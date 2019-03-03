import React, { Component } from 'react';
import './App.css';
import SimpleComponent from './simplecomponent'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SimpleComponent />
        </header>
      </div>
    );
  }
}

export default App;
