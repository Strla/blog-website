const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  database: "blog_app",
  user: "root",
  password: "",
});

module.exports = pool;
