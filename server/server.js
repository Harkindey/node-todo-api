/*jshint esversion: 6 */
var mongoose  = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required:true,
    minlength: 1,
    trim: true
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt:{
      type: Number,
      default: null
  }
});

// var newTodo = new Todo({
//   text: 'Wash Plate',
//   completed: 'true',
//   completedAt: 1490659200
// });
//
// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//   console.log('unable to save todo');
// });

var otherTodo = new Todo({
  text:'   Edit my project proposal   '
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc,undefined,2));
}, (e) => {
  console.log('unable to save todo', e);
});
