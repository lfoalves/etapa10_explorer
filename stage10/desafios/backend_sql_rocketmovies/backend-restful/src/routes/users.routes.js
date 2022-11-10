const { Router } = require('express');

const { UsersController } = require('../controllers/UsersController');
const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated')

const usersRoutes = Router();
const usersController = new UsersController();

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthenticated, usersController.update)
usersRoutes.delete('/:user_id', ensureAuthenticated, usersController.delete)


const multer = require('multer')
const uploadConfig = require('../configs/upload')
const { UsersAvatarController } = require('../controllers/UsersAvatarController')
const usersAvatarController = new UsersAvatarController();
const upload = multer(uploadConfig.MULTER)
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), usersAvatarController.update)

module.exports = { usersRoutes }