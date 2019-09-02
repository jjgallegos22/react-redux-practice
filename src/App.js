import React from 'react';
import { connect } from 'react-redux';
import rotateAction from 'actions/rotateAction';
import logo from './logo.svg';
import './App.css';

 class App extends React.Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={
            "App-logo" +
            (this.props.rotating ? "" : " App-logo-paused")
          }
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => { this.props.rotateAction(!this.props.rotating) }}>
            Click me
          </button><br />
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
    )}
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  rotateAction: (payload) => dispatch(rotateAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
