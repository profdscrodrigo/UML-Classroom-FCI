const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const app = express()
const admin = require("./rotas/admin")
const path = require("path")
const mongoose  = require("mongoose")
const session = require("express-session")
const flash = require("connect-flash")
const { waitForDebugger } = require("inspector")
require("../models/Aluno")
const Aluno = mongoose.model("alunos")
require("../models/Usuario")
const Usuario = mongoose.model("usuarios")
require("../models/Turma")
const Turma = mongoose.model("turmas")
const usuario = require("./rotas/usuario")
const passport = require("passport")
require("./config/auth")(passport)


//configurações
    //Sessão
        app.use(session({
            secret: "sistemachamada",
            resave: true,
            saveUninitialized: true
        }))

        app.use(passport.initialize())
        app.use(passport.session())
        app.use(flash())

    //Middleware
        app.use((req, res, next) => {
            res.locals.success_msg = req.flash("success_msg")
            res.locals.error_msg = req.flash("error_msg")
            res.locals.error = req.flash("error")
            res.locals.user = req.user || null;
            next()
        })

    //body parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    //handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set("view engine", "handlebars");
    //mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://127.0.0.1/blogapp").then(() => {
        console.log("Conectado ao mongo")
      }).catch((err) => {
        console.log("Erro ao se conectar: "+err)
      })  
    //public
    app.use(express.static(path.join(__dirname,"public")))

//rotas
app.get("/postagem/:slug", async(req, res) =>{
    const ler = await Postagem.findOne({slug: req.params.slug}).lean()
    if(ler === null){
        req.flash("error_msg", "Esta postagem não existe")
        res.redirect("/")
    }else{
        res.render("postagem/index", {dados: ler})
    }
})

app.get("/categorias", async(req, res) => {
    const cat = await Categoria.find().lean()
    res.render("categorias/index", {dados: cat})
})

app.get("/categorias/:id", async(req, res) => {
    const cat = await Postagem.find({categoria: req.params.id}).populate("categoria").lean()
        if(cat == null){
            req.flash("error_msg", "Não há postagens dessa categoria")
            res.redirect("/categorias")
        }else{
            res.render("categorias/postagens", {dados: cat})
        }

})

app.get("/", async(req, res) => {
    const post = await Postagem.find({}).populate("categoria").sort({date:'desc'}).lean()
    res.render("index", {dados: post});
    })

app.use("/admin", admin)
app.use("/usuario", usuario)

//outros
const PORT = 8081
app.listen(PORT,() => {
console.log("Servidor rodando na porta")
});