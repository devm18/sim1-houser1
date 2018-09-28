require('dotenv').config(); 
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive'); 

// const controller = require('./controller'); 
// use to demo destructuring 
const { test, getHouses, addHouse, updateHouse, removeHouse } = require('./controller');

const app = express();

app.use(bodyParser.json());
// console.log(process.env.CONNECTION_STRING);

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
  // console.log('dbInstance: ', dbInstance); 
  return app.set('db', dbInstance);
}).catch(err => console.log(err));

// endpoints 
app.get('/api/test', test); // test via postman (how in browser?)
app.get('/api/houses', getHouses); 
app.post('/api/house', addHouse); 
app.put('/api/house/:id_name', updateHouse); 
app.delete('/api/house/:id_name', removeHouse); 

const port = process.env.SERVER_PORT || 3001; 
app.listen(port, () => console.log(`Server listening at port ${port}`)); 



