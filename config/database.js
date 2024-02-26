const { Pool } = require('pg')

const pg = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "password",
  database: "IMTIAZ"
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