# PEOPLE, a CRUD REST-API

## API

|Service                                           |Type  |Description                                               |
|--------------------------------------------------|------|-----------------------------------------------------------
|api/v1/people                                     |GET   |Retrive all people                                        |
|api/v1/people?occupation=**occupation**           |GET   |Retrive all people filtered on occupation                 |
|api/v1/people/**id**                              |GET   |Retrive person by id                                      |
|api/v1/people?nationality=**x**                   |GET   |Retrive all people filtered on nationality                |
|api/v1/people?nationality=**x**&occupation=**y**  |GET   |Retrive all people filtered on nationality & occupation   |
|api/v1/people                                     |POST  |Creates new person                                        |
|api/v1/people/**id**                              |PUT   |Replace existing person by id                             |
|api/v1/people/**id**                              |PATCH |Update existing person by id                              |
|api/v1/people/**id**                              |DELETE|Delete person by id                                       |

### Example data:

```json
{
    "_id": "5c542dc088805dfb4eaf8e98",
    "name": "Jacob Berzelius",
    "born": 1779,
    "died": 1848,
    "occupation": "chemist",
    "nationality": "Swedish",
    "description": "Measured accurate atomic weights ...",
    "qoute": "..."
}
```

## Uses
- **[Express](https://expressjs.com/)**, a minimal Node.js web application framework
- **[MongoDB](https://www.mongodb.com/)**, a NoSQL database that stores JSON documents
- **[mongoose](https://mongoosejs.com/)**, an Object Data Modeling (ODM) library for MongoDB and Node.js.

## Install

### Prerequisite
- mongoDB installed (and running locally)

### Import data from json-file to mongoDB

`> create_people_db.bat`

### Useful mongoDB commands

|command   |description   |
|-------------------------|---------------------------------------------------------|
|show dbs                 |list databases                                           |
|use ppl                  |switch to database ppl (create new db is missing)       |
|show collections         |list all collections under current db                    |
|db.dinos.find().pretty() |list all dinosaurs found the collection dinos (db dino)  |
|db.dropDatabase()        |drop current db                                          |

