/*jshint esversion: 6 */

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('Mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //     text: 'Something to do',
  //     completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // Insert new doc into Users (name, age,location)

  // db.collection('Users').insertOne({
  //   name : "Anjorin Opeyemi",
  //   age : "20 Years Old",
  //   location: "Abeokuta, Ogun"
  // },(err, result) => {
  //   if(err){
  //     return console.log('Unable to insert New user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });



  db.close();
});  // take URL of db(Amazon URl,Heroku URl or local URL) and a callback
