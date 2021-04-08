// db to connect to
const url = 'mongodb://localhost:27017/learnyoumongo';

// user set arg to be checked as condition
const combien = process.argv[2];

// try to connect
var mongo = require('mongodb').MongoClient;
// const db = client.db('learnyoumongo'); 
mongo.connect(url, function(err, db) {    
    // connection KO
    if (err)  { console.error(err); return; }
    // connection OK
    const collection = db.collection( 'parrots' ) ;    
    // look in collection
    collection.find({ 
        age: { $gt: parseInt(combien) }
        }, {
            name: 1
            ,age: 1
            ,_id: 0        
        }).toArray(function(err, documents) {
      // KO
        if (err) { console.error(err); return; }
        // OK documents found
        console.log(documents);
    });
    db.close();
});

