const express = require("express");
const server = express();
const cors = require('cors')
const body_parser = require("body-parser");
const ObjectId = require('mongodb').ObjectID;
require('dotenv').config();
server.use(body_parser.json());

const port = 4000;
server.use(cors());

// db setup
const db = require('./db-connection');
const dbName = process.env.DB_NAME;
const collectionName = "todos";
// db setup

db.initialize(dbName, collectionName, function(dbCollection) {

    server.post("/todo", (request, response) => {
      const item = request.body;
      dbCollection.insertOne(item, (error, result) => {
          if (error) throw error;
          dbCollection.find().toArray((_error, _result) => {
              if (_error) throw _error;
              response.json(_result);
          });
      });
    });
  
    server.get("/todo/:id", (request, response) => {
      const id = request.params.id;
  
      dbCollection.findOne({ _id: ObjectId(id) }, (error, result) => {
          if (error) throw error;
          response.json(result);
      });
    });
  
    server.get("/todos", (request, response) => {
      dbCollection.find().toArray((error, result) => {
          if (error) throw error;
          response.json(result);
      });
    });
  
    server.put("/todo/:id", (request, response) => {
      const itemId = request.params.id;
    //   const item = request.body;
      dbCollection.updateOne(
          { _id: ObjectId(itemId) },
          { $set: {content: request.body.content, isCompleted: request.body.isCompleted} },
          (error, result) => {
          if (error) throw error;
          dbCollection.findOne({ _id: ObjectId(itemId) }, (error, result) => {
              if (error) throw error;
              response.json(result);
          })
      });
    });
  
    server.delete("/todo/:id", (request, response) => {
        const itemId = request.params.id;
    
        dbCollection.deleteOne({ _id: ObjectId(itemId) }, function(error, result) {
            if (error) throw error;
            dbCollection.find().toArray(function(_error, _result) {
                if (_error) throw _error;
                response.json(_result);
            });
        });
    });
  
  }, function(err) {
    throw (err);
  }
);

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});