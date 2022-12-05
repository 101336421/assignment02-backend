const express = require("express")
const employeeRoutes = require("./routes/employees")
const mongoose = require("mongoose")
const app = express()
const SERVER_PORT = process.env.PORT || 3030;
var cors = require("cors")
require("dotenv").config()

app.use(express.json())

app.use(cors())

mongoose.connect("mongodb+srv://vaibhavg:vaibhavlovesmongo@cluster0.abtdqsf.mongodb.net/?retryWrites=true&w=majority", {

useNewUrlParser:true,
useUnifiedTopology:true
})

app.route("/check")
    .get((req, res) => {
    res.send("Hello world! This is Vaibhav Guliani")
})


//employeeAPI
app.use("/api/", employeeRoutes)

//userRouter
const userRoutes = require("./routes/users")
//userAPI
app.use("/api/", userRoutes)

app.listen(process.env.PORT || 3030, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
    console.log("Press CTRL + C to stop server")
});




