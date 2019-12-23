'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonagemAvaliacaoSchema extends Schema {
  up () {
    this.create('personagem_avaliacaos', (table) => {
      table.increments()
     	table.integer('personagem_id')
        .unsigned()
        .references('id')
        .inTable('personagems')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    	table.integer('valor')
      table.timestamps()
    })
  }

  down () {
    this.drop('personagem_avaliacaos')
  }
}

module.exports = PersonagemAvaliacaoSchema
