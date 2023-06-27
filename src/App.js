import React from 'react';
import Sidebar from './components/Sidebar';
import ModalForm from './components/ModalForm';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <ModalForm />
      </div>
    );
  }
}

export default App;
