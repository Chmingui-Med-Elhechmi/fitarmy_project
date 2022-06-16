const mongoose = require("mongoose");

const connectDB = () => {
  //  process.env.URI
  mongoose.connect(
    "mongodb+srv://hamach:hamach@mern-app.wh124.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    (err) => {
      if (err) {
        throw err;
      } else {
        console.log("database is connected");
      }
    }
  );
};
module.exports = connectDB;
