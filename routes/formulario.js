module.exports = (app) =>{
    app.get('/formulario',(req,res)=>{
        res.render('formulario.ejs')
    })

    app.post('/formulario',(req,res) =>{
        res.send(req.body)
    })
}