const express = require('express');
const mysql = require('mysql');
const port = process.env.PORT || 2222;
const app = express();
app.set('view engine', 'ejs');

app.use(express.json());
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: parseInt(process.env.DB_PORT),
    password: process.env.MYSQL_PASSWORD 
    })
    connection.connect((err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Database connected');
});

app.get("/", async(req, res) => {
    var sql='SELECT * FROM EMPDATA.EMPLOYEE';
    connection.query(sql, function (err, data) {
    if (err) throw err;
    res.render('emp-list', { title: 'Employee List', empData: data});
    });
});