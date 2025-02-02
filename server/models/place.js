const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    title: String,
    address: String,
    photos: [String],
    description: String,
    extraInfo: String,
    checkIn: Date,
    checkOut: Date,
    maxGuests: Number,
});

const PlaceModel = mongoose.model('Place', PlaceSchema);

module.exports = PlaceModel;