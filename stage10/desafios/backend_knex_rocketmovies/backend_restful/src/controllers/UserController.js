const { AppError } = require('../utils/AppError');
const { hash, compare } = require('bcryptjs');
const knex = require('../database/knex')

class UserController {
  async create(request, response) {

    const { name, email, password } = request.body;

    if (!name || !email || !password) throw new AppError('Informações do usuário são necessárias para a criação do cadastro.')

    const hashedPassword = await hash(password, 8)

    const userEmailExists = await knex.connection('users').where({email})
    if (userEmailExists.length > 0 && userEmailExists[0].email === email) throw new AppError('E-mail já em uso.')

    await knex.connection('users').insert({
      name,
      email,
      password: hashedPassword
    })
    
    return response.status(201).json('user created')
  }

  async update(request, response) {
    const { name, email, oldPassword, newPassword } = request.body;
    const user_id = request.user.id;

    if (!user_id) throw new AppError('Identificação do usuário é necessária')

    const user = await knex.connection('users').where({id: user_id}).first();
    if (!user) throw new AppError('Usuário não identificado')

    const checkEmailExists = await knex.connection('users').where({email: email}).first();
    if (checkEmailExists && checkEmailExists.id !== user.id) {
      throw new AppError('E-mail já em uso.')
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (newPassword && !oldPassword) throw new AppError('Informe a senha antiga para definir a nova senha.')

    if (newPassword && oldPassword) {
      const checkOldPassword = await compare(oldPassword, user.password)
      if (!checkOldPassword) throw new AppError('Senhas não conferem')
      user.password = await hash(newPassword, 8)
    }


    await knex.connection('users').where({id: user_id}).update({
      name: user.name,
      email: user.email,
      password: user.password,
      updated_at: knex.connection.fn.now()
    });

    return response.json({
      message: 'user updated',
    })
  }

  async delete(request, response) {
    const user_id = request.user.id;

    if (!user_id) throw new AppError('Identificação do usuário é requerida')

    const userDeleted = await knex.connection('users').where({id: user_id}).delete();

    return response.json({
      message: 'user deleted',
      info: userDeleted
    })
  }
}

module.exports = { UserController }