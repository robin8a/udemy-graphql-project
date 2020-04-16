# Testing
```sh
source ~/.bash_profile
nodemon app

# Browser
http://localhost:4000/graphql

```

# Queries

```js

// # Keyboard shortcuts:
// #
// #  Prettify Query:  Shift-Ctrl-P (or press the prettify button above)
// #
// #     Merge Query:  Shift-Ctrl-M (or press the merge button above)
// #
// #       Run Query:  Ctrl-Enter (or press the play button above)
// #
// #   Auto Complete:  Ctrl-Space (or just start typing)


{
  user (id: "1") {
    age
  }
}

// Relationships
{
 	post(id: "1"){
  	id
    comment
    user {
      name
      profession
    }
	}
}

{
 	hobby(id: "1"){
  	id
    title
    description
    user {
      name
      profession
    }
	}
}


{
  user(id: "211"){
    name
    profession
		posts {
      comment
    }
    hobbies {
      title
      description
    }
  }
}

```

# Mutations
```js


mutation{
  createUser(name: "Apollo", age: 23, profession: "Graphyer"){
    name
    age
    profession
    id
  }
}


mutation{
	createPost(comment: "First post", userId: "13"){
		comment
    id
    user {
      id
      name
    }
	}
}



mutation{
	createHobby(title: "Title", description: "Desc", userId: "150"){
    id
    title
    description
    user {
      name
    }
  }
}

```

# List

```js
{
  users {
    id,
    name,
    hobbies{
      title
    }
  }
}

{
  hobbies {
    id
  }
}

{
  posts {
    id
  }
}
```

# Mongoose 

```sh
mutation{
  createUser(name: "Lucas", age: 15, profession: "Actor"){
    id
    name
  } 
}

mutation{
  createPost(comment: "New comment", userId: "5e9767247c625e6786fcc22d"){
    id
    comment
  }
}


mutation{
  createHobby(title: "Hobby title", description: "Hobby desc "){
		id
    title    
    description
  }
}

mutation {
  createHobby(title: "new hobby", description: "new hobby desc", userId: "5e9767247c625e6786fcc22d"){
    title
  }
}

```


# Queries with Mongo

```js

{
  user(id: "5e9767247c625e6786fcc22d"){
    id
    name
    profession
  }
}

{
  users{
    name
  }
}

{
  users{
    name
    hobbies{
      description
    }
  }
}

{
  hobbies{
    description
  }
}

{
  hobby(id: "5e9788403140bf6d46879304"){
    title
    description
    user {
      name
      age
    }
  }
}

{
  post(id: "5e976b34e5d98b68cc10ef7d"){
    comment
    id
    user {
      name
    }
  }
}

```

# Update mutation

```js
mutation{
  UpdateUser(id: "5e9767808c838267d141a470", name: "Carlota", profession: "Engineer"){
    name
    profession
  }
}

mutation{
  UpdatePost(id: "5e976b34e5d98b68cc10ef7d", comment: "15:15 comment"){
    comment
    user{
      id
      name
    }
  }
}

mutation{
  UpdateHobby(id: "5e976bd3e5d98b68cc10ef7e", title: "Dance", description: "Move your body every day"){
    title
    description
  }
}

mutation{
  UpdateHobby(id: "5e9788403140bf6d46879304", title: "Golf", description: "A mind game for every hole"){
    title
    description
  }
}

```

# Mutation Remove

```js
mutation{
  CreateUser(name: "Borrame", age: 40, profession: "Borrar"){
    name
  }
}

mutation{
  RemoveUser(id: "5e98c44d7612a21ac7e447cd"){
    name
  }
}


mutation{
  CreatePost(userId: "5e9767808c838267d141a470", comment: "Borrame plz") {
    comment
  }
}

mutation{
  RemovePost(id: "5e98c5b845270a1b40b1d91c"){
    comment
  }
}

mutation{
  CreateHobby(userId: "5e9767808c838267d141a470", title: "Hobby borrame", description: "desc"){
    description
  }
}

mutation{
  RemoveHobby(id: "5e98c71f2d5abe1b9d611fdf"){
    title
  }
}

```