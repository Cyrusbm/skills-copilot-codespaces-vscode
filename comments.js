// Create web server
// Create a web server that listens to incoming requests and sends a response to the client
// The server should respond with the following JSON object when a GET request is made to the root URL: { comments: [ { author: "John", message: "Hello" }, { author: "Jane", message: "Hi there" } ] }
// The server should respond with a 404 status code if the client requests a URL that does not exist

const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ comments: [ { author: 'John', message: 'Hello' }, { author: 'Jane', message: 'Hi there' } ] }));
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});