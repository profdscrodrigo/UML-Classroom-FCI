const express = require("express")
const rotas = express.Router()
const mongoose = require("mongoose")
require("../models/Usuario")
const Usuario = mongoose.model("usuarios")
const bcrypt = require("bcryptjs")
const passport = require("passport")


rotas.get("/registro", (req, res) => {
    res.render("usuarios/registro")
})

rotas.post("/registro", async(req, res) => {
    var erros = []

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome inválido"})
    }
    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        erros.push({texto: "E-mail inválido"})
    }
    if(!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null){
        erros.push({texto: "Senha inválida"})
    }
    if(req.body.senha.length <4){
        erros.push({texto: "Senha muito curta"})
    }
    if(req.body.senha != req.body.senha2){
        erros.push({texto: "As senhas são diferentes, tente novamente!"})
    }
    if(await Usuario.findOne({email: req.body.email}).lean()){
        erros.push({texto: "Já existe uma conta cadastrada com este e-mail no nosso sistema!"})
    }    
    if(erros.length > 0){
     res.render("usuarios/registro", {erros: erros})   
     
    }else{  const novoUsuario = new Usuario({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha
                })

            bcrypt.genSalt(10, (erro, salt) => {
                bcrypt.hash(novoUsuario.senha, salt, (erro, hash) => {
                   if(erro){
                    req.flash("error_msg", "Houve um erro durante o salvamento do usuário") 
                    res.redirect("/")
                   }  
                    novoUsuario.senha = hash
                    try{
                        novoUsuario.save()
                        req.flash("success_msg", "Usuário cadastrado com sucesso")
                        res.redirect("/")  
                    } catch (err){
                        req.flash("error_msg", "Erro ao cadastrar usuário")
                        res.redirect("/")  
                    } 

                })
            })
            }
        })

rotas.get("/login", (req, res) =>{
    res.render("usuarios/login")
})

rotas.post("/login", (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/usuario/login",
        failureFlash: true
    })(req, res, next)
})

rotas.get("/logout", (req, res) => {
    req.logout((err) =>{
        if(err){
            return next(err)
            }else{
            req.flash("success_msg", "Deslogado com sucesso")
            res.redirect("/")
            }
    })
    
})


module.exports = rotas