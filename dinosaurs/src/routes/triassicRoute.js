const express = require('express');

const triassicRouter = express.Router();

var dinos = [
  {
      "id": 1,
      "name": "Saturnalia",
      "type": "Sauropodomorph",
      "length": "1.5m",
      "mya": "233",
      "description": "Herbivorous and of the earliest of all dinosaurs.",
      "picture" : "https://upload.wikimedia.org/wikipedia/commons/0/01/Saturnalia_NT_small.jpg"
  },
  {
      "id": 2,
      "name": "Staurikosaurus",
      "type": "Saurischian",
      "length": "2.25m",
      "mya": "233",
      "description": "Small meat eater. One of the earliest dinosaurs.",
      "picture" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Human-staurikosaurus_size_comparison.svg/320px-Human-staurikosaurus_size_comparison.svg.png"
  },
  {
      "id": 3,
      "name": "Thecodontosaurus",
      "type": "Sauropodomorph (an early sauropod)",
      "length": "2m",
      "mya": "203-201",
      "description": "Relatively small Triassic dinosaur.",
      "picture" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Thecodontosaurus_Scale.svg/320px-Thecodontosaurus_Scale.svg.png"
  },
  {
      "id": 4,
      "name": "Riojasaurus",
      "type": "Sauropodomorph (an early sauropod)",
      "length": "10m",
      "mya": "221-210",
      "description": "Large sauropodomorph.",
      "picture" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Riojasaurus_Scale.svg/800px-Riojasaurus_Scale.svg.png"
  }
];

triassicRouter.route('/')
    .get((req, res) => {
        res.render(
            'dinoListView',
            {
                nav: [
                    { link: "/", title: 'Home' },
                    { link: "/triassic", title: 'Triassic' },
                    { link: "/jurassic", title: 'Jurassic' },
                    { link: "/cretaceous", title: 'Cretaceous' }],
                title: "Triassic",
                dinos
            }
        );
    });

triassicRouter.route('/:id')
    .get((req, res) => {
        const { id } = req.params;
        const dino = dinos.find(x => parseInt(x.id) === parseInt(id));
        res.render(
          'dinoView',
          {
              nav: [
                  { link: "/", title: 'Home' },
                  { link: "/triassic", title: 'Triassic' },
                  { link: "/jurassic", title: 'Jurassic' },
                  { link: "/cretaceous", title: 'Cretaceous' }],
              title: "Triassic",
              dino : dino
          }
        );
    });

  module.exports = triassicRouter;