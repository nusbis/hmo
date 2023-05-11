const connection = require("../DB");

exports.postPatient = async (body) => {
    let query = `INSERT INTO corona_patient (date_of_illness,recovery_date,hmo_member_id) VALUES (STR_TO_DATE('${body.date_of_illness}', '%Y-%m-%dT%H:%i:%s.%fZ'),STR_TO_DATE('${body.recovery_date}', '%Y-%m-%dT%H:%i:%s.%fZ'),'${body.id}')`
    return await connection.execQuery(query);
}

exports.getAll = async () => {
    let query = `SELECT corona_patient.date_of_illness,corona_patient.recovery_date,hmo_member.tz,hmo_member.first_name,hmo_member.last_name,hmo_member.phone_number,hmo_member.email,hmo_member.birth_day,hmo_member.id
    FROM corona_patient inner join hmo_member 
    on corona_patient.hmo_member_id=hmo_member.id`;
    return await connection.execQuery(query);
}

exports.exsist=async(id)=>{
    console.log("getById")
    let query=`SELECT count(*) as c FROM corona_patient WHERE hmo_member_id = ${id}`
    return await connection.execQuery(query);
}

exports.numberOfPatientsPerDay=async()=>{
    let query=`SELECT DATE(date_of_illness) AS date, COUNT(*) AS active_patients
    FROM hmo.corona_patient
    WHERE date_of_illness <= NOW() AND recovery_date >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
    GROUP BY date`
    return await connection.execQuery(query);
}