const { DiskStorage } = require('../providers/DiskStorage');
const { AppError } = require('../utils/AppError');
const { sqliteConnection } = require('../database/sqlite')

class UsersAvatarController {
  async update(request, response) {
    const database = await sqliteConnection();

    const user_id = request.user.id;
    const avatarFilename = request.file.filename;

    const diskStorage = new DiskStorage();

    if (!user_id || !avatarFilename) throw new AppError('Informações são necessárias para a atualização do avatar.')

    const user = await database.get('SELECT * FROM users WHERE id = ?', [user_id])
    if (!user) throw new AppError('Usuário não identificado', 401)

    if (user.avatar) {
      await diskStorage.deleteFile(user.avatar)
    }

    const filename = await diskStorage.saveFile(avatarFilename)
    user.avatar = filename;

    await database.run('UPDATE users SET avatar = ? WHERE id = ?', [filename, user_id])

    return response.json(user);
  }
}

module.exports = { UsersAvatarController }