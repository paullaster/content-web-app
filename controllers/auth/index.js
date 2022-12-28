const register = require( './register');
const login = require( './login');

const Accounts = {
    new: register,
    login: login,
};
module.exports = Accounts;