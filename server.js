const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require('./data')


const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('pages', {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    return res.render('index', {items: recipes})
})

server.get("/about", function(req, res){
    return res.render('about')
})

server.get("/receitas", function(req, res){
    return res.render('receitas', {items: recipes})
})

server.get("/recipes/:id", function(req, res) {
    const id = req.params.id
    return res.render("recipes", { item: recipes[id] })
  })


server.listen(5000, function(){
    console.log('Server on')
})