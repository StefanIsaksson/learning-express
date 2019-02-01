const express = require('express');

function routes(People) {
  const peopleRouter = express.Router();

  peopleRouter.route('/people')
    .post((req, res) => {
      const person = new People(req.body);

      person.save();
      return res.status(201).json(person);
    })
    .get((req, res) => {
      const query = {};
      if (req.query.occupation) {
        query.occupation = req.query.occupation;
      }
      if (req.query.nationality) {
        query.nationality = req.query.nationality;
      }
      People.find(query, (err, people) => {
        if (err) {
          return res.send(err);
        }
        return res.json(people);
      });
    });
  peopleRouter.use('/people/:id', (req, res, next) => {
    People.findById(req.params.id, (err, person) => {
      if (err) {
        return res.send(err);
      }
      if (person) {
        req.person = person;
        return next();
      }
      return res.sendStatus(404);
    });
  });
  peopleRouter.route('/people/:id')
    .get((req, res) => {
      return res.json(req.person);
    })
    .put((req, res) => {
      const { person } = req;
      person.name = req.body.name;
      person.occupation = req.body.occupation;
      person.born = req.body.born;
      person.died = req.body.died;
      person.description = req.body.description;
      person.nationality = req.body.nationality;
      person.qoute = req.body.qoute;
      person.save();
      return res.json(person);
    })
    .patch((req,res) => {
      const { person } = req;
      
      if(req.body._id){
        delete req.body._id;
      }
      Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        person[key] = value;
      });
      person.save((err) => {
        if(err){
          return res.send(err);
        }
        return res.json(person);
      })
    })
    .delete((req,res) => {
      req.person.remove((err) => {
        if(err){
          return res.send(err);
        }
        return res.sendStatus(204);
      });
    });

  return peopleRouter;
}

module.exports = routes;