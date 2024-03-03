const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("Welcome to our Server");
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(
      `<h1>
      Hi there !! We are Server providers 
      </h1>`
    );
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
      <h1> Unable to find the route </h1>
    `);
  }
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
}); 