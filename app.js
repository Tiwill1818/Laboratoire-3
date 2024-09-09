/*
 * @file app.js
 * @author William Robert
 * @version 1.00
 * @date 2024/09/09
 * @brief Création d’un site modulaire sous NodeJs avec Express
 */


var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(
            '<!DOCTYPE html>'
        +   '<html lang="fr">'
        +   '<head>'
        +       '<meta charset="UTF-8">'
        +       '<title>Super Awesome</title>'
        +       '<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">'
        +   '</head>'
        +   '<body class="container">'
        +       '<header>'
        +           '<nav class="navbar navbar-default" role="navigation">'
        +               '<div class="container-fluid">'
        +                   '<div class="navbar-header">'
        +                       '<a class="navbar-brand" href="#">'
        +                           '<span class="glyphicon glyphicon glyphicon-tree-deciduous"></span>'
        +                           'EJS Is Fun'
        +                       '</a>'
        +                   '</div>'
        +                   '<ul class="nav navbar-nav">'
        +                       '<li><a href="/">Home</a></li>'
        +                       '<li><a href="/contact">Contact</a></li>'
        +                   '</ul>'
        +               '</div>'
        +           '</nav>'
        +       '</header>'
        
        +       '<main>'
        +           '<div class="jumbotron">'
        +               '<h1> Bienvenue dans mon super site ! </h1>'
        +           '</div>'
        +       '</main>'

        +       '<footer>'
        +           '<p class="text-center text-muted">© Copyright 2024 William Robert</p>'
        +       '</footer>'

        +   '</body>'
        +   '</html>'
    );
});

app.get('/contact', function (req, res) {
    res.send(
            '<!DOCTYPE html>'
        +   '<html lang="fr">'
        +   '<head>'
        +       '<meta charset="UTF-8">'
        +       '<title>Super Awesome</title>'
        +       '<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">'
        +   '</head>'
        +   '<body class="container">'
        +       '<header>'
        +           '<nav class="navbar navbar-default" role="navigation">'
        +               '<div class="container-fluid">'
        +                   '<div class="navbar-header">'
        +                       '<a class="navbar-brand" href="#">'
        +                           '<span class="glyphicon glyphicon glyphicon-tree-deciduous"></span>'
        +                           'EJS Is Fun'
        +                       '</a>'
        +                   '</div>'
        +                   '<ul class="nav navbar-nav">'
        +                       '<li><a href="/">Home</a></li>'
        +                       '<li><a href="/contact">Contact</a></li>'
        +                   '</ul>'
        +               '</div>'
        +           '</nav>'
        +       '</header>'
        
        +       '<main>'
        +           '<table class="table">'
        +               '<thead>'
        +                   '<tr>'
        +                       '<th>Nom</th>'
        +                       '<th>Prenom</th>'
        +                       '<th>Adresse</th>'
        +                       '<th>Telephone</th>'
        +                       '<th>Email</th>'
        +                   '</tr>'
        +               '</thead>'
        +               '<tbody>'
        +                   '<tr>'
        +                       '<td>Robert</td>'
        +                       '<td>William</td>'
        +                       '<td>69 rue Duquet</td>'
        +                       '<td>111-222-3333</td>'
        +                       '<td><a href="mailto:williamrobert1030@icloud.com">williamrobert1030@icloud.com</a></td>'
        +                   '</tr>'
        +                   '<tr>'
        +                       '<td>Gates</td>'
        +                       '<td>Bill</td>'
        +                       '<td>420 rue Microsoft</td>'
        +                       '<td>456-147-1245</td>'
        +                       '<td><a href="mailto:billgates@hotmail.com">billgates@hotmail.com</a></td>'
        +                   '</tr>'
        +               '</tbody>'
        +           '</table>'
        +       '</main>'

        +       '<footer>'
        +           '<p class="text-center text-muted">© Copyright 2024 William Robert</p>'
        +       '</footer>'

        +   '</body>'
        +   '</html>'
    );
});

app.get('/module/:id', function (req, res) {
    res.send(
            '<!DOCTYPE html>'
        +   '<html lang="fr">'
        +   '<head>'
        +       '<meta charset="UTF-8">'
        +       '<title>Super Awesome</title>'
        +       '<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">'
        +   '</head>'
        +   '<body class="container">'
        +       '<header>'
        +           '<nav class="navbar navbar-default" role="navigation">'
        +               '<div class="container-fluid">'
        +                   '<div class="navbar-header">'
        +                       '<a class="navbar-brand" href="#">'
        +                           '<span class="glyphicon glyphicon glyphicon-tree-deciduous"></span>'
        +                           'EJS Is Fun'
        +                       '</a>'
        +                   '</div>'
        +                   '<ul class="nav navbar-nav">'
        +                       '<li><a href="/">Home</a></li>'
        +                       '<li><a href="/contact">Contact</a></li>'
        +                   '</ul>'
        +               '</div>'
        +           '</nav>'
        +       '</header>'
        
        +       '<main>'
        +           '<div class="jumbotron">'
        +               '<p>Module ' + ((req.params.id>='1' && req.params.id<='6') ? req.params.id : 'inconnu') + '</p>'
        +           '</div>'
        +       '</main>'

        +       '<footer>'
        +           '<p class="text-center text-muted">© Copyright 2024 William Robert</p>'
        +       '</footer>'

        +   '</body>'
        +   '</html>'
    );
});

app.use(function (req, res) {
    res.status(404).send(
            '<!DOCTYPE html>'
        +   '<html lang="fr">'
        +   '<head>'
        +       '<meta charset="UTF-8">'
        +       '<title>Super Awesome</title>'
        +       '<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">'
        +   '</head>'
        +   '<body class="container">'
        +       '<header>'
        +           '<nav class="navbar navbar-default" role="navigation">'
        +               '<div class="container-fluid">'
        +                   '<div class="navbar-header">'
        +                       '<a class="navbar-brand" href="#">'
        +                           '<span class="glyphicon glyphicon glyphicon-tree-deciduous"></span>'
        +                           'EJS Is Fun'
        +                       '</a>'
        +                   '</div>'
        +                   '<ul class="nav navbar-nav">'
        +                       '<li><a href="/">Home</a></li>'
        +                       '<li><a href="/contact">Contact</a></li>'
        +                   '</ul>'
        +               '</div>'
        +           '</nav>'
        +       '</header>'
        
        +       '<main>'
        +           '<div class="jumbotron">'
        +               '<p>404 Page introuvable</p>'
        +           '</div>'
        +       '</main>'

        +       '<footer>'
        +           '<p class="text-center text-muted">© Copyright 2024 William Robert</p>'
        +       '</footer>'

        +   '</body>'
        +   '</html>'
    );
});

app.listen(8080);