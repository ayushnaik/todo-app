const MongoClient = require("mongodb").MongoClient;
require('dotenv').config();


const dbConnectionUrl = `mongodb://localhost:27017`;

function initialize(dbName, dbCollectionName, successCallback, failureCallback) {
    MongoClient.connect(dbConnectionUrl, {
        useUnifiedTopology: true
    }, function(err, dbInstance) {
        if (err) {
            console.log(`MongoDB connection ERROR: ${err}`);
            failureCallback(err);
        } else {
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(dbCollectionName);
            console.log("MongoDB connection SUCCESS");

            successCallback(dbCollection);
        }
    });
}

module.exports = {
    initialize
};