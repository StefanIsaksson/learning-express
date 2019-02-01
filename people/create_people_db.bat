mongo ppl --eval "printjson(db.dropDatabase())"
mongoimport --db ppl --collection people --file people.json --jsonArray