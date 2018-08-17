const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: {
        type: String, 
        required: true
        },
    createdDate: { 
        type: Date,
        default: Date.now
        },
    status:{
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
            }],
        default: ['pending']
        }
      });
      
      const Task = mongoose.model('Task', TaskSchema);

      module.exports = Task;


