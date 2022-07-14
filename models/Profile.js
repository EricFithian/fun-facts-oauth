const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty :(']
    },
    avatar: {
        type: String,
        required: [true, 'avatar cannot be empty!']
    },
},
    {
        timestamps: true
    }
);

// mongoose.model(<mongodb collection name>, our schema)
const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;