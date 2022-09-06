const request = require('request');//npm install request
const fs = require("fs"); // write data into local filesystem

const targetFile = process.argv.slice(2)[1];
const url = process.argv.slice(2)[0];


request(url, (error, response, body) => {
  if (Number(response.statusCode) > 299 || !response) {
    console.log('Error: ' + error + '\nPlease try again later');
  }
  if (error) {
    console.log('Error: ' + error + '\nPlease make sure your url is correct');
  }
  fs.writeFile(targetFile, body, (error) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${targetFile}`);
    }
  });
});


