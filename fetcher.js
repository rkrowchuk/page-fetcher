const fs = require('fs');
const request = require('request');
const saveLocation = './index.html';


request('http://example.edu/', (error, response, body) => { 
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  let filesize = body.length;
  fs.writeFile(saveLocation, body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Downloaded and saved ${filesize} bytes to ${saveLocation}`);
  });
});  


