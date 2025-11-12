import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth.js';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Welcome to the Task List API' });
});

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

export default routes;