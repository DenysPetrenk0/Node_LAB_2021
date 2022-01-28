const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "111111111",
  host: "localhost",
  post: "5432",
  database: "homework_db",
});

module.exports = pool;
