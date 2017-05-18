import React, { Component } from 'react';
import logo from './hoopla-white-logo.svg';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__inner">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Hoopla Movies</h2>
        </div>
      </header>
    );
  }
}

export default Header;
