/*jshint esversion: 6 */

//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('Mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID("58d932c8a52df4fc8a3d944b")
    // },{
    //   $set: {
    //     completed: true
    //   }
    // },{
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("58d8f4208ff1d87f1e477800")
    }, {
        $set: {
            name: 'Emmanuel Oluwabeanne Akinde'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    //db.close();
}); // take URL of db(Amazon URl,Heroku URl or local URL) and a callback
