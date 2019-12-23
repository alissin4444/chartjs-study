'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Serie extends Model {
	avaliacao () {
	    return this.hasOne('App/Models/SerieAvaliacao');
	}
}

module.exports = Serie
