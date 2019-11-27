// create webserver which displays information from simple js file.

// HOW TO CREATE A SERVER

const express = require("express"); // server called express is created.
const app = express(); // server is initialised here
const path = require("path");

// tells app to listen on port 3000
app.listen(3000, () => {
  console.log("Server is alive");
  console.log("Listening on Port 3000");
});

app.get("/", (req, res) => {
  // default page is slash. /dirname gives directory name.
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static(path.join(__dirname, "public")));
