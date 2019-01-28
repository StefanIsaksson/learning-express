const express = require('express');
const triassicRouter = require('./src/routes/triassicRoute');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use('/triassic', triassicRouter);
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
