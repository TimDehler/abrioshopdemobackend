const express = require("express");
const apiRoutes = require("./src/routes/productRoutes");
const { connectToDatabase } = require("./src/config/dbConnection");
require("dotenv").config();
const cors = require("cors");

const app = express();
connectToDatabase();

app.use(cors());
app.use(express.json());

app.use("/api/v1", apiRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
