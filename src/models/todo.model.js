const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Todo', todoSchema);