const router = require('express').Router();
const tasksController = require('./tasks.controller');

router.get('/tasks/user/:id', tasksController.getAllTasks);
router.post('/tasks', tasksController.createTask);
router.put('/tasks/:id', tasksController.updateTask);
router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;