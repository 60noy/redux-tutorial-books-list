import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BookList from './containers/BookList';
import BookDisplay from './containers/BookDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList />
        <BookDisplay />
      </div>
    );
  }
}

export default App;
