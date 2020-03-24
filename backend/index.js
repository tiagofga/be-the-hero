const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./app/routes/routes');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);
// /**
//  * Rota / Recurso
//  */

// /**
//  * Métodos HTTP:
//  *
//  * GET: Buscar/listar uma informação do back-end
//  * POST: Criar uma informação no back-end
//  * PUT: Alterar uma informação no back-end
//  * DELETE: Deletar uma informação no back-end
//  */

// /**
//  * Tipos de Parâmetros:
//  *
//  * Query: Parâmetros nomeados enviados na rota após o ? (filtros, paginação)
//  * Route: Parâmetros utilizados para identificar recursos
//  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
//  */



app.listen(3333);