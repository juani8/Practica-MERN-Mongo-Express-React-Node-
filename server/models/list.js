const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    name: String,
    pictures: [{ type: String }],
});

const ListModel = mongoose.model('List', ListSchema);

module.exports = ListModel;