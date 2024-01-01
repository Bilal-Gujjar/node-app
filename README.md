
# NOTE: READ CAREFULLY BEFORE STARTING THE PROJECT
## Description

This is a backend exercise that uses Node.js and Express.js to create a server that serves JSON as a response to a REST API calls. These problems cover various aspects of Node.js development, including asynchronous programming, error handling, file system operations, database interactions, and authentication.


## Instructions

**Step-1:** Fork and clone the repository.
```bash
git clone git@github.com:Bilal-Gujjar/node-app.git
```

**Step-2:** After clone, open the terminal and go to the project directory.
```bash
cd node-app

```

**Step-3:** Run the following command to install the dependencies.
```bash
npm install
```

**Step-4:** Create the .env file(MongoDB Must in install and run on your local mechine).
example:
```bash
PORT=8000
MONGO_URL=mongodb://localhost:27017/IKdb
JWT_SECRET=NewYear
```


**Step-4:** Run the following command to run the server.
For Development
```bash
npm run start:dev
```
For Production
```bash
npm run start
```


## Finally

* The server runs on http://localhost:8000.






## Endpoints 


### Authentication

#### POST: /api/signup

In Postman body raw json
```bash
{
  "name": "User",
  "email": "user@example.com",
  "password": "123456"
}

```

### POST: api/login

In Postman body raw json
```bash
{
  "email": "user@example.com",
  "password": "123456"
}
    
```

# Notes CRUD

## NOTE: All the NOTES following endpoints are protected and require a valid JWT token in the Authorization header.

## POST: /api/notes

In Postman body raw json
```bash
{
    "title" : "abc",
    "content" : "cdf",
    "author" : "ghf"
}
    
```

### GET: /api/notes

### GET: /api/notes/:id

### PUT: /api/notes/:id

In Postman body raw json
```bash
{
    "title" : "Now Title",
}

```

### DELETE: /api/notes/:id


### File System Operations

## GET: /api/listFiles

## Params it dirPath where the files are located and extension of the files

## Params: 
```bash
http://localhost:8000/api/listFiles?dirPath=./fileTest&extension=pdf
```

### Error Handling

### Error Handling is done in all the endpoints and middlewares.

The Specific End point accoriding for requirments are: 

## GET: 
```bash
/api/errorHandling?url=https://jsonplaceholder.typicode.com/user
```


### Asynchronous Operations


### POST: /api/asynchronousOperations
In Postman body raw json
```bash
{
    "urls": [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/2",
        "https://jsonplaceholder.typicode.com/posts/3",
        "https://jsonplaceholder.typicode.com/users"
    ]
}

```


Hope you enjoy the Solution!
