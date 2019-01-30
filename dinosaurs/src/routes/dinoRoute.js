const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const dinoRouter = express.Router();

function router(nav) {

  const url = 'mongodb://localhost:27017';
  const dbName = 'dino';

  dinoRouter.route('/')
    .get((req, res) => {
      const { period } = req.query;
      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          console.log('Connected correctly to server');
          const db = client.db(dbName);
          const col = await db.collection('dinos');
          const dinos = await col.find({ period: period }).toArray();
          console.log('dinos' + dinos);

          res.render(
            'dinoListView',
            {
              nav,
              title: period,
              dinos
            }
          );
        } catch (err) {
          console.log(err.stack);
        }
        client.close();
      }());
    });

  dinoRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      
      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          console.log('Connected correctly to server');
          const db = client.db(dbName);
          const col = await db.collection('dinos');
          console.log('id ' + id);
          const dino = await col.findOne({ 'id': Number(id) });
          console.log('dinos' + dino);

          res.render(
            'dinoView',
            {
              nav,
              title: dino.period,
              dino
            }
          );
        } catch (err) {
          console.log(err.stack);
        }
        client.close();
      }());
/*      const dino = dinos.find(x => parseInt(x.id) === parseInt(id));
      res.render(
        'dinoView',
        {
          nav,
          title: "Triassic",
          dino: dino
        }
      );
*/
    });
    
  return dinoRouter;
}

module.exports = router;