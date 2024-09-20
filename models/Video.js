const { default: mongoose } = require("mongoose");
const RestaurantSchema = require("./Restaurant");

const VideoSchema = new mongoose.Schema({
    videoLink: {type: String, required: true, index: true},
    caption: {type: String},
    tags: {type: Array},
    restaurant: {type: RestaurantSchema, required: true},
}, {timestamps: true})

module.exports = mongoose.model('Video', VideoSchema)