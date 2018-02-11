const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//----------------------------------------------------------------------------//

const data = [];
var id = 0;

//----------------------------------------------------------------------------//

// Retourne un tableau avec tout les films
app.get('/api/movies', (req, res) => {
    res.status(200).json(data);
})

// Met à jour le film avec l’identifiant id
app.post('/api/movies/:id', (req, res) => {
  data.forEach(function(elem){
    if(req.params.id == elem.id){
      elem.title = req.body.title
      elem.releaseDate = req.body.releaseDate
      elem.langue = req.body.langue
      elem.genre = req.body.genre
      elem.realisateur = {
        nom : req.body.nom,
        prenom : req.body.prenom,
        nationalite : req.body.nationalite,
        date : req.body.date
      }
      res.status(200).json(data);
    }
  });
})

app.delete('/api/movies/:id', (req, res) => {
  data.forEach(function(item,index,object){
    if(req.params.id == item.id){
      object.splice(index, 1);
      res.status(200).json(data);
    }
  });
})

// Créé un nouveau film
app.post('/api/movies', (req, res) => {
  console.log(req.body.title);
  var item = {
    id : id,
    title : req.body.title,
    releaseDate : req.body.releaseDate,
    nationalite : req.body.langue,
    genre : req.body.genre,
    realisateur : {
      nom : req.body.nom,
      prenom : req.body.prenom,
      nationalite : req.body.nationalite,
      date : req.body.date
    }
  }
  data.push(item);
  id++;
  res.status(200).json(item);
})

app.use('/dist',express.static(path.resolve(__dirname,'../../dist/')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'index.html'))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.get('/', (req, res) => res.send('Hello World!'))
