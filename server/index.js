const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    if(req.query.name != null && req.query.name != ""){
        add(req.query.name, req, res);
        return;
    }
    res.contentType("application/json")
    getall(req, res);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});


var conn = mysql.createConnection({
    host: "172.17.0.1",
    port: 6603,
    user: "root",
    password: "root",
    database: "people",
});

var add = async (name, req, res) => {
    console.log("add");
    conn.query(`INSERT INTO person (PersonName) VALUES (?)`, [name], async (err, result) => {
        await getall(req, res);
    });
};

async function getall(req, res) {
    conn.query(`SELECT * FROM person`, (err, result) => {
        successful = true;
        if(err){
            successful = false;
            console.log(err)
        }
        if(successful){
            res.status(200).send({statusCode: 200, message: result});
        }else{
            res.status(500).send({statusCode: 500, message: err});
        }
    });
}