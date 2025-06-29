// console.log("Express Tutorial");
// // setting server using http module
// const http = require("http");
// const { readFileSync } = require("fs");

// const homePage = readFileSync("./navbar-app/index.html");
// const homeStyles = readFileSync("./navbar-app/styles.css");
// const homeLogo = readFileSync("./navbar-app/logo.svg");
// const homejs = readFileSync("./navbar-app/browser-app.js");

// const server = http.createServer((req, res) => {
//   /**
//     1. res.writeHead(200, { "Content-Type": "text/html" });: Sets the HTTP status code to 200 (OK) and specifies the response body content type as HTML.
//     2. res.write("<h1>Home page</h1>");: Writes the HTML content of the response body, in this case, a simple heading that says "Home page".
//     3. res.end(); : Ends the response, signaling that the server has finished sending data.
//   **/
//   const url = req.url;
//   console.log(url);
//   if (url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(homePage);
//     res.end();
//   } else if (url === "/about") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("<h1>About page</h1>");
//     res.end();
//   } else if (url === "/styles.css") {
//     res.writeHead(200, { "Content-Type": "text/css" });
//     res.write(homeStyles);
//     res.end();
//   } else if (url === "/logo.svg") {
//     res.writeHead(200, { "Content-Type": "image/svg+xml" });
//     res.write(homeLogo);
//     res.end();
//   } else if (url === "/browser-app.js") {
//     res.writeHead(200, { "Content-Type": "text/javascript" });
//     res.write(homejs);
//     res.end();
//   } else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     res.write("<h1>No page found</h1>");
//     res.end();
//   }
// });

// server.listen(5000);

// ^ -------------------------------------New block starts here -------------------------------------
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

// ~ ---------------------------------------------------------------------------------------------------
//^  Starting First express server
// ~ ---------------------------------------------------------------------------------------------------

// const express = require("express");
// const app = express();
// // there are several method that we are using here

// //* app.get() -> reads data
// app.get("/", (req, res) => {
//     res.status(200).send("Home Page🏠");
// });
// app.get("/about", (req, res) => {
//     res.status(200).send("About Page🤔");
// });

// // app.all()
// app.all("*", (req, res) => {
//     res.status(404).send("<h1>Resource not found</h1>");
// });
// // app.post() -> insert data
// // app.put() -> update data
// // app.delete() -> delete data
// // app.use()

// // app.listen()
// app.listen(5000, () => {
//     console.log("Server is listening on port 5000...");
// });
// ^ -------------------------------------New block ends here -------------------------------------

// ^ -------------------------------------New block Starts here -------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// * Serving static files
// const express = require("express");
// const path = require("path");
// const app = express();
// // by writing app.use(express.static("./public")); we are telling express to serve static files
// //  are located in ./public folder and will take all the files from there
// app.use(express.static("./public"));
// // app.get("/", (req, res) => {
// //   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// // ~ moving to static assets
// // });
// app.all("*", (req, res) => {
//   res.status(404).send("Resource not found");
// });
// app.listen(5000, () => {
//   console.log("Server is listening on port 5000...");
// });
// ^ -------------------------------------New block ends here -------------------------------------

// ^ -------------------------------------New block starts here -------------------------------------
// * Route and Query Parameters
// const express = require("express");
// const app = express();
// const { products } = require("./data");

// // * Router Params
// // Definition: Values passed in the URL path using colon notation (:paramName)

// // *Query Params
// // Definition: Values passed in the URL query string using key-value pairs (?key=value)

// app.get("/", (req, res) => {
//   res.send("<h1>Home Page</h1> <a href='/api/products'>products</a>");
// });
// // get all products
// app.get("/api/products", (req, res) => {
//   const newProducts = products.map((product) => {
//     const { id, name, image } = product;
//     return { id, name, image };
//   });
//   res.json(newProducts);
// });
// // get poducts by id
// app.get("/api/products/:productID", (req, res) => {
//   const { productID } = req.params; // params values will always be strings
//   const product = products.find((product) => product.id === Number(productID));
//   if (!product) {
//     res.status(404).send("Product does not exist");
//   }
//   res.json(product);
// });

// // get products with query parameters
// app.get("/api/v1/products", (req, res) => {
//   const { search, limit } = req.query;
//   let sortedProducts = [...products];

//   if (search) {
//     sortedProducts = sortedProducts.filter((product) => {
//       return product.name.startsWith(search);
//     });
//   }
//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, Number(limit));
//   }
//   if (sortedProducts.length < 1) {
//     // res.status(200).send('no products matched your search');
//     return res.status(200).json({ sucess: true, data: [] });
//   }
//   res.status(200).json(sortedProducts);
// });

// app.listen(5000, () => {
//   console.log("Server is listening on port 5000...");
// });

// ^ -------------------------------------New block ends here -------------------------------------

// ^ -------------------------------------New block starts here -------------------------------------
// * Express Middle-ware

// const express = require("express");
// const app = express();
// const logger = require("./logger");
// // req => middleware => res
// // to keep the api simple we can create logger in seperate file and import it
// // const logger = (req, res, next) => {
// //   const method = req.method;
// //   const url = req.url;
// //   const time = new Date().getFullYear();
// //   console.log(method, url, time);
// //   next();
// // };

// // The red commented line:
// // If you want logger to be in every route, insted of writing it manually every where
// // we can use app.use(logger) -> this will be applied to every route
// app.use(logger); // NOTE : THE palcement of this line is very important
// //The logger only invokes after the above line is used

// // If you want this logger to be in specific routes that statrs with some url
// // you can use the below one
// //  app.use('/api', logger) // #NOTE this will only be applied to routes that starts with /api

// //! app.get("/", logger, (req, res) => {
// app.get("/", (req, res) => {
//   res.send("Home");
// });
// //! app.get("/about", logger, (req, res) => {
// app.get("/about", (req, res) => {
//   res.send("About");
// });
// app.get("/products", (req, res) => {
//   res.send("products");
// });

// app.listen(5000, () => {
//   console.log("Server is listening on port 5000...");
// });

// ^ -------------------------------------New block ends here -------------------------------------

// ^ -------------------------------------New block starts here -------------------------------------

//* HOW TO USE MULTIPLE MIDDLE WARES
// const express = require("express");
// const logger = require("./logger");
// const auth = require("./authorize");
// const app = express();
// // ~ just use middleware's in an array in app.use
// // there are different middleware, we can write our own, we can use the third part-one
// // *CASE 1 : If you want to use middleware in every route (app.use([anyware1, anyware2, ...]))
// // app.use([logger, auth]);

// // NOTE : THE palcement of this line is very important
// // first the logger will be invoked and then the auth will be invoked

// app.get("/", (req, res) => {
//   res.send("Home(*/ω＼*)");
// });
// app.get("/about", (req, res) => {
//   res.send("About");
// });

// //CASE 2 : If you want to use middleware in specific routes
// app.get("/api/products", [logger, auth], (req, res) => {
//   console.log(req.user);
//   res.send("Products");
// });
// app.get("/api/items", (req, res) => {
//   console.log(req.user);
//   res.send("Items");
// });

// app.listen(5000, () => {
//   console.log("Server is listening on port 5000...");
// });

// ^ -------------------------------------New block ends here -------------------------------------

// ^ -------------------------------------New block starts here -------------------------------------
// * ----------------HTTP METHODS--------------------------------
// *GET, POST, PUT, DELETE
const express = require("express");
const app = express();
const { people } = require("./data");
// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false })); // build in middleware
//parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send("Please provide creds");
});

// post man
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

// PUT METHOD
app.put("/api/people/:personID", (req, res) => {
  const { personID } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(personID));
  if (person) {
    const newPeople = people.map((person) => {
      if (Number(personID) === person.id) {
        person.name = name;
      }
      return person;
    });
    return res.status(200).json({ success: true, data: newPeople });
  }
  res
    .status(404)
    .json({ success: false, msg: `no person with id ${personID}` });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
