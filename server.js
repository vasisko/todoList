const 
  express = require('express'),
  app = express(),
  Task = require('./api/models/todoListModel'),
  routes = require('./api/routes/todoListRoutes'),
  mongoose = require('mongoose'),
  PORT = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 
 
app.use(routes);

app.listen(PORT, () => {
  console.log('Server Running on port ' + PORT + ' ...  todolist Restful API app');
});