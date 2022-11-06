const express = require('express')
const uploadConfig = require('../configs/upload')

const filesRoutes = express.Router()

filesRoutes.use('/', express.static(uploadConfig.UPLOADS_FOLDER))

module.exports = { filesRoutes }