'use strict'

const Serie = use("App/Models/Serie");

class SerieController {
  async index ({ request, response }) {
  	const series = await Serie.query()
  	.select()
  	.whereHas('avaliacao')
  	.setHidden(['id', 'created_at', 'updated_at'])
  	.with('avaliacao', query => {
  		query.setHidden(['created_at', 'id', 'serie_id', 'updated_at'])
  	}).fetch();
  	return series;
  }

  async store ({ request, response }) {
    const nome = request.only(['nome']);
    const serie = await Serie.findOrCreate(nome);
    return serie;
  }

}

module.exports = SerieController
