const express = require('express')
const mongoose = require('mongoose')

const app = express()
const { MONGO_DB_CONFIG } = require("./config/app.config")
const errors = require("./middleware/errors")

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_DB_CONFIG.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
        console.log("Database is connected")
    },
    (error) => {
        console.log("Database cannot connect" + error)
    }
)

app.use(express.json())
app.use('/uploads', express.static('uploads'));
app.use("/api", require("./routes/app.routes"))
app.use(errors.errorHandler)

app.listen(process.env.port || 6666, function () {
    console.log(`Take Off!!!!!!`)
})