'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Personagem extends Model {
	avaliacao () {
	    return this.hasOne('App/Models/PersonagemAvaliacao');
	}
}

module.exports = Personagem
