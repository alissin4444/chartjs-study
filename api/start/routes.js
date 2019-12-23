'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/personagens', 'PersonagemController.index');
Route.post('/personagens', 'PersonagemController.store');
Route.post('/avaliacoes/personagens/:id', 'PersonagemAvaliacaoController.store');

Route.get('/series', 'SerieController.index');
Route.post('/series', 'SerieController.store');
Route.post('/avaliacoes/series/:id', 'SerieAvaliacaoController.store');
