import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'; 
import Dashboard from '../Dashboard/Dashboard';
import './Wizard.css';

export default class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      Address: '',
      City: '',
      State: '',
      Zipcode: ''
    }

    this.nameInput = this.nameInput.bind(this);
    this.addressInput = this.addressInput.bind(this);
    this.cityInput = this.cityInput.bind(this);
    this.stateInput = this.stateInput.bind(this);
    this.zipcodeInput = this.zipcodeInput.bind(this);
  }

  nameInput(e) { this.setState({ name: e.target.value }); }
  addressInput(e) { this.setState({ address: e.target.value }); }
  cityInput(e) { this.setState({ city: e.target.value }); }
  stateInput(e) { this.setState({ state: e.target.value }); }
  zipcodeInput(e) { this.setState({ zipcode: e.target.value }); }

  render() {
    return (
      <div className="wizardContainer"> 
        <h1>Wizard</h1> 
        <br /> 
        <div> Add New Listing </div>
        <br /> 
        <div>
          <Link to="/" className="dashboardd-link">         
            <button className="addNewPropertyButton">
              Cancel 
            </button>
          </Link>
        </div>
        
        <br /> 
        <div className="inputsContainer">
          <div className="inputContainer"> 
            Property Name: 
            <input type="text" onChange={ (e)=>this.nameInput } />
          </div>
          
          <div className="inputContainer"> 
            Address: 
            <input type="text" onChange={ (e)=>this.addressInput } />
          </div>

          <div className="inputContainer"> 
            City: 
            <input type="text" onChange={ (e)=>this.cityInput } />
          </div>

          <div className="inputContainer"> 
            State: 
            <input type="text" onChange={ (e)=>this.stateInput } />
          </div>

          <div className="inputContainer"> 
            Zipcode: 
            <input type="text" onChange={ (e)=>this.zipcodeInput } />
          </div>
        </div>


        <br /> 
        <div>
          <Link to="/" className="dashboardd-link">         
            <button className="addNewPropertyButton">
              Complete 
            </button>
          </Link>
        </div>



        <Switch>
          <Route path='../Dashboard/Dashboard' component={Dashboard} />  
        </Switch>        

      
      </div>
    )
  }
}