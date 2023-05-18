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
        type: Schema.Types.ObjectId,
        ref: "turmas",
        required: true
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

mongoose.model("alunos", Aluno)