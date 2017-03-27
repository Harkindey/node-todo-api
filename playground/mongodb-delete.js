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

    //deleteMany
      // db.collection('Todos').deleteMany({text: 'Each Lunch'}).then((result) => {
      //   console.log(result);
      // });
    //deleteOne

      // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
      //   console.log(result);
      // });
    //findOneAndDelete
      // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
      //     console.log(result);
      // });

      db.collection('Users').deleteMany({name: 'Anjorin Opeyemi'});

      db.collection('Users').findOneAndDelete({
        _id: new ObjectID("58d90430881dee81e9b7fa1f")
      }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
      });


  //db.close();
});  // take URL of db(Amazon URl,Heroku URl or local URL) and a callback
