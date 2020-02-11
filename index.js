const express = require('express');

// const hubsRouter = require("./hubs/hubs-router");
// Now that we setup api-router, we requre it
const apiRouter = require("./api/api-router");

const server = express();

server.use(express.json());

server.use("/api", apiRouter)

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});


// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

server.listen(5000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
