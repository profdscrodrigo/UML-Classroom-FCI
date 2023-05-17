const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Aluno = new Schema({
    nome: {
        type: String,
        required: true
    },
    matricula: {
        type: Number,
        require: true
    },
    serie: {
        type: Number,
        require: true
    },
    turma: {
        type: String,
        require: true
    },
    resp1: {
        type: String,
        required: true
    },
    resp2: {
        type: String,
        required: true
    },
    email1: {
        type: String,
        required: true
    },
    email2: {
        type: String,
        required: true
    }
})

const alunos = mongoose.model("alunos", Aluno)