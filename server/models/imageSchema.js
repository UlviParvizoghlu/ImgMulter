const mongoose = require("mongoose")

const imageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        image: Buffer,
        contentType: String
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
})
const imageModel = mongoose.model("Images", imageSchema)
module.exports = imageModel