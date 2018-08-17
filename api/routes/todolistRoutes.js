

module.exports = function(app) {


const taskController =('../controllers/todoListController.js')

app.route('/tasks')
   .get(taskController.findAll)
   .post(taskController.create);

app.route('/tasks/:taskId')
    .get(taskController.findById)
   .put(taskController.update)
   .delete(taskController.remove);

}