const knex = require('../database/knex');

class TagsController {
  async index(request, reponse) {
    const user_id = request.user.id;

    const tags = await knex('tags').where({ user_id }).groupBy('name');

    return reponse.json(tags)
  }
}

module.exports = TagsController;