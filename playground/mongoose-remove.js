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

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove().then(()=>{});
Todo.findOneAndRemove({
    _id: '58dfae82cb9508b72a13f5b3'
}).then((todo) => {

});
Todo.findByIdAndRemove('58dfae82cb9508b72a13f5b3').then((todo) => {
    console.log(todo);
});
