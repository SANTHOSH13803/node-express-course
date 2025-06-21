console.log("Express Tutorial");
// setting server using http module
const http = require("http");

const server = http.createServer((req, res) => {
  /**
    1. res.writeHead(200, { "Content-Type": "text/html" });: Sets the HTTP status code to 200 (OK) and specifies the response body content type as HTML.
    2. res.write("<h1>Home page</h1>");: Writes the HTML content of the response body, in this case, a simple heading that says "Home page".
    3. res.end(); : Ends the response, signaling that the server has finished sending data.
  **/
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Home page</h1>");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>No page found</h1>");
    res.end();
  }
});

server.listen(5000);
