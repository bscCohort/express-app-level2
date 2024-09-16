## Technologies Used In This Project

- Ubuntu 
- VS Code
- Docker
- GNU Make
- NodeJS
- ExpressJS
- MongoDB

## SETUP DATABASE

```bash
docker run -d -p 27017:27017 --name test-mongo mongo:latest

docker exec -it test-mongo bash

apt-get update

apt-get install curl
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/debian buster/mongodb-org/6.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list
apt-get update
apt-get install -y mongodb-mongosh

mongosh

# use this in Express code to connect to DB

mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});
```

## Sample JSON For Tesing

```json
[
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee"
  },
  {
    "title": "1984",
    "author": "George Orwell"
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen"
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald"
  },
  {
    "title": "Moby Dick",
    "author": "Herman Melville"
  },
  {
    "title": "War and Peace",
    "author": "Leo Tolstoy"
  },
  {
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger"
  },
  {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien"
  },
  {
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien"
  },
  {
    "title": "The Odyssey",
    "author": "Homer"
  }
]
```