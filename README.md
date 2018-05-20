# Node.js & MySQL

DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id VARCHAR(25) NOT NULL,
    product_name VARCHAR(25) NOT NULL,
    department_name VARCHAR(25),
    price FLOAT(5),
    stock_quantity INTEGER(10),
    PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES
('COMP1', 'Apple MacBook Pro', 'Computers', 1000.00, 100),
('COMP2', 'Dell Inspiron', 'Computers', 400.00, 15),
('COMP3', 'Asus', 'Computers', 18000.00, 100),
('COMP4', 'Alienware', 'Computers', 121000.00, 300),
('COMP5', 'Intel', 'Computers', 11000.00, 400),
('COMP6', 'Linux', 'Computers', 21000.00, 500),
('COMP7', 'Ubuntu', 'Computers', 31000.00, 600),
('COMP8', 'MacBook Air', 'Computers', 1000.00, 100),
('COMP9', 'iMac', 'Computers', 8000.00, 500),
('COMP10', 'iMac Pro', 'Computers', 9000.00, 600);











