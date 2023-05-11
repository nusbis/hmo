const connection = require("../DB");

exports.login = async (email, password) => {
    let query = `SELECT * from hmo_member WHERE password='${password}' AND email='${email}'`;
    return await connection.execQuery(query);
}