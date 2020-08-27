'use-strict';
//Required modules - request and fs
const request = require('request');
const fileSystem = require('fs');

//Get the inputs passed as CLI argument
const cliArg = process.argv.slice(2);

const httpRequest = cliArg[0];
const fileToWrite = cliArg[1];

//Request function by passing the http path(input from CLI)
request(httpRequest, (error, response, body) => {
  //Write the html body as index.html file asynchronously
  fileSystem.writeFile(fileToWrite, body, (err) => {
    if (err) throw err;
    //To get the downloaded file size
    fileSystem.stat(fileToWrite, (err, stat) => {
      console.log(`Downloaded and saved ${stat.size} bytes to ${fileToWrite}`);
    });
  });
});