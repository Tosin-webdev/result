const fetch = require("node-fetch");
const fs = require("fs");

// fetching data from jsonplaceholder
let data = fetch("http://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((result) => {
    fs.writeFile("./posts.json", JSON.stringify(result), (err) => {
      if (err) throw err;
      console.log("data created");
    });
  });
