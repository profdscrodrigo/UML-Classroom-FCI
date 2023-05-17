const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Turma = new Schema({
    titulo:{
        type: String,
        required: true
    },
    turno:{
        type: String,
        required: true
    },
    professor:{
        type: Schema.Types.ObjectId,
        ref: "usuarios",
        required: true
    },
})

mongoose.model("turmas", Turma)