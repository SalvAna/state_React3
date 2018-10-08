import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working : true
    };
  }

  handleClick = () => {
    this.setState({ working: !this.state.working});
  };

  render() {
    let newLogo = this.state.working ? "App-logo" : "App-logo-new";
    let working = this.working;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={newLogo} alt="logo" />
          <h1 className="App-title">Homer! Are you working?</h1>
        </header>
        <button onClick={this.handleClick} 
          className={working}>Change the logo
        </button>
        <figure className={working} />
        <Quote/>
      </div>
    );
  }
}

export default App;
//id="App-logo-new"
//{working.toUpperCase()}

