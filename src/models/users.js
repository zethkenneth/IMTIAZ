const logger = require('../core/logger')
const pg = require('../../config/database.js')

module.exports = {
    getAllUser: async (data) => {
        try {
            const users = await pg.query("SELECT * FROM users");
            return users.rows;
        } catch (error) {
           console.log(error) 
        }
    },
    addUser: async (data) => {
        const { name, username, password} = data;
        try {
            await pg.query('INSERT INTO users (name, username, password) VALUES ($1, $2, $3)', [
                name,
                username,
                password
            ]);

            return "success";
        } catch (error) {
            console.log(error); 
        }
    },
    updateUser: async (data) => {
        try {
            const { name, username, password , userId} =data;
            await pg.query('UPDATE users SET name = $1, username = $2, password = $3 WHERE userId = $4',[
                name,
                username,
                password,
                userId
            ])

            return "success update"
        } catch (error) {
            console.log(error)
        }
    }
}