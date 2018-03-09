const fetch = require('whatwg-fetch').fetch;
const Mock = require('mockjs');

Mock.mock('http://mock.com', 'get', [
  { value: 1, label: '电视' },
  { value: 2, label: '电脑' },
  { value: 3, label: '手机' },
  { value: 4, label: '苹果' },
]);

fetch('http://mock.com', {
    method: "GET",
  }
).then(function(response) {
  console.log(response);
}, function(error) {
  console.log(error.message);
})
