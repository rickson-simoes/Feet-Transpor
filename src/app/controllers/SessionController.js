import jwt from 'jsonwebtoken';

import User from '../models/User';
import auth from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const userExists = await User.findOne({ where: { email } });

    if (!userExists) {
      return res.status(401).json({ message: 'Error! User not found' });
    }

    if (!(await userExists.checkPassword(password))) {
      return res
        .status(401)
        .json({ message: 'Error! Password does not match' });
    }

    const { id, name } = userExists;

    return res.json({
      userExists: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, auth.secret, {
        expiresIn: auth.expiresIn,
      }),
    });
  }
}

export default new SessionController();
