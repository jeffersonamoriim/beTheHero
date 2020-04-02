const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errors());

module.exports = app;

/*
    Params Types:
        - Query Params: base_url/users?name=jefferson -> parametros nomeados enviados na rota apos "?" -> acessed by const params = request.query;
        - Route Params: base_url/users/:id -> parametros utilizados para identificar recursos; - acessed by const params = request.params;
        - Request Body: Corpo da requisicao utilizado para criar ou alterar recursos;
*/

/*
    Database:
        - SQL: MySQL, SQLite, PostGreeSQL, Oracle, Microsoft SQL Server
        - noSQL: MongoDB, CouchDB, Firabase, etc.
*/

/*
    Driver:  SELECT * FROM users
    Query Buider: table('users').select('*').(''where)
    
*/