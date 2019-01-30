# Dinosaurs - Server-side rendering with Express, EJS and mongoDB

# Purpose
Web application lists dinoaurs grouped by geologic period.

# Technologies
- **Express** is a minimal Node.js web application framework
- **EJS** is a JavaScript templating library used for building html strings from JSON data.
- **MongoDB** is a NoSQL database that stores JSON documents

# Install

## Prerequisite
- mongoDB installed (and running locally)

## Import data from json-file to mongoDB

`> mongoimport --db dino --collection dinos --file dinos.json --jsonArray`

## Useful mongoDB commands

|command   |description   |
|-------------------------|---------------------------------------------------------|
|show dbs                 |list databases                                           |
|use dino                 |switch to database dino (create new db is missing)       |
|db.dinos.find().pretty() |list all dinosaurs found the collection dinos (db dino)  |
|db.dropDatabase()        |                                                         |

