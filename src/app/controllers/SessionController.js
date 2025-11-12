import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import authConfig from '../../config/auth.js';

class SessionController {

  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Invalid password.' });
    }

    const { id, name } = user;

    return res.json({
        user: {
            id,
            name
        },
        token: jwt.sign({ id }, authConfig.secret, { expiresIn: authConfig.expiresIn }),
    });
    // const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' });

  }

  async update(req, res) {
    return res.json({ ok: true });
  }
}

export default new SessionController();