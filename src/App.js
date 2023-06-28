import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ModalForm from './components/ModalForm';
// import AboutUs from './components/AboutUs';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={
              <>
                <Sidebar />
                <ModalForm />
              </>
            } />
            {/* <Route path="/Abouts" element={<AboutUs />} /> */}
            {/* Add more Routes for other pages here */}
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
