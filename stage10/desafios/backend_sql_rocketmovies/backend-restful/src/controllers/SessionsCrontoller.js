const { sqliteConnection } = require('../database/sqlite');
const { AppError } = require('../utils/AppError');
const { compare } = require('bcryptjs');
const { authConfig } = require('../configs/auth')
const { sign } = require('jsonwebtoken')

class SessionsController {
  async create(request, response) {
    const database = await sqliteConnection();
    const { email, password } = request.body;

    // console.log(request.body)

    let user = await database.get('SELECT * FROM users WHERE email = (?) LIMIT 1', [email])
    if (!user) throw new AppError('E-mail e/ou senha incorreta.', 401)

    const passwordMatched = await compare(password, user.password)
    if (!passwordMatched) throw new AppError('E-mail e/ou senha incorreta.', 401)

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    })

    await database.close();

    return response.status(201).json({ user, token, message: 'Usuário autenticado!' })
  }
}

module.exports = { SessionsController }