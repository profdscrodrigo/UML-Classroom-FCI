const localStrategy = require("passport-local").Strategy
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

//model de usuário
require("../models/Usuario")
const Usuario = mongoose.model("usuarios")

module.exports = function(passport){

    passport.use(new localStrategy({usernameField: "email", passwordField: "senha"}, async(email, senha, done) => {
        usuario = await Usuario.findOne({email: email})

            if(!usuario){
                return done(null, false, {message: "Esta conta não existe"})
            }

            bcrypt.compare(senha, usuario.senha, (erro, batem) => {

                if(batem){
                    return done(null, usuario)
                    }else{
                        return done(null, false, {message: "senha incorreta"})
                    }
            })
    }))

    passport.serializeUser((usuario, done) => {
        done(null, usuario)
        })

    passport.deserializeUser((usuario, done) => {
        done(null, usuario)
        })
    }