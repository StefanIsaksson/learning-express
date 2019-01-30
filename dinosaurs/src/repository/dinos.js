const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'dino';
  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url);
      const db = client.db(dbName);
      const col = await db.collection('dinos');
      console.log(col);
      const result = await col.find().toArray();
      console.log(result);
      client.close();
      return await result;
    } catch (err) {
      console.log(err.stack);
      client.close();
    }
  }());

