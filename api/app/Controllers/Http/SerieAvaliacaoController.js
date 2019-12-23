'use strict'

const SerieAvaliacao = use("App/Models/SerieAvaliacao");

class SerieAvaliacaoController {
  async store ({ request, response, params }) {
    const { id } = params;
    const { valor } = request.only(['valor']);

    const avaliacao = await SerieAvaliacao.query().where('serie_id', id).first();

    if(!avaliacao) {
      const newAvaliacao = await SerieAvaliacao.create({ serie_id: id, valor });
      return newAvaliacao;
    }

    avaliacao.merge({ valor: avaliacao.valor + valor });
    avaliacao.save();

    return avaliacao;
  }
}

module.exports = SerieAvaliacaoController
