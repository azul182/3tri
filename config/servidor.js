//importar o pacote express 
const express = require('express')
//executar o express application 
const app = express()

//configurar a porta remotaq e local 
const porta = process.env.PORT || 666

//importar o pacote consign 
const consign = require('consign')
//executar e configurar o consign 
consign().include('./routes').into(app)

//definir a pasta dos assets (css, images, js)
app.use(express.static("./src/"))

//definir os conteudos com acesso externo
module.exports = {app,porta}