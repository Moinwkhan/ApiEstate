require("dotenv").config();
const express = require("express");
const router = require("./route");
const app = express();
const cors = require("cors");
const connect = require("./connect");
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Success");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const startServer = () => {
  try {
    app.listen(port, async () => {
      await connect(process.env.uri);
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
