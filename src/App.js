import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ModalForm from './components/ModalForm';
// import AboutUs from './components/AboutUs';
import './App.css';
import Login from './components/Login';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  render() {
    return (

      <div className="App">
        {this.props.auth0.isAuthenticated ?
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={
                  <>
                    <Sidebar />
                    <ModalForm />
                  </>
                } />
              </Routes>
            </div>
          </Router>
          : <div id='login-container'><Login /></div>}
      </div>

    );
  }
}

export default withAuth0(App);