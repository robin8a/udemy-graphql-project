const graphql = require('graphql');
var _ = require('lodash');
// Models
const User = require('../model/user');
const Post = require('../model/post');
const Hobby = require('../model/hobby');


// dummy data
// var usersData = [
//     {id: '1', name: 'Bod', age: 36, profession: 'Programmer'},
//     {id: '13', name: 'Anna', age: 26, profession: 'Baker'},
//     {id: '211', name: 'Bella', age: 16, profession: 'Mechanic'},
//     {id: '19', name: 'Gina', age: 26, profession: 'Painter'},
//     {id: '150', name: 'Georgina', age: 36, profession: 'Teacher'}
// ];

// var hobbiesData = [
//     {id: '1', title: 'Programming', description: 'Using computers...', userId: '150'},
//     {id: '2', title: 'Rowing', description: 'Sweart and fell...', userId: '211'},
//     {id: '3', title: 'Swimming', description: 'Get in water...', userId: '211'},
//     {id: '4', title: 'Fencing', description: 'Hobby for fency...', userId: '13'},
//     {id: '5', title: 'Hiking', description: 'Wear hiking boots...', userId: '150'}
// ];

// var postsData = [
//     {id: '1', comment: 'Comment 1...', userId: '1'},
//     {id: '2', comment: 'Comment 2...', userId: '1'},
//     {id: '3', comment: 'Comment 3...', userId: '19'},
//     {id: '4', comment: 'Comment 4...', userId: '211'},
//     {id: '5', comment: 'Comment 5...', userId: '1'}
// ];

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull

} = graphql

// Create types
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Documentation for user',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        profession: {type: GraphQLString},
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args){
                return Post.find({userId: parent.id});
            }
        },
        hobbies: {
            type: new GraphQLList(HobbyType),
            resolve(parent, args){
                return Hobby.find({userId: parent.id});
            }
        }
    })
})

const HobbyType = new GraphQLObjectType({
    name: 'Hobby',
    description: 'Documentation for hobby',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        user: {
            type: UserType,
            resolve(parent, args){
                return User.findById(parent.userId);
            }
        }
    })
})

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Documentation for Post',
    fields: () => ({
        id: {type: GraphQLID},
        comment: {type: GraphQLString},
        user: {
            type: UserType,
            resolve(parent, args){
                return User.findById(parent.userId);
            }
        }
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
                return User.findById(args.id);
            }
        },

        users: {
            type: GraphQLList(UserType),
            resolve(parent, args){
                return User.find({});
            }
        },

        hobby: {
            type: HobbyType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Hobby.findById(args.id);
            }
        },

        hobbies: {
            type: GraphQLList(HobbyType),
            resolve(parent, args){
                return Hobby.find({});
            }
        },
        
        post: {
            type: PostType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Post.findById(args.id);
            }
        },

        posts: {
            type: GraphQLList(PostType),
            resolve(parent, args){
                return Post.find({});
            }
        }

    })
});

// Mutations
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        CreateUser: {
            type: UserType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)},
                profession: {type: GraphQLString}
            },
            resolve(parent, args){
                let user = new User({
                    name: args.name,
                    age: args.age,
                    profession: args.profession
                });
                return user.save();
            }
        },
        UpdateUser:{
          type: UserType,
          args: {
                id: {type: new GraphQLNonNull(GraphQLString)},
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: GraphQLInt},
                profession: {type: GraphQLString}
            },
            resolve(parent, args){
                return User.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            name: args.name,
                            age: args.age,
                            profession: args.profession
                        }
                    },
                    {new: true} // send back updated object
                )
            }
        },
        CreatePost: {
            type: PostType,
            args: {
                comment: {type: new GraphQLNonNull(GraphQLString)},
                userId: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                let post = new Post({
                    comment: args.comment,
                    userId: args.userId
                });
                return post.save();
            }
        },
        CreateHobby: {
            type: HobbyType,
            args: {
                title: {type: new GraphQLNonNull(GraphQLString)},
                description: {type: new GraphQLNonNull(GraphQLString)},
                userId: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                let hobby = new Hobby({
                    title: args.title,
                    description: args.description,
                    userId: args.userId
                });
                return hobby.save();
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
