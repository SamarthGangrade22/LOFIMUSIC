const jwt = require("jsonwebtoken");

exports.getToken = async (email, user) => {
    const { _id } = user; // Extract _id from the user object
    const token = jwt.sign({ email, _id }, 'secret'); // Pass email and _id to jwt.sign
    return token;
};

module.exports = exports;
