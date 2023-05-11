const data_patient = require("../data/data_patient")
const data_hmo_member = require("../data/data_hmo_member")
exports.postPatient = async (req, res) => {
    try {
        //בדיקה האם החבר שרוצה להיות חולה קיים בקופח
        const isR = await data_hmo_member.getByID(req.body.id)
        if (isR[0][0]) {
            //בדיקה האם כבר חלה כי כל אחד יכול להיות חולה פעם אחת וזהו
            const answer = await data_patient.exsist(req.body.id);
            if (answer[0][0].c != 0)
                throw ("No one is sick more than once")
            //הוספת האדם להיות חולה 
            const rows = await data_patient.postPatient(req.body);
            if (rows)
                res.send(rows[0]);
            else
                throw ("data is null")
        }
        else {
            throw ("the id isnt exsist")
        }
    }
    catch (err) {

        res.status(500)
        res.send({ err })
    }
}


exports.getAll = async (req, res) => {
    try {
        const rows = await data_patient.getAll();
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

exports.numberOfPatientsPerDay = async (req, res) => {
    try {
        const rows = await data_patient.numberOfPatientsPerDay();
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
