const { Router } = require('express')
const { MovieNotesController } = require('../controllers/MovieNotesController')

const movieNotesRouter = Router();
const movieNotesController = new MovieNotesController();

const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated')

movieNotesRouter.use(ensureAuthenticated)

movieNotesRouter.post('/', movieNotesController.create)
movieNotesRouter.get('/', movieNotesController.index)
movieNotesRouter.get('/:note_id', movieNotesController.show)
movieNotesRouter.delete('/:note_id', movieNotesController.delete)

module.exports = { movieNotesRouter }