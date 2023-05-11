const connection = require("../DB");

exports.postCity = async (body) => {
    console.log("post-dataaa-city");
    let query = `INSERT INTO city (city_name) VALUES ('${body.city_name}')`
    console.log("query::",query)
    return await connection.execQuery(query);
}

exports.getIdByName=async(name)=>{
    let query=`SELECT * FROM city WHERE city_name = ${name}`
    return await connection.execQuery(query);
}

exports.getAllCities = async () => {
    let query = "SELECT * FROM city";
    return await connection.execQuery(query);
}

exports.getById=async(id)=>{
    let query=`SELECT * FROM city WHERE id = ${id}`
    return await connection.execQuery(query);
}
exports.getIdByName=async(name)=>{
    let query=`SELECT id FROM hmo.city WHERE city_name = "${name}"`
    return await connection.execQuery(query);
}
