var express = require('express')
var cors = require('cors')

var app = express()
var connection = require('./database')
app.use(cors());

app.get('/',(req, res) => {
  const limit = req.query.limit
  const offset = req.query.offset
  
  let sql = `SELECT *, count(*) OVER() as total FROM products LIMIT ${limit} OFFSET ${offset}`
  connection.query(sql, (err, results) => {
    if(err) throw err
    res.send(results)
  })
})

app.listen(3500,()=>{
  console.log('App listening on port 3500')
  connection.connect((err)=>{
    if(err) throw err;
    console.log('Database connected!')
  })
})

