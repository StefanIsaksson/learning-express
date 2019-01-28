const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const orniRouter = express.Router();

app.set('views', './src/views');
app.set('view engine', 'ejs');


var triassicDinosaurs = [
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
    }
];

orniRouter.route('/')
    .get((req, res) => {
        res.render(
            'triassic',
            {
                nav: [
                    { link: "/", title: 'Home' },
                    { link: "/triassic", title: 'Triassic' },
                    { link: "/jurassic", title: 'Jurassic' },
                    { link: "/cretaceous", title: 'Cretaceous' }],
                title: "Triassic",
                triassicDinosaurs
            }
        );
    });

orniRouter.route('/single')
    .get((req, res) => {
        res.send('hello single triassic');
    });

app.use('/triassic', orniRouter);
app.get('/', (req, res) => {
    res.render(
        'index',
        {
            nav: [
                { link: "/", title: 'Home' },
                { link: "/triassic", title: 'Triassic' },
                { link: "/jurassic", title: 'Jurassic' },
                { link: "/cretaceous", title: 'Cretaceous' }],
            title: 'Home'
        }
    );
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
