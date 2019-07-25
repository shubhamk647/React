import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {

  state = {
    username: "shubham singh",
  }
  
  nameChangedHandler = (event) =>{

    this.setState(
      {
        username: event.target.value,
      }
    )

  }

  render(){
    return (
      <div className="App">
        <UserInput handler = {this.nameChangedHandler} oldVal = {this.state.username}/>
        <UserOutput username = {this.state.username} />
        <UserOutput username = {this.state.username} />
      </div>
    );
  }
}

export default App;
