/*jshint esversion: 6 */

const {
    ObjectID
} = require("mongodb");
const {
    mongoose
} = require("./../server/db/mongoose");
const {
    Todo
} = require("./../server/models/todo");
const {
    User
} = require("./../server/models/user");

var id = "58d9aadec5c3cf1953c46ade";
// var id ="58decdbad0ab78223e21020011";
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));

}).catch((e) => console.log(e));
