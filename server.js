const express = require('express');
const methodOverride = require('method-override');
const controllers = require('./controllers');
const db = require('./models/index');
const PORT = process.env.PORT || 4000;
const bodyparser = require('body-parser');
const app = express();
require('./config/db.connection');
const createError = require('http-errors');
const session = require('express-session');
const passport = require('passport');
// Middlewear

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(express.urlencoded({ extended: true }))
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            sameSite: 'lax',
        }
    })
)
require('./config/passport.js')
app.use(passport.initialize())
app.use(passport.session())
// Controllers here



app.get('/', async (req, res, next) => {
    try {
        // if(!req.session) res.redirect('/login')
        const facts = await db.Facts.find({});
        const context = { facts }
        console.log(facts);
        return res.render('index.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

app.post('/', async (req, res, next) => {
    try {
        // console.log(`The req.body is ${req.body}`)
        const createdFact = await db.Facts.create(req.body);
        console.log(`The created product is ${createdFact}`)
        res.redirect('/');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})
// app.use('/facts', controllers.facts) 
// app.use('/profiles', controllers.profile) 



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))