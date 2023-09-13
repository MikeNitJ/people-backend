require("dotenv").config()

const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

mongoose.connection
    .on("open", () => console.log("Connected to mongodb"))
    .on("close", () => console.log("Connected Close"))
    .on("error", () => console.log("Error occured", e))

module.exports = mongoose