import React from 'react';
import Sidebar from './components/Sidebar';
import ModalForm from './components/ModalForm';
import './App.css';
import Login from './components/Login';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.auth0.isAuthenticated ? <><Sidebar /><ModalForm /></> : <div id='login-container'><Login /></div>}
      </div>
    );
  }
}

export default withAuth0(App);