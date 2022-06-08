# Wise Words

### Project Introduction
I thought building a quotes app was a great way to practice my JavaScript fundamentals. Instead of relying on a pre-built public quotes API, I decided to build my own using Node.js, Express, and MongoDB. Since I have an interest in ancient history and dead languages, I chose to limit the quotes to ancient authors. They were were selected from my Ancient Greek and Latin coursework. The Old English quotes were selected from this [blog](https://aclerkofoxford.blogspot.com/p/old-english-wisdom.html).

This repo is concerned with the backend API. To see the frontend, click [here](https://github.com/markjager13/wise-words-frontend).

[Live Demo](https://wise-words-app.netlify.app/)

### How I worked on this project
* I first built a simple server and set up some basic routes using node.js and express.
* I then set up a MongoDB Atlas cluster and populated the DB with my quotes. 
* Lastly, I set up the DB connection and ensured that each route would gather the appropriate quote (based on language selection). 

### How to navigate this project
* Setting up the MongoDB database connection: [Example Code](https://github.com/markjager13/wise-words-api/blob/1a8ecb6185dce50469319e19f655df59b8ee9b94/server.js#L26)
* API route that matches user selected language category: [Example Code](https://github.com/markjager13/wise-words-api/blob/1a8ecb6185dce50469319e19f655df59b8ee9b94/routes/quotes.js#L26)

### Why I built the project his way
* I chose to use Express because it allowed me to quickly set up a server. 
* Likewise, setting up a MongoDB Atlas cluster gave me a chance to quickly set up a database while also giving me the chance to familiarize myself with MongoDB.

### If I had more time I would change the following
* It might be useful to allow the client to search for a particular author. For this, I would need to write another route that would match the user supplied author with quotes in the database. 
