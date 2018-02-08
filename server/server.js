require('dotenv').config()
const express = require('express')

const app = express()
// Middle ware import
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')

// Use top level middleware
app.use(bodyParser.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
// Auth 0 Hookup
const { DOMAIN, CLIENT_ID, CLIENT_SECRET, CALLBACK_URL } = process.env
passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    done(null, profile);
}))

passport.serializeUser((profile, done) => {
    done(null, profile);
})

passport.deserializeUser((profile, done) => {
    done(null, profile);
})
//////////////////////////// AUTH0 END///////////////////

//Enpoints
//// Auth 0 Endpoint
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/Dashboard'
}))

// Set server to listen
const { SERVER_PORT } = process.env
app.listen(SERVER_PORT, () => { console.log(`jammin on port: ${SERVER_PORT}`) })