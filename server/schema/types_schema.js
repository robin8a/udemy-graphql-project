const graphql = require('graphql');


const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLNonNull
} = graphql

// Scalar Types
/*
    String = GraphQLString
    int = 
    Float
    Boolean
    ID
*/

const Person = new GraphQLObjectType({
    name: 'Person',
    description: 'Represents person type',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        age: {type: new GraphQLNonNull(GraphQLInt)},
        isMarried: {type: GraphQLBoolean},
        gpa: {type: GraphQLFloat},
        justAType: {
            type: Person,
            resolve(parent, args){
                return parent;
            }
        }
    }) 
})

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Documentation for Root Query',
    fields: {
        person: {
            type: Person,
            resolve(parent, args){
                let personObj = {
                    id: 1,
                    name: 'Antonio',
                    age: 40,
                    isMarried: true,
                    gpa: 4.3
                }
                return personObj;
            }
        } 
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
})
