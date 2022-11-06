const { Router } = require('express');

const { UsersController } = require('../controllers/UsersController');
const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated')

const usersRoutes = Router();
const usersController = new UsersController();

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthenticated, usersController.update)
usersRoutes.delete('/:user_id', ensureAuthenticated, usersController.delete)
usersRoutes.patch('/:user_id', ensureAuthenticated, usersController.updatePassword)

module.exports = { usersRoutes }