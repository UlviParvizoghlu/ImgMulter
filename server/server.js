const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.CONNECTION_STRING).then(() => {
    console.log("db connected")
})
const imageRouter = require("./routes/image.routes")
app.use(express.json())
app.use(cors())
app.use("/images", imageRouter)
app.listen(process.env.PORT, () => {
    console.log(`server run ${process.env.PORT}`)
})