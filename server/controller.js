const axios = require('axios'); 

let houses = [];
// let houses = [ 
//   { 
//     propertyName: 'The Bachelor Pad - CONTROLLER dummyDATA', 
//     address: '500 S. Ervay St, #213', 
//     city: 'Dallas', 
//     state: 'TX', 
//     zipcode: '75201'
//   }
// ]

// WRONG TO USE HERE: 
// const getData = (req, res) => {
//   axios.get("ec2-54-83-4-76.compute-1.amazonaws.com")
//   .then(response => {
//     // console.log('getData:', response.data); // check
//     // houses.push(response.data);
//     let listOfHouses = response.data.map(elem => {
//       return Object.assign({}, elem);
//     });
//     listOfHouses.forEach(elem => { houses.push(elem); }); 
//     res.status(200).json(houses)
//   })
//   .catch(err => console.log(err));
// } 
// // getData(); // call to get initial data  


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
