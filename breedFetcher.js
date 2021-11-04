const request = require('request');

let input = process.argv.slice(2);
let url = '';

const search = function(breed, toDo) {
  url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, 'utf8', (error, response, body) => {
    // console.log('Start request...')
    // console.log('url =', url);
    if (response && response.statusCode === 200 || response && response.statusCode === 201) {
      if (error) {
        console.log('error:', error);
      }
      if (!error) {
        const data = JSON.parse(body); // console.log(typeof body); // => String
        // console.log(data) // console.log(typeof data); // => Object
        if (data.length === 0) {
          console.log('Breed Not Found');
        } else {
          toDo(data);
        }
      }
    } else {
      console.log('Request failed!');
      console.log(`statusCode: ${response && response.statusCode}`);
    }
  });
};

const printCatBreed = function(data) {
  console.log(data[0]["description"]);
};

search(input, printCatBreed);