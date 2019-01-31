const express = require('express');

const dinoRouter = express.Router();

function router(nav,db) {

  dinoRouter.route('/')
    .get((req, res) => {
      const { period } = req.query;
      (async function mongo() {
        let client;
        try {
          const col = await db.collection('dinos');
          const dinos = await col.find({ period: period }).toArray();
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
      }());
    });

  dinoRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      
      (async function mongo() {
        let client;
        try {
          const col = await db.collection('dinos');
          const dino = await col.findOne({ 'id': Number(id) });
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
      }());
    });
    
  return dinoRouter;
}

module.exports = router;