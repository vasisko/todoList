
module.exports = function(app) {


const taskController =('../controllers/todolistController.js')

app.route('/tasks')
   .get(todoList.findAll)
   .post(todoList.create);

app.route('/tasks/taskid')
    .get(todoList.findById)
   .put(todoList.update)
   .delete(todoList.delete);

}