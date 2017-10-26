const http = require('http');
const debug = require('debug')('server:server');
const config = require('./config');
const app = require('./app');
const mongoose = require('mongoose');

const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */

const onError = (error) => {
  console.log('onError');
  if (error.syscall !== 'listen') {
    throw error;
  }
  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

mongoose.connect(`mongodb://localhost:${config.MONGO_PORT}/${config.APP_NAME}`, function(err) {
    if(err) {
      console.log('connection error', err);
    } else {
      console.log('connection successful');
    }
});


server.listen(config.PORT);
server.on('error', onError);
server.on('listening', onListening);
