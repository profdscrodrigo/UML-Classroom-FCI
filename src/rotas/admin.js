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

rotas.get("/", function(req, res){
    res.render("admin/index")
});

rotas.get("/usuarios", async(req, res, next) => {
        const usu = await Usuario.find({}).sort({nome:'desc'}).lean()
        res.render("admin/listaUsuario", {dados: usu});
})
    

rotas.get("/categorias/add", (req, res) => {
    res.render("admin/addcategorias")
}) 

rotas.post("/categorias/nova", (req, res) => {
    
    var erros = []

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome inválido"})
    }
    
    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        erros.push({texto: "Slug inválido"})
    }

    if(req.body.nome.length < 2){
        erros.push({texto: "Nome da categoria é muito pequeno"})
    }
    
    if(erros.length > 0){
        res.render("admin/addcategorias", {erros: erros})
    }else{
       const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
    }
    new Categoria(novaCategoria).save().then(() => {
        req.flash("success_msg", "Categoria criada com sucesso")
        res.redirect("/admin/categorias")
    }).catch((err) => {
        req.flash("error_msg", "Erro ao salvar categoria")
        res.redirect("/admin")
    })
    }
})

rotas.get("/categorias/edit/:id", async(req, res, next) => {
    const cat = await Categoria.findOne({_id:req.params.id}).lean()
        res.render("admin/editcategorias", {dados: cat});
    })


rotas.post("/categorias/edit", async(req, res) => {
    const cat = await Categoria.findOne({_id: req.body.id})
    cat.nome = req.body.nome;
    cat.slug = req.body.slug;
    if(await cat.save()) {
        req.flash("success_msg", "Categoria atualilzada")
        res.redirect("/admin/categorias") 
    }else{
        req.flash("error_msg", "Erro ao atualizar categoria")
        res.redirect("/admin/categorias")
    } 
    })

rotas.post("/categorias/deletar", async(req, res) => {
    const cat = await Categoria.findByIdAndDelete({_id: req.body.id})
        if(cat == null){
            req.flash("error_msg", "Erro ao deletar categoria") 
            res.redirect("/admin/categorias")
        }else{
            req.flash("success_msg", "Categoria deletada")
            res.redirect("/admin/categorias")
        }
    })

rotas.get("/postagens", async(req, res, next) => {
    const cat = await Postagem.find().lean().populate("categoria").sort({date:'desc'})
    res.render("admin/postagens", {rel_pos: cat});
})

rotas.get("/postagens/ad", async(req, res) => {
    const cat = await Categoria.find().lean()
    res.render("admin/addpostagens", {dados: cat});
})

rotas.post("/postagens/nova", async(req, res) => {
    let erros = []

    if(req.body.categoria == "0"){
        erros.push({texto: "Categoria inválida, registre uma categoria"})
    }
    if(erros.length > 0){
        res.render("admin/addpostagens", {erros: erros})
    }else{
        const novaPostagem = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            conteudo: req.body.conteudo,
            categoria: req.body.categoria,
            slug: req.body.slug
        }

        const posta = new Postagem(novaPostagem)
        if(await posta.save()) {
            req.flash("success_msg", "Postagem cadastrada")
            res.redirect("/admin/postagens") 
        }else{
            req.flash("error_msg", "Erro ao salvar postagem")
            res.redirect("/admin/postagens")
        } 
    }
})

rotas.get("/postagens/edit/:id", async(req, res, next) => {
    const pos = await Postagem.findOne({_id: req.params.id}).lean()
    const cat = await Categoria.find().lean()
    res.render("admin/editpostagens", {dados: cat, rel_pos: pos})
})

rotas.post("/postagens/edit", async(req, res) => {
    const poste = await Postagem.findOne({_id: req.body.id})
    poste.titulo = req.body.titulo
    poste.slug = req.body.slug
    poste.descricao = req.body.descricao
    poste.conteudo = req.body.conteudo
    poste.categoria = req.body.categoria
    if(await poste.save()) {
        req.flash("success_msg", "Postagem atualizada")
        res.redirect("/admin/postagens") 
    }else{
        req.flash("error_msg", "Erro ao atualizar postagem")
        res.redirect("/admin/postagens")
    } 
})


rotas.get("/postagens/deletar/:id", async(req, res) => {
    const cat = await Postagem.findByIdAndDelete({_id: req.params.id})
        if(cat == null){
            req.flash("error_msg", "Erro ao deletar postagem") 
            res.redirect("/admin/postagens")
        }else{
            req.flash("success_msg", "Postagem deletada")
            res.redirect("/admin/postagens")
        }
    })



module.exports = rotas;