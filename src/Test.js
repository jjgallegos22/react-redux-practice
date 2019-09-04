import React from 'react';
import { connect } from 'react-redux';
import rotateAction from 'actions/rotateAction';
import logo from './logo.svg';
import './App.css';

 class Test extends React.Component {
  render() {
    console.log(this.props)
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
          THIS A TEST PAGE!
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

export default connect(mapStateToProps, mapDispatchToProps)(Test);
