const connection = require("../DB");
const dataCity=require("./data_city")

exports.getAll = async () => {
    let query = `SELECT tz,first_name,email,last_name,birth_day,phone_number,building_number,street,city.city_name
     FROM hmo_member INNER JOIN city
     ON city_id = city.id`;
    return await connection.execQuery(query);
}

exports.getByID = async (id) => {
    let query = `SELECT * FROM hmo_member WHERE id = ${id}`;
    return await connection.execQuery(query);
}

exports.postMember = async (body) => {
    const arr=await dataCity.getIdByName(body.city_name)
    let idCity=arr[0][0].id;
    let query = `INSERT INTO hmo_member (tz,first_name, last_name,phone_number,email,street,building_number,birth_day,city_id,password)
    VALUES ('${body.tz}','${body.first_name}','${body.last_name}','${body.phone_number}','${body.email}','${body.street}','${body.building_number}',STR_TO_DATE('${body.birth_day}', '%Y-%m-%dT%H:%i:%s.%fZ'),'${idCity}','${body.password}')`
    return await connection.execQuery(query);
}

exports.amountOfUnvaccinatedPOSMembers = async () => {
    let query = `select count(id) as count
    from hmo.hmo_member
    where id not in (
    select  hmo.vaccination_for_patient.hmo_member_id
    from hmo.vaccination_for_patient)`;
    return await connection.execQuery(query);
}

