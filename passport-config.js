const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/oauth/callback"
    },
    (accessToken, refreshToken, _, done) => {
      console.log("access token: ", accessToken);
      console.log("refresh token: ", refreshToken);
      done(null, null)
    }
  )
);