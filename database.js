import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to the database");
});

mongoose.connection.on("error", (err) => {
  console.error("Database connection error:", err.message);
});
