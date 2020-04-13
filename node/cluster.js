const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
    var data = {
        'code': 'ok',
        'error': false,
        'payload': 'Hello World'
      };
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(data));
  }).listen(1337);

  console.log(`Worker ${process.pid} started`);
}
