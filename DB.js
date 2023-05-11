var mysql = require('mysql2/promise');
const { connect } = require('http2');
const { throws } = require('assert/strict');

async function getConnection() {
    return await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123",
        database: "hmo"
    })
}

async function closeConnection() {
    const connection = await getConnection()
    connection.end()
}

async function execQuery(queryString) {
    var con = await openConnect()
    let resolt = []
    try {
        resolt = await con.query(queryString);
    }
    catch (e) {
        throw new Error()
    }
    finally {
        closeConnection()
        return resolt;
    }
}

async function openConnect() {
    const connection = await getConnection()
    // Connecting to database
    connection.connect(function (err) {
        if (err) {
            console.log("Error in the connection")
            console.log(err)
        }
        else {
            console.log(`Database Connected`)
        }
    })
    return connection;
}

module.exports = { openConnect, closeConnection, execQuery };