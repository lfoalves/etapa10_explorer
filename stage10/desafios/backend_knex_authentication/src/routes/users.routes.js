const { Router } = require('express');
const { UserController } = require('../controllers/UserController');

const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated')

const usersRouter = Router()
const userController = new UserController();

usersRouter.post('/', userController.create);
usersRouter.get('/', ensureAuthenticated, userController.show);
usersRouter.put('/', ensureAuthenticated, userController.update);
usersRouter.delete('/', ensureAuthenticated, userController.delete);

module.exports = { usersRouter }