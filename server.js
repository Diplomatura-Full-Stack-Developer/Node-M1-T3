const express = require("express");
const router = require("./controller");
const connectToMongoDB = require("./dbconnection");


const app = express();

app.use(express.json());

initServer = async () => {
  await connectToMongoDB();
  app.use(router);
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}


initServer();