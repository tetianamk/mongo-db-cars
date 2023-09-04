const http = require('http');

const app = require('./app.js');
const { PORT } = require('./constants');

const server = http.createServer(app);

server.listen(PORT, ()=> {
  console.log(`Server started ${PORT}`);
});


