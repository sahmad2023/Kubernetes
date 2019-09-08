// Licensed under the Apache License, Version 2.0 (the "License")
var http = require('http');
var server = http.createServer(function (request, response) {
  const LANGUAGE = process.env.LANGUAGE;
  const API_KEY = process.env.API_KEY;
  response.write(`Language: ${LANGUAGE}\n`);
  response.write(`API Key: ${API_KEY}\n`);
  response.end(`\n`);
});
server.listen(3000);
