const mongoose = require('mongoose');

require('dotenv').config();

mongoose
  .connect(process.env.MONGO_URL)
  // process.env.MONGO_URL
  // 'mongodb://localhost:27017/taskManagementDB'
  .then(() => {
    console.log('Connected to ToDoListApplication');
  })
  .catch(e => {
    console.log(e);
  });

module.exports = mongoose;
