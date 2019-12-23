'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MortePatologicaSchema extends Schema {
  up () {
    this.create('morte_patologicas', (table) => {
      table.increments()
     	table.integer('cidade_id')
        .unsigned()
        .references('id')
        .inTable('cidades')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    	table.integer('mortes')
      table.timestamps()
    })
  }

  down () {
    this.drop('morte_patologicas')
  }
}

module.exports = MortePatologicaSchema
