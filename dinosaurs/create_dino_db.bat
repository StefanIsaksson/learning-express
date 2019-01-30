mongo dino --eval "printjson(db.dropDatabase())"
mongoimport --db dino --collection dinos --file dinos.json --jsonArray