const mongoose = require('mongoose');

const factsSchema = new mongoose.Schema({
    fact: {
        type: String,
        required: [true, 'fact cannot be empty :(']
    }
},
    {
        timestamps: true
    }
);

// mongoose.model(<mongodb collection name>, our schema)
const Fact = mongoose.model('Fact', factsSchema);

module.exports = Fact;