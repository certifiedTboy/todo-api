const http = require("http");
require("dotenv").config();
const app = require("./app");
const { dbConnect } = require("./utils/database/db");
 
const PORT = process.env.PORT || 3001;
 
//pass express app middleware in http server for easy routing
const server = http.createServer(app);

const startServer = async () => {
  await dbConnect();
  server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`);
  });
};

startServer();
