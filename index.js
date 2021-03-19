const express = require("express");
const app = express();

app.use((req, res) => {
  console.log("We got a new request");
  //   res.send("Hello, we got your request. THis is a response.")
  res.send("<h1>This is my webpage!</h1>");
});

app.listen(8080, () => {
  console.log("Listener Porto 8080!!");
});
