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

  // db.collection('Todos').find({
  //   _id: new ObjectID('58d908b57c930374209cc362')
  // }).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) =>{
  //   console.log(`Todos --> ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name:'Ogunjimi kabirat'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2));
  });

  //db.close();
});  // take URL of db(Amazon URl,Heroku URl or local URL) and a callback
