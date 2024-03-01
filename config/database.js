const { Pool } = require('pg')

const pg = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "password123",
  database: "imtiaz"
});

// // pg.connect();

// pg.query(`select * from users`, (err, res)=> {
//     if(!err){
//         console.log(res.rows)
//     } else {
//         console.log(err)
//     }
//     // pg.end
// })

module.exports = pg;

/*
 --CATABASE
 CREATE DATABASE IMTIAZ;
 
 --Users
 CREATE TABLE users(
    userId SMALLSERIAL ,
    name VARCHAR(50),
    username VARCHAR(50),
    password VARCHAR(50),
    PRIMARY KEY(userId)
 );

 --Items 
 CREATE TABLE items(
    itemId SMALLSERIAL,
    typeOfProduct VARCHAR(10),
    description VARCHAR(100),
    inStock INTEGER,
    lastIn DATE ,
    lastOut DATE ,
    Price  FLOAT,
    PRIMARY KEY(itemId)
 );
 
 --Sales
 Create TABLE sales(
    saleId SMALLSERIAL UNIQUE,
    quantity INTEGER,
    itemId INTEGER,
    userId INTEGER,
    paymentStatus VARCHAR(10),
    dateOfSold DATE,
    dataOfPayed DATE,
    FOREIGN KEY(itemId) REFERENCES items(itemId),
    FOREIGN KEY(userId) REFERENCES users(userId)
 );

INSERT INTO users (name, username, password) VALUES ('bob', 'bob123', 'bob123'), ('ana', 'ana1999', 'anabeauty');

*/ 