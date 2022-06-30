This is a simple Node Js Express Framework TODO RESTful API
It is created strictly following the MVC design pattern.

// Run npm install at the root folder to install all API dependencies
// Start API at the root folder using ==== npm start || npm run dev

=== npm run dev starts the server with nodemon.
The API runs on PORT 3000

The root page is served on http://localhost:3000

======= DATABASE ==========
Mongo Db community

======= BASIC ROUTES =========

// Get All Available Todos

http Verb = GET

http://localhost:3000/v1/todos

// For pagination, the server takes two query parameters
==== limit & page ===

// Example: http://localhost:3000/v1/todos?=limit=5&page=1

// Creat new Todo

http Verb = POST

http://localhost:3000/v1/todos

// Update Todo by Id

http Verb = UPDATE

http://localhost:3000/v1/todos/:id

//Delete Todo by Id

http Verb = DELETE

http://localhost:3000/v1/todos/:id

// Data for creating new todo are checked and validated using express-sanitizer
// And also to prevent malicious data from being sent to our server.
