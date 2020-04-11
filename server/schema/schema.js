const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema

} = graphql

// Create types
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Documentation for user',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
    })
})


// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Documentation for Root Query',
    fields: () => ({
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                // we resolve with data
                // get and return data from a datasource
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
})