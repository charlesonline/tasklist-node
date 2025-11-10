import { Router } from 'express';
import User from './app/models/User.js';
import { password } from './config/database.js';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Welcome to the Task List API' });
});

routes.get('/test', async (req, res) => {
    const user = await User.create({ name: 'Charles', email: 'a@a.com', password_hash: '123456' });
    return res.json(user);
});

export default routes;