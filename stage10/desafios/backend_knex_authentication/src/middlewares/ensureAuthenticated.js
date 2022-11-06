const { verify } = require('jsonwebtoken')
const { AppError } = require('../utils/AppError')
const { authConfig } = require('../configs/auth')

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError('Token not informed.')

  const [, token] = authHeader.split(' ')

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret)

    request.user = {
      id: Number(user_id)
    }

    return next();
  } catch {
    throw new AppError('Invalid token.', 401)
  }
}

module.exports = { ensureAuthenticated };