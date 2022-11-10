const { Router } = require('express');

const { usersRoutes } = require('./users.routes');
const { moviesNotesRoutes } = require('./movies-notes.routes');
const { moviesTagsRoutes } = require('./movies-tags.routes');
const { sessionsRoutes } = require('./sessions.routes')
const { filesRoutes } = require('./files.routes')

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/movies', moviesNotesRoutes);
routes.use('/tags', moviesTagsRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/files', filesRoutes)

module.exports = { routes }