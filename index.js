const server = require('./server');
const PORT = 6933;

server.listen(PORT, ()=> console.log(`Server listening at ${PORT}`))