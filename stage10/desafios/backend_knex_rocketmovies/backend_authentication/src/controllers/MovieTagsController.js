const knex = require('../database/knex');
const { AppError } = require('../utils/AppError');

class MovieTagsController {
  async index(request, response) {
    const user_id = request.user.id;

    const movieTags = await knex.connection('movie_tags').where({ user_id })

    return response.json(movieTags)
  }
}

module.exports = { MovieTagsController }