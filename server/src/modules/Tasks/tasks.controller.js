const pool = require('../../database');

const getAllTasks = async (req, res) => {
    const { id } = req.params;
    const data = await pool.query('SELECT * FROM Task WHERE user_id = ?', [id]);
    res.json(data);
}

const createTask = async (req, res) => {
    const { title, description, user_id } = req.body;
    const newTask = {
        title,
        description,
        user_id
    };
    await pool.query('INSERT INTO Task set ?', [newTask]);
    res.json({
        message: 'Task created'
    });
}

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const newTask = {
        title,
        description
    };
    await pool.query('UPDATE Task set ? WHERE id = ?', [newTask, id]);
    res.json({
        message: 'Task updated'
    });
}

const deleteTask = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM Task WHERE task_id = ?', [id]);
    res.json({
        task_id: id,
        message: 'Task deleted'
    });
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
}