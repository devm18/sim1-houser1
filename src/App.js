import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './CSS/reset.css'; 
import { BrowserRouter } from 'react-router-dom'; 
import routes from './routes';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          
          <Header /> 
        
          { routes }

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
