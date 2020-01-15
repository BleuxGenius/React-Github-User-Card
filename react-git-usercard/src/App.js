import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  constructor() {
    super()
    this.state = {
        name: '',
        email: '',
        login: '',
        avatar: '',
        follower: []
    }
}
  componentDidMount() {
    axios
    // fetch your data 
    .get("https://api.github.com/users/Bleuxgenius")
    .then(res => {
        this.setState({
            name: res.data.name,
            email: res.data.email,
            login: res.data.login,
            avatar: res.data.avatar_url,
        });
        console.log(res);
    })
    .catch(err => console.log(err));

    axios
    .get("https://api.github.com/users/Bleuxgenius")
    .then(res => {
      console.log(`follower )
    })
  }




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
