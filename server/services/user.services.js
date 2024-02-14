const Users = require('../model/user.model');
const db = require('../db');
class UserAddService {
    async create(email, password, confirmPassword) {
        const newUser = new Users(email, password, confirmPassword);
        const usersCollection = db.collection('users');
        await usersCollection.insertOne(newUser)
        .then(result => {
            console.log('User inserted successfully');
            return true;
        })
        .catch(error => {
            console.error('Error inserting User:', error);
            return false;
        });
    }
}

module.exports = UserAddService;