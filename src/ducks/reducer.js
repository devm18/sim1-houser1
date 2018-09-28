
const initialState = {
  // id is autoincremented 
  name: '',
  address: '',
  city: '',
  state: '',
  zipcode: ''
};

const NAME = "NAME";
const ADRESS = "ADRESS";
const CITY = "CITY";
const STATE = "STATE";
const ZIPCODE = "ZIPCODE";

export default function counter(state = initialState, action) {
  switch (action.type) {
    case NAME:
      return {
        name: state.name
      };
    case ADRESS:
      return {
        address: state.address
      };
    case CITY:
      return {
        city: state.city
      };
    case STATE:
      return {
        state: state.state
      };
    case ZIPCODE:
      return {
        zipcode: state.zipcode
      };
    default:
      return state;
  }
}

// export function updateName( name ) {
//   return { name, type: NAME };
// }

// export function updateAddress( address ) {
//   return { address, type: ADDRESS };
// }


