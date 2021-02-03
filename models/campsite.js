const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    });

const Campsite = mongoose.model('Campiste', campsiteSchema);

module.exports = Campsite;