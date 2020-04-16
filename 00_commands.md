# Node
```sh
# Init
npm init

# Express
npm install express --save

# Express Graphsql
npm install graphql express-graphql

# Nodemon
npm install nodemon -g
## change batch
nano ~/.bash_profile
### Add the line:
export PATH=~/.npm-global/bin:$PATH
### run:
source ~/.bash_profile



```




# Load Dash

```sh
npm install lodash --save
```


# Mongo Lab
- [Mongo Lab: Database-as-a-Service for MongoDB](https://mlab.com/)

186.80.192.229
mongodb+srv://robin8a:<password>@cluster0-4frw6.mongodb.net/test?retryWrites=true&w=majority

# Mongoose
```sh
sudo npm install mongoose --save
```

# Cors
```sh
sudo npm install cors --save
```



# Heroku

```sh
heroku login

# ref: https://dashboard.heroku.com/apps/udemy-graphql-project/deploy/heroku-git
heroku git:remote -a udemy-graphql-project

git push heroku master


heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs -a udemy-graphql-project


```