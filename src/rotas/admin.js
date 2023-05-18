const express = require("express")
const rotas = express.Router()
const mongoose = require("mongoose")
require("../models/Aluno")
const Aluno = mongoose.model("alunos")
require("../models/Usuario")
const Usuario = mongoose.model("usuarios")
require("../models/Turma")
const Turma = mongoose.model("turmas")
const {eAdmin} = require("../helpers/eAdmin") 
const bcrypt = require("bcryptjs")

rotas.get("/usuarios", async(req, res, next) => {
        const usu = await Usuario.find({}).sort({nome:'desc'}).lean()
        res.render("admin/listaUsuario", {dados: usu});
})
    

rotas.get("/usuarios/add", (req, res) => {
    res.render("admin/addusuario")
}) 

rotas.post("/usuarios/cadastro", (req, res) => {
        
    const novoUsuario = new Usuario({
        nome: req.body.nome,
        matricula: req.body.matricula,
        email: req.body.email,
        cargo: req.body.cargo,
        status: req.body.status,
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
})



rotas.get("/turmas", async(req, res, next) => {
    const cat = await Turma.find().lean()
    res.render("admin/turmas", {rel_pos: cat});
})

rotas.get("/turmas/add", async(req, res) => {
    const prof = await Usuario.find().lean()
    res.render("admin/addturmas", {dados: prof});
})

rotas.post("/turmas/cadastro", async(req, res) => {
    
        const novaTurma = new Turma ({
            titulo: req.body.titulo,
            turno: req.body.turno,
            professor: req.body.professor
            })

            novaTurma.save()
            res.redirect("/admin/turmas")
})



module.exports = rotas;