const data_city = require("../data/data_city")

exports.postCity = async (req, res) => {
    try {
        //testing whether the city name of the city exists before adding, if it does, it will throw an error
        const isExsist = await data_city.getIdByName(req.body.city_name);
        if (isExsist[0][0])
            throw ("The name of the city already exists in the data institution");

        const rows = await data_city.postCity(req.body);
        if (rows)
            res.send(rows[0]);
        else
            throw ("data is null")
    }
    catch (err) {
        res.status(500)
        res.send(err)
    }
}


exports.getAllCities = async (req, res) => {
    try {
        const rows = await data_city.getAllCities();
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
