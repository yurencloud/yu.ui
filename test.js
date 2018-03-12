const fetch = require('whatwg-fetch').fetch;

fetch('/api/fruits', {
    method: 'GET',
  },
).then((response) => {
  response.text().then(data => console.log(data));
}, (error) => {
  console.log(error.message);
})
