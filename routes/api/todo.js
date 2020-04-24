const express = require('express'),
  router = express.Router(),
  Todo = require('../../models/Todo');
  
  
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find({});
        
        res.status(200).json(todos, null, 2);
    } catch(err) {
        console.log(err);
        res.status(400).send('You fucked up bro');
    }
});

router.post('/', async (req, res) => {
    try {
        const {name} = req.body;
        const newTodo = new Todo({name});
        await newTodo.save();
        res.status(200).json(newTodo, null, 2);
    } catch(err){
        console.log(err);
        res.status(400).send('You fucked up bro');
    }
    
});

module.exports = router;