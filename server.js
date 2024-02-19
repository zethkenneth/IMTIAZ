const app = require('./app.js')
const http = require('http')
const logger = require('./src/core/logger')

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "PORT " + addr.port;
     logger.log({
       timestamp: new Date().toDateString(),
       label: "server",
       level: "info",
       message: `this is running on ${bind}`,
     });
}

const normalizePort = (val) => {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }
  return false;
};


let port = normalizePort(process.env.PORT || 3000);
app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("listening", onListening);