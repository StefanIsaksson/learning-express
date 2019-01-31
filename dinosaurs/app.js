const express = require('express');
const MongoClient = require('mongodb').MongoClient;


const app = express();
const port = process.env.PORT || 3000;
const url = 'mongodb://localhost:27017';
const dbName = 'dino';

app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
    { link: "/", title: 'Home' },
    { link: "/dino?period=triassic", title: 'Triassic' },
    { link: "/dino?period=jurassic", title: 'Jurassic' },
    { link: "/dino?period=cretaceous", title: 'Cretaceous' }];

(async function mongo() {
    let client;
    try {
        client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const dinoRouter = require('./src/routes/dinoRoute')(nav, db);

        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        });

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

    } catch (err) {
        console.log(err.stack);
    }
})();


