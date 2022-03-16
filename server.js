const express= require('express')
const app = express()


app.get('/notes',(req,res)=>{
    res.render('notes.ejs')
})

app.get('/assignment',(req,res)=>{
    res.render('assignment.ejs')
})
app.get('/resoureses',(req,res)=>{
    res.render('resoureses.ejs')
})

app.listen(3000)