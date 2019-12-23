'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SerieAvaliacaoSchema extends Schema {
  up () {
    this.create('serie_avaliacaos', (table) => {
      table.increments()
     	table.integer('serie_id')
        .unsigned()
        .references('id')
        .inTable('series')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    	table.integer('valor')
      table.timestamps()
    })
  }

  down () {
    this.drop('serie_avaliacaos')
  }
}

module.exports = SerieAvaliacaoSchema
