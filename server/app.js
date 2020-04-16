const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const port = process.env.PORT || 8400;
const app = express();

mongoose.connect('mongodb+srv://robin8a:FLHtfaUTIIYiqCnJ@cluster0-4frw6.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to Mongo Lab via mongoose');
});

const schema = require('./schema/schema');
const testSchema = require('./schema/types_schema');
const cors = require('cors');

app.use(cors());
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(port, () => {
    console.log('Listening for requests on port: ' + port);
})