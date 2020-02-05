const { createServer } = require('http');
const router = require('./router.js');
require("dotenv").config();
const server = createServer(router);
const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Server started on localhost, BRUUUUUUUUH ${port}`);
});