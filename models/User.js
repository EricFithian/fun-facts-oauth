// models/User.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty :(']
    },
    price: {
        type: Number,
        min: [0, 'you cannot add a negative number!'],
        required: [true, 'price cannot be empty!']
    },
    image: {
        type: String,
        required: [true, 'image cannot be empty!']
    }
},
    {
        timestamps: true
    }
);

// mongoose.model(<mongodb collection name>, our schema)
const Product = mongoose.model('Product', productSchema);

module.exports = Product;