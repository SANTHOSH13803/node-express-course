console.log("Express Tutorial");
// setting server using http module
const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeLogo = readFileSync("./navbar-app/logo.svg");
const homejs = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  /**
    1. res.writeHead(200, { "Content-Type": "text/html" });: Sets the HTTP status code to 200 (OK) and specifies the response body content type as HTML.
    2. res.write("<h1>Home page</h1>");: Writes the HTML content of the response body, in this case, a simple heading that says "Home page".
    3. res.end(); : Ends the response, signaling that the server has finished sending data.
  **/
  const url = req.url;
  console.log(url);
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About page</h1>");
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(homeLogo);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(homejs);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>No page found</h1>");
    res.end();
  }
});

server.listen(5000);
// !!
/**---------------------------------------------------------------------------------------------------
 ---------------------------------------------------------------------------------------------------
 if you check the above we need to send each file that requires another files(ie. navbar-app/index.html needs navbar-app/styles.css , 
 navbar-app/logo.svg and navbar-app/browser-app.js)
 we need to write each and every thing in our own file(which is not a good idea) and you may go nuts
 so to avoid this we use express framework
 ---------------------------------------------------------------------------------------------------
 ---------------------------------------------------------------------------------------------------
 */
// !!
