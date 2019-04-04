import React, { Component } from 'react';
import './index.css'
import 'bulma/css/bulma.css'
import './App.css';

import Home from './Home';
import WeatherApp from './WeatherApp';
import StarWarsApp from './StarWarsApp'
import ToDoListApp from './ToDoListApp';
import About from './About';

import { Route, NavLink, HashRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        {/* <h1>
          Multi page app on React.js
        </h1> */}
        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/weather">Weather app</NavLink>
          </li>
          <li>
            <NavLink to="/star-wars">Star Wars API</NavLink>
          </li>
          <li>
            <NavLink to="/to-do-list">Todo List App</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <div className="content">
          <Route exact path="/" component={ Home }></Route>
          <Route path="/weather" component={ WeatherApp }></Route>
          <Route path="/star-wars" component={ StarWarsApp }></Route>
          <Route path="/to-do-list" component={ ToDoListApp }></Route>
          <Route path="/about" component={ About }></Route>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
