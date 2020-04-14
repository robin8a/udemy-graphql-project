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