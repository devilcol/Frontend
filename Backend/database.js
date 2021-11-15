var mysql = require('mysql')

var connection = mysql.createConnection({
  host : 'localhost',
  database : 'dat',
  user: 'root',
  password: '123456'
})

module.exports = connection;