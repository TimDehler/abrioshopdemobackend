const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.DB_CONNECTION_STRING;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let database;

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    database = client.db(); // Set the database object
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

function getDatabase() {
  if (!database) {
    throw new Error("Database not connected");
  }
  return database;
}

function getCollection(collectionName) {
  const dbs = getDatabase();
  return dbs.collection(collectionName);
}

module.exports = { connectToDatabase, getDatabase, getCollection };
