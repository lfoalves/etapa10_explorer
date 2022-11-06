const { Router } = require('express');

const { MoviesNotesController } = require('../controllers/MoviesNotesController');
const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated')

const moviesNotesRoutes = Router();
const moviesNotesController = new MoviesNotesController();

moviesNotesRoutes.use(ensureAuthenticated)

moviesNotesRoutes.get('/:movie_id', moviesNotesController.show);
moviesNotesRoutes.get('/', moviesNotesController.index);
moviesNotesRoutes.post('/', moviesNotesController.create);
moviesNotesRoutes.delete('/:movie_id', moviesNotesController.delete)
moviesNotesRoutes.put('/:movie_id', moviesNotesController.update)

module.exports = { moviesNotesRoutes }
