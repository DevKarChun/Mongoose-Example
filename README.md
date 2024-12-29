# Mongoose MongoDB CRUD Operations
#### This repository contains Node.js scripts using Mongoose to interact with a MongoDB database for basic CRUD operations related to people's data.

### Steps to Run the Code:
1. Ensure you have Node.js installed on your system.
2. Install the necessary dependencies by running npm install.
3. Make sure MongoDB is running locally on mongodb://127.0.0.1:27017.
4. Run the scripts using node filename.js.

### index.js
1. Connects to a local MongoDB database named "person".
2. Defines a Person schema with name and age fields.
3. Creates a new Person object with name "John" and age 45.
4. Saves the new person object to the database.
5. Retrieves all people from the database and logs their names.
6. Finds a person with the name "John" and logs the result.

### app.js
1. Similar to index.js but provides additional connection options to MongoDB.
2. Performs the same CRUD operations as in index.js.

### Note:
- Ensure you have a running MongoDB instance.
- Adjust the MongoDB connection URL as needed.
- Uncomment person.save(); if you want to save the person object to the database.

#### Feel free to explore the code and adapt it to your requirements!
