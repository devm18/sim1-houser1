--  google sql cheatsheet 

CREATE TABLE houses (
  name VARCHAR(100) NOT NULL,
  address VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL, 
  state VARCHAR(2) NOT NULL, 
  zipcode VARCHAR(5) NOT NULL
);

INSERT INTO houses (name, address, city, state, zipcode) 
VALUES ('The Bachelor Pad', '500 S. Ervay St, #213', 'Dallas', 'TX', '75201');

INSERT INTO houses (name, address, city, state, zipcode) 
VALUES ('The House of the Rising Sun', '65 Ervay St', 'Dallas', 'TX', '75201');

INSERT INTO houses (name, address, city, state, zipcode) 
VALUES ('Kaffer House', '2038 Harris Ave', 'Richland', 'WA', '99354');


/* 
-- postman get 

-- postman post
{
  "name": "Kaffer House", 
  "address": "2038 Harris Ave", 
  "city": "Richland", 
  "state": "WA", 
  "zipcode": "99354"
}

-- postman put
{
  "name": "Kaffer RIVER House", 
  "address": "2038 Harris Ave", 
  "city": "Richland", 
  "state": "WA", 
  "zipcode": "99354"
}

-- postman delete 
{
  "name": "Kaffer House", 
  "address": "2038 Harris Ave", 
  "city": "Richland", 
  "state": "WA", 
  "zipcode": "99354"
}
*/