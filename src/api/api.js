import axios from "axios";

const options = {
  method: 'GET',
  url: `${process.env.REACT_APP_URL}/category`,
  params: {country: 'US'},
  headers: {
    'x-rapidapi-key': `${process.env.REACT_APP_KEY}`,
    'x-rapidapi-host': `${process.env.REACT_APP_HOST}`
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});