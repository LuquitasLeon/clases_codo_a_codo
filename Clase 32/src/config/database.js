import { config } from "dotenv";
config();
import { createPool } from "mysql2/promise";
import { Connection } from "mysql2/typings/mysql/lib/Connection";

const pool = createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "workshop2023",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: process.env.DB_PORT || 3306,
});

pool
  .getConnection()
  .then((connection) => {
    console.log("Connected to MySQL database");
    connection.release();
  })
  .catch((err) => {
    console.error("Error connecting to MySQL:", err);
  });
