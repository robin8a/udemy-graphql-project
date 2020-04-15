const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://robin8a:FLHtfaUTIIYiqCnJ@cluster0-4frw6.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('Connected to Mongo Lab via mongoose');
});

const schema = require('./schema/schema');
const testSchema = require('./schema/types_schema');

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: testSchema
}));

app.listen(4000, () => {
    console.log('Listening for requests on port 4000');
})