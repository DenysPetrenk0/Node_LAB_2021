const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dataBase',
    password: '111111111',
    port: 5432,
});

module.exports = pool;