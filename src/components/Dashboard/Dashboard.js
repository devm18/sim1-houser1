import React, { Component } from 'react';
import './Dashboard.css';
import { Switch, Route, Link } from 'react-router-dom'; 
import Wizard from '../Wizard/Wizard';
import House from '../House/House'; 
import axios from 'axios'; 

export default class Dashbard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfHouses: []
     }
     // bind  
  }
  
  componentDidMount() {
    //// test client server
    axios.get('api/test')
    .then(response => console.log('client test ok', response));

    axios.get('/api/houses')
    .then(response => {
      console.log("componentDidMount: response.data:", response.data);
      // this.setState({
      //   listOfHouses: response.data 
      // });
    })
    .catch(err=> console.log("componentDidMount error: ", err));
  }

  render() {
    console.log(this.state.listOfHouses); // toCheck
    let houseOfCards = this.state.listOfHouses.map((elem, i) => {
      return ( 
        <h3 key={i}> { elem } </h3>
      )
    });

    return (
      <div className="dashboardContainer"> 
        <div className="main-column">
          <span id='dashboard-label'>Dashboard</span>
          <br />

          <br /> 
          <Link to="/wizard" className="wizard-link">         
            <button className="addNewPropertyButton">
              Add New Property 
            </button>
          </Link>
         
          <br /> 
          <br /> 
          <hr /> 
        </div>

      
        <br /> 

        <div className="houseOfCardsContainer">
          
          <House />
          <br /> 
          { houseOfCards }
        </div>


        <Switch>
          <Route path='../Wizard/Wizard' component={Wizard} />  
        </Switch>        
      </div>
    )
  }
}

