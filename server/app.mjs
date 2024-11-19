import express from "express";
import mongoose from "mongoose";
const { connect, connection } = mongoose;
import userRouter from "./routes/users.mjs";
const app = express();
const port = 3001;

app.use(express.json());

connect("mongodb://localhost:27017/mern-project", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = connection;

db.on("error", (err) => {
  console.error(err);
});

db.once("open", () => {
  console.log("Connected to the Mongodb");
});
app.get("/", (req, res) => {
  res.send("Mern stack backend");
});
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.clear();
  console.log(`server is running on ${port}`);
});
