import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomeContainer from './Containers/HomeContainer'
import LoginContainer from './Containers/LoginContainer'
import SignUpContainer from './Containers/SignUpContainer'


function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={SignUpContainer} />
            <Route exact path="/" component={HomeContainer} />
            {/* <MenuContainer /> */}
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
        </Switch>
    </div>
  );
}

export default App;
