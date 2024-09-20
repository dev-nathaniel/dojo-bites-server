const { default: mongoose } = require("mongoose");

const RestaurantSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        about: {type: String},
        location: {type: String},
        distance: {type: Number}
    },
    {timestamps: true}
)

module.exports = mongoose.model('Restaurant', RestaurantSchema)
module.exports = RestaurantSchema