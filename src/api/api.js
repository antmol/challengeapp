import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://amazon24.p.rapidapi.com/api/category',
  params: {country: 'US'},
  headers: {
    'x-rapidapi-key': '8997fb3f4cmshd20a00aa73940f6p14b484jsne3d5a4dbd374',
    'x-rapidapi-host': 'amazon24.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});