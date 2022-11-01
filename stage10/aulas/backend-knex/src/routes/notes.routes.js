const { Router } = require('express');
const NotesController = require('../controllers/NotesCrontoller');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const notesRouter = Router();
const notesController = new NotesController();

notesRouter.use(ensureAuthenticated)

notesRouter.get('/', notesController.index)
notesRouter.post('/', notesController.create);
notesRouter.get('/:note_id', notesController.show);
notesRouter.delete('/:note_id', notesController.delete);

module.exports = notesRouter;

