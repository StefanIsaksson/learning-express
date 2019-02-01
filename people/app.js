const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://localhost/ppl');
const port = process.env.PORT || 3000;
const People = require('./models/peopleModel');
const peopleRouter = require('./routes/peopleRouter')(People);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/api/v1', peopleRouter);

app.get('/', (req, res) => {
  res.send('Welcome to People API');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
