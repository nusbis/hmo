const data_hmo_member = require("../data/data_hmo_member")

exports.getAll = async (req, res) => {
    try {
        const rows = await data_hmo_member.getAll();
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

exports.getByID = async (req, res) => {
    try {
        const rows = await data_hmo_member.getByID(req.params.id);
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

exports.postMember = async (req, res) => {
    try {
        const rows = await data_hmo_member.postMember(req.body);
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

exports.amountOfUnvaccinatedPOSMembers = async (req, res) => {
    try {
        const rows = await data_hmo_member.amountOfUnvaccinatedPOSMembers();
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
