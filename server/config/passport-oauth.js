const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../db/schema/user');
const user = require('../db/schema/user');

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    user.findOne(id).then((user) => {
        done(null, user)
    })
})

passport.use(
    new GoogleStrategy({
        callbackURL: 'https://shoes-website-backend.vercel.app/user/google/redirect',
        clientID:process.env.CLIENTID,   
        clientSecret: process.env.CLIENTSECRET
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            //find user and also register user ..get google response
            let user = await User.findOne({ googleid: profile.id });
            if(user){
                done(null,user)
            }
            user = new User({
                name:profile.displayName,
                googleid: profile.id,
                email:profile.email
            })
            await user.save()
            done(null, user)
        } catch (error) {
            console.log('Error')
            done(null, error)
        }
    }
)
)