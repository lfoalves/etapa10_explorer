const knex = require("../database/knex");
const AppError = require("../utils/AppError");

let count = 0;
class NotesController {
  async create(request, reponse) {
    const {title, description, tags, links} = request.body;
    const { user_id } = request.params;

    if (!title || !description || !tags || !links || !user_id) {
      throw new AppError('Informações são necessárias')
    }
    
    const note_id = await knex('notes').insert({
      title,
      description,
      user_id
    });

    const linksInsert = links.map(link => {
      return {
        note_id,
        url: link 
      }
    });

    await knex('links').insert(linksInsert);

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    });

    await knex('tags').insert(tagsInsert);

    return reponse.status(201).json({
      linksInsert, tagsInsert, title, description
    })
  }

  async show(request, reponse) {
    const id = request.params.note_id;

    const note = await knex('notes').where({ id: id }).first();
    const tags = await knex('tags').where({ note_id: id }).orderBy('name');
    const links = await knex('links').where({ note_id: id }).orderBy('created_at');

    return reponse.json({...note, tags, links})
  }

  async delete(request, reponse) {
    const id = request.params.note_id;

    const resultDelete = await knex('notes').where({ id: id }).delete();

    return reponse.json({
      message: `Note Deleted ${resultDelete}` 
    });
  }

  async index(request, reponse) {
    const { user_id, title, tags } = request.query;

    if (!user_id) {
      throw new AppError('Id do usuário é necessário')
    }

    let notes;

    if (tags) {
      const filterTags = tags.split(',').map(tag => tag.trim());

      notes = await knex('tags')
      .select([
        'notes.id',
        'notes.title',
        'notes.user_id'
      ])
        .where('notes.user_id', '=', user_id)
        .whereLike('notes.title', `%${title}%`)
        .whereIn('name', filterTags)
        .innerJoin('notes', 'notes.id', 'tags.note_id')
        .orderBy('notes.title')
    } else {
      notes = await knex('notes')
        .where({ user_id })
        .whereLike('title', `%${title}%`)
        .orderBy('title');
    }

    const userTags = await knex('tags').where({user_id});
    const notesWithTags = notes.map(note => {
      const noteTags = userTags.filter(tag => tag.note_id === note.id)

      return {
        ...notes,
        tags: noteTags,
      }
    });

    return reponse.json(notesWithTags);
  }
}

module.exports = NotesController;