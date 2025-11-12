import Task from '../models/Task';
import * as Yup from 'yup';

class TaskController {

    async index(req, res) {
        const tasks = await Task.findAll({ where: { user_id: req.userId } });
        return res.json(tasks);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            task: Yup.string().required(),
            // check: Yup.boolean(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { task } = req.body;

        const tasks = await Task.create({ 
            user_id: req.userId,
            task
        });

        return res.json(tasks);
    }

    async update(req, res) {
        return res.json({ message: 'Task updated' });
    }

    async delete(req, res) {
        return res.json({ message: 'Task deleted' });
    }
}

export default new TaskController();