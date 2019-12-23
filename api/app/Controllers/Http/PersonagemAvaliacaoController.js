'use strict'

const PersonagemAvaliacao = use("App/Models/PersonagemAvaliacao");

class PersonagemAvaliacaoController {
  async store ({ request, response, params }) {
    const { id } = params;
    const { valor } = request.only(['valor']);

    const avaliacao = await PersonagemAvaliacao.query().where('personagem_id', id).first();

    if(!avaliacao) {
    	const newAvaliacao = await PersonagemAvaliacao.create({ personagem_id: id, valor });
    	return newAvaliacao;
    }

    const newValorAvalicao = avaliacao.valor + valor;
    avaliacao.merge({ valor: newValorAvalicao });
    avaliacao.save();

    return avaliacao;
  }
}

module.exports = PersonagemAvaliacaoController
