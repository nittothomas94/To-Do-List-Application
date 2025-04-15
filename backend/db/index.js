const mongoose = require('mongoose');

require('dotenv').config();

mongoose
  .connect('mongodb://localhost:27017/ToDoListApplicationDB')
  // process.env.MONGO_URL
  // 'mongodb://localhost:27017/taskManagementDB'
  .then(() => {
    console.log('Connected to ToDoListApplication');
  })
  .catch(e => {
    console.log(e);
  });

module.exports = mongoose;
