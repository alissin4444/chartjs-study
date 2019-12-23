'use strict'


const Personagem = use("App/Models/Personagem");

class PersonagemController {

  async index ({ request, response, view }) {
  	const personagens = await Personagem.query()
  	.select()
  	.whereHas('avaliacao')
  	.setHidden(['id', 'created_at', 'updated_at'])
  	.with('avaliacao', query => {
  		query.setHidden(['created_at', 'id', 'personagem_id', 'updated_at'])
  	}).fetch();
  	return personagens;
  }

 
  async store ({ request, response }) {
    const nome = request.only(['nome']);
    const personagem = await Personagem.findOrCreate(nome);
    return personagem;
  }

}

module.exports = PersonagemController
