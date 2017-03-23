import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList.js';
import Friend from './components/Friend.js';



class App extends Component {
  render() {
    return (
      <div>
        <h1>The <strong>Facebook</strong> Friend Machine</h1>
        <div className="friends">
          <FriendsList />
        </div>
      </div>
    );
  }
}

export default App;
