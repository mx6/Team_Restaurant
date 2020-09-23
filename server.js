// Require/import the HTTP module
// hhtp (AKA webServer)
var http = require("http");

// Define a port to listen for incoming requests
// http port 80
// https port 443
var PORT = 3000;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest); // 'handleRequest' = the callback

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Mia's web server is listening on: http://localhost:" + PORT);
});
