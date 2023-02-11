import React, { Component } from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { AfterLogin } from './components/Afterlogin';
import { Jobrec } from './components/Jobrec';
import { Saved } from './components/Saved';
import Signup from './components/Signup';
class App extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='afterlogin' element={< AfterLogin/>} />
        <Route path='jobrec' element={< Jobrec/>} />
        <Route path='saved' element={< Saved/>} />
        <Route path='signup' element={< Signup/>} />
      </Routes>
    )
  }
}

export default App;
