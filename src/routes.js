import { Router } from 'express';
import authMiddleware from './app/middlewares/auth.js';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TaskController from './app/controllers/TaskController.js';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Welcome to the Task List API' });
});

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);
routes.put('/tasks/:task_id', TaskController.update);
routes.delete('/tasks/:task_id', TaskController.delete);

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

export default routes;