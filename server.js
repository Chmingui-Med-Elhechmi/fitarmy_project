const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/connectDB");
const port = process.env.PORT || 5000;
//port = 5000;
const path = require("path");

const http = require("http");
const server = http.createServer(app);

//connect to the database
connectDB();
//middleware routing body parse
app.use(express.json());
app.use(express.static(__dirname));
app.use("/user", require("./Routers/userRouters"));
//app.use("/product", require("./Routers/productRouters"));
app.use("/uploads", express.static(path.join(__dirname, "../", "/uploads")));

//deployment
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

server.listen(port, (err) => {
  err ? console.log(err) : console.log(`Server is running on port : ${port}`);
});
