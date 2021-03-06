const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("We got a new request");
//   //   res.send("Hello, we got your request. THis is a response.")
//   res.send("<h1>This is my webpage!</h1>");
// });

app.get("/", (req, res) => {
  res.send("this is the homepage");
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  console.log(req.params);
  res.send(`<h1>Viewing post ID: ${postId} on the ${subreddit} subreddit</h1>`);
});

app.post("/cats", (req, res) => {
  res.send("post request to /cats this is different to a get request s");
});

app.get("/cats", (req, res) => {
  res.send("Meow!");
});

app.get("/dogs", (req, res) => {
  res.send("Woof!");
});

app.get("*", (req, res) => {
  res.send(`I dont know that path!`);
});

// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.listen(8080, () => {
  console.log("Listener Porto 8080!!");
});
