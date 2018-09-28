import React from 'react';

export default function House(props) {
  return (
    <div className="houseOfCards"> 

      <h1>House Of Cards - Home Listings</h1><br /> 
      <div> 
      Property Name: { JSON.stringify(props.propertyName) } 
      </div><br /> 

      <div> 
      Address: { JSON.stringify(props.address) } 
      </div><br /> 

      <div> 
      City: { JSON.stringify(props.city) } 
      </div><br /> 

      <div> 
      State: { JSON.stringify(props.state) } 
      </div> <br /> 

      <div> 
      Zipcode: { JSON.stringify(props.zipcode) } 
      </div>
      
    </div>
  )
}