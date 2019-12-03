const server = require('./server');

let port = 9001;
server.listen(port, () => console.log('server is now listening on port ' + port));