const data_login = require("../data/data_login")

exports.login = async (req, res) => {
    try {
        const rows = await data_login.login(req.body.email, req.body.password);
        res.send(rows[0][0]);
    }
    catch (err) {
        res.status(403)
        res.send({ message: "לא נמצא במערכת" })
    }
}