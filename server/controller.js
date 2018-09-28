const axios = require('axios'); 

let houses = [];
// let houses = [ 
//   { 
//     name: 'The Bachelor Pad - CONTROLLER dummyDATA', 
//     address: '500 S. Ervay St, #213', 
//     city: 'Dallas', 
//     state: 'TX', 
//     zipcode: '75201'
//   }
// ]

//// CRUD 
const test = (req,res) => {
  console.log("OK backend server");   // test server.
  res.status(200).json("OK postman"); // test postman & client:
  // cf Dashboard.js componentDidMount >
  // axios ets. 
}; 

const getHouses = (req, res) => { 
  let db = req.app.get('db');
  db.getHouses()
  .then(response => {
    console.log("houses: ", response);
    res.status(200).json(response) 
  });
}; 

const addHouse = (req, res) => {
  console.log(req.body);
  const { name, address, city, state, zipcode } = req.body;
  let db = req.app.get("db");
  db.addHouse([name, address, city, state, zipcode ])
  .then(response => {
    res.status(200).json(response);
  });
}; 

const updateHouse = (req, res) => {
  const { id_name } = req.params; 
  const { name, address, city, state, zipcode } = req.body;
  let db = req.app.get("db");
  db.updateHouse([ id_name, name, address, city, state, zipcode ])
  .then(response => {
    res.status(200).json(response);
  });
}; 

const removeHouse = (req, res) => {
  let db = req.app.get("db");
  db.removeHouse([req.params.id_name])
  .then(response => {
    res.status(200).json(response);
  });
};

module.exports = {
  test,
  getHouses,
  addHouse,
  updateHouse,
  removeHouse
}
