const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, 'utf8', (error, response, body) => {
    // console.log('error:', error);
    // console.log('statusCode:', response && response.statusCode);
    const data = JSON.parse(body);
    let description = '';
    if (error) {
      description = null;
    }
    if (!error) {
      if (data.length === 0) {
        description = 'Breed Not Found';
      } else {
        description = data[0]["description"];
      }
    }
    callback(error, description);
  });

};

// const search = function(breed, toDo) {

// request(url, 'utf8', (error, response, body) => {
//   // console.log('Start request...')
//   // console.log('url =', url);
//   if (response && response.statusCode === 200 || response && response.statusCode === 201) {
//     if (error) {
//       console.log('error:', error);
//     }
//     if (!error) {
//       const data = JSON.parse(body); // console.log(typeof body); // => String
//       // console.log(data) // console.log(typeof data); // => Object
//       if (data.length !== 0) {
//         toDo(data);
//       }
//       console.log(null);
//     }
//   } else {
//     console.log(null);
//     // console.log('Request failed!');
//     // console.log(`statusCode: ${response && response.statusCode}`);
//   }
// });

// };

// const printCatBreed = function(data) {
//   console.log(data[0]["description"]);
// };


module.exports = { fetchBreedDescription };