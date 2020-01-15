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
    // then set the state 
    .then(res => {
        this.setState({
            name: res.data.name,
            email: res.data.email,
            login: res.data.login,
            avatar: res.data.avatar_url,
        });
        console.log(res);
    })
    .catch(err => console.log(err))

    axios
    .get("https://api.github.com/users/Bleuxgenius/followers")
    .then(res => {
      console.log(`follower ${res.data}`)

      this.setState({
        follower: res.data
      })
    })
  }

render() {
  return (
    <div className="App">
      <h1> Git Hub User Cards</h1>
      console.log{(this.state)}


        <div className="center"> 
        <UserCard
        name={this.state.name}
        login={this.state.login}
        email={this.state.email}
        avatar={this.state.avatar}
        />
        </div>

          <h3> followers</h3>
          <div className="followerdiv">
            {this.state.follower.map(e => {
              return (
                <UserCard
                name={e.name}
                login={e.login}
                email={e.html_url}
                avatar={e.avatar_url}
                />
              )
            })}

          </div>
          </div>
  
  )
          }
}

export default App;
