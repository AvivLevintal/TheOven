 //"start": "react-scripts start",

 const path = require("path");
 const express = require("express");
 const app = express(); // create express app
 

 app.use(express.static(path.join(__dirname, "..", "build")));
 app.use(express.static("public"));
 

 app.listen(5000, () => {
   console.log("server started on port 5000");
 });