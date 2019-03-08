import React, { Component } from 'react';
import './App.css';
import ContainerComponent from './containercomponent'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ContainerComponent />
        </header>
      </div>
    );
  }
}

export default App;
