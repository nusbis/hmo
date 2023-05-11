const connection = require("../DB");

//getAll type_of_vaccine
exports.getAll = async () => {
    let query = "SELECT * FROM type_of_vaccine";
    return await connection.execQuery(query);
}

//getById type_of_vaccine
exports.getByIdType_of_vaccine=async(id)=>{
    let query="SELECT * FROM type_of_vaccine WHERE id = ${id}"
    return await connection.execQuery(query);
}

//getAll manufacturer
exports.gellAllManufacturer=async()=>{
    let query="SELECT * FROM manufacturer"
    return await connection.execQuery(query);
}

//getById manufacturer
exports.getByIdManufacturer=async(id)=>{
    let query="SELECT * FROM manufacturer WHERE id = ${id}"
    return await connection.execQuery(query);
}

//getAll vaccination_for_patient
exports.getAllVaccination_for_patient = async () => {
    let query = "SELECT * FROM vaccination_for_patient";
    return await connection.execQuery(query);
}


//post vaccination_for_patient
exports.postVaccateMember=async(body)=>{
    let query = `INSERT INTO vaccination_for_patient (vaccination_date,hmo_member_id,type_of_vaccine_id) VALUES (STR_TO_DATE('${body.vaccination_date}', '%Y-%m-%dT%H:%i:%s.%fZ'),'${body.hmo_member_id}','${body.type_of_vaccine_id}')`
     return await connection.execQuery(query);
}



exports.count=async(id)=>{
    let query=
   `select count(hmo.vaccination_for_patient.hmo_member_id) as c
    from hmo.vaccination_for_patient
    where hmo.vaccination_for_patient.hmo_member_id=${id}`
    return await connection.execQuery(query);
}