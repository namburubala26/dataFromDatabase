const mysql = require('mysql2');
const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    database: 'node-complete',
    password: '8985@Yash'
});
module.exports = pool.promise();