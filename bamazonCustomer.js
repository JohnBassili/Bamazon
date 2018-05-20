var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bamazon_db'
});

connection.connect((err) => {
if (err) throw err
});

console.log('Welcome to bamazon!');

function showProducts() {
    connection.query('SELECT item_id, product_name, price FROM products', function(err,res){
        for(i=0; i<res.length; i++) {
            console.log(`ID: ${res[i].item_id} \n Price: ${res[i].price} \n Name: ${res[i].product_name}`)
        }
    })
};

showProducts();