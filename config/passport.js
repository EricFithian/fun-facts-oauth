require('../models/User');
require('dotenv').config();

// new code below
// configure passport
const passport = require('passport');
const Strategy = require('passport-google-oauth20');
const GoogleStrategy = Strategy.Strategy;

passport.use(
    new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK,
    },
        function (accessToken, refreshToken, profile, done) {
            // a user has logged in with OAuth...
        }
    )
  )