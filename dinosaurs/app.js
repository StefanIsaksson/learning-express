const express = require('express');


const app = express();
const port = process.env.PORT || 3000;

app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
    { link: "/", title: 'Home' },
    { link: "/dino?period=triassic", title: 'Triassic' },
    { link: "/dino?period=jurassic", title: 'Jurassic' },
    { link: "/dino?period=cretaceous", title: 'Cretaceous' }];

const dinoRouter = require('./src/routes/dinoRoute')(nav);
app.use('/dino', dinoRouter);
app.get('/', (req, res) => {
    res.render(
        'index',
        {
            nav,
            title: 'home'
        }
    );
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
