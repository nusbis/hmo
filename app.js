var express = require('express');
const bodyParser=require('body-parser')
var app = express();
app.use(express.json({type:["application/json","text/plain"]}));
app.use(bodyParser.json())

const cors = require("cors")
const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

const hmo_member_router=require("./routers/router_hmo_member");
app.use("/hmo_member",hmo_member_router);
app.use("/registration",hmo_member_router);

const logIn=require("./routers/router_login");
app.use("/login",logIn);

const patient=require("./routers/router_patient");
app.use("/hmo_member/patient/corona",patient);

const city=require("./routers/router_city");
app.use("/city",city);

const vaccination_router=require("./routers/router_vaccination");
app.use("/vaccination",vaccination_router);

app.listen(8080, () =>{
  console.log("Server is up and running on port 8080")
});