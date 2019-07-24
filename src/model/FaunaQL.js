var faunadb = require('faunadb'),
q = faunadb.query

var client = new faunadb.Client({ secret: 'Client Secret here' })

module.exports = client;
