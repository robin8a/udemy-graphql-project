# Testing
```sh
source ~/.bash_profile
nodemon app

# Browser
http://localhost:4000/graphql

```

# Queries

```js
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


```