if(process.env.NODE_ENV == "production") {
    module.exports = {mongoURI: "mongodb+srv://secretaria:sischamada@sistema1.wyese7z.mongodb.net/?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: "mongodb://127.0.0.1/sischamada"}
}