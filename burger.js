let http = require("http");
let fs = require("fs");

// Server
const app = express();
let PORT = 9000;
const server = http.createServer(routes);

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end(" " + request.url);
}

// when button at end of survey is clicked, take page to /apiFriendList.html
document.getElementById("#buttonID").onclick = function () {

};



// function for requests and responses 
function routes(req, res) {
  const path = req.url;
  let path = require('path');

}
  // Starts our server
  server.listen(PORT, function () {
    console.log("Server linstening ");
  });