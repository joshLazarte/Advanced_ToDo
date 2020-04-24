const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
   },
   parent: {
        type: Schema.Types.ObjectId,
        ref: "todos",
        required: false
   },
   material: [
       {
            name: {
                type: String,
                required: true
            },
            isPurchased: {
                type: Boolean,
                default: false
            },
            price: {
                type: String,
                required: false
            },
            
       }
      ],
    description: {
        type: String,
        required: false
    },
    progress: {
        type: Number,
        default: 0
    },
    isComplete: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;