/*Here we will learn how to search for documents.

In this exercise the database name is learnyoumongo.
So, the url would be something like: mongodb://localhost:27017/learnyoumongo

Use the parrots collection to find all documents where age
is greater than the first argument passed to your script.

Using console.log, print the documents to stdout.

-------------------------------------------------------------------------------

## HINTS

To connect to the database, one can use something like this:

    var mongo = require('mongodb').MongoClient
    mongo.connect(url, function(err, db) {
      // db gives access to the database
    })

To get a collection, one can use db.collection('<collection name>').

To find a document or documents, one needs to call find() on the collection.

Find is a little bit different than what we are used to seeing.

To access the arguments you can use the process.argv array of strings (the first argument is stored at the third position process.argv[2]). To convert to an integer, you could use parseInt()

Here is an example:

    collection.find({
      name: 'foo'
    }).toArray(function(err, documents) {
    
    })
***
*If your program does not finish executing, you may have forgotten to
*close the db. That can be done by calling db.close() after you
*have finished.

## Resources:

  * http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#find
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt


» To print these instructions again, run: learnyoumongo print
» To run your program, run: learnyoumongo run [solution.js]
» To verify your program, run: learnyoumongo verify [solution.js]
*/
const url = 'mongodb://localhost:27017/learnyoumongo';
var combien = process.argv[2];
// // connect
// var mongo = require('mongodb').MongoClient
// mongo.connect(url, function(err, db) {
//   // db gives access to the database
// })

var mongo = require('mongodb').MongoClient;
// const db = client.db('learnyoumongo'); 
  mongo.connect(url, function(err, db) {    
    // connection KO
    if (err)  { console.error(err); return; }
    // connection OK
    const collection = db.collection( 'parrots' ) ;    
    // look in collection
    collection.find(
      { age: { $gt: parseInt(combien) } }
    ).toArray(function(err, documents) {
      // KO
      if (err) { console.error(err); return; }
      // OK documents found
      console.log(documents);
    });    
    // close connection 2 db
    db.close();
  });
