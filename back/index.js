const express = require('express')
const mysql = require('mysql')
const app = express()
const port = process.env.PORT || 5000


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'store'
})
connection.connect((error) => {
  if (error) {
    return console.log('Ошибка подключения к БД!');
  } else {
    return console.log('Подлючение успешно!');
  }
})

let query = 'SELECT * FROM products';
let a = '';
connection.query(query, (err, res) => {
  console.log(err)
  a = res
})



app.get('/', (req, res) => {
  res.send(a)
})

app.listen(port, () => {
  console.log(`Server work on ${port}`);
})