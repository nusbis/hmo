const data_vaccinatiov = require("../data/data_vaccination")
const data_hmo_member = require("../data/data_hmo_member");

exports.getAll = async (req, res) => {
    try {
        const rows = await data_vaccinatiov.getAll();
        if (rows)
            res.send(rows[0]);
        else
            throw ("data is null")
    }
    catch (err) {
        res.status(500)
        res.send({ message: "אירעה שגיאה" })
    }
}

exports.gellAllManufacturer = async (req, res) => {
    try {
        const rows = await data_vaccinatiov.gellAllManufacturer();
        if (rows)
            res.send(rows[0]);
        else
            throw ("data is null")
    }
    catch (err) {
        res.status(500)
        res.send({ message: "אירעה שגיאה" })
    }
}


exports.getAllVaccination_for_patient = async (req, res) => {
    try {
        const rows = await data_vaccinatiov.getAllVaccination_for_patient();
        if (rows)
            res.send(rows[0]);
        else
            throw ("data is null")
    }
    catch (err) {
        res.status(500)
        res.send({ message: "אירעה שגיאה" })
    }
}

exports.postVaccateMember = async (req, res) => {
    try {

        // A test that a person wants to vaccinate is available in the database at the Kopf     
        const isR = await data_hmo_member.getByID(req.body.hmo_member_id)
        if (isR[0][0]) {
            const answer = await data_vaccinatiov.count(req.body.hmo_member_id);

            //If the person has been vaccinated 4 times or more, an error will be sent
            const count = (answer[0][0]).c;
            if (count > 4)
                throw ("You have already been vaccinated four times, you cannot be vaccinated again");

            //Added a vaccine to a member who is a loser
            const rows = await data_vaccinatiov.postVaccateMember(req.body);
            if (rows)
                res.send(rows[0]);
            else
                throw ("data is null")
        }
        else
            throw ("this id isnt exsist")
    }
    catch (err) {
        res.status(500)
        res.send({ err })
    }
}
