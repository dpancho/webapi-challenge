const server = require('./server');
const port = process.env.PORT;

server.listen(port, () => console.log(`----SERVER LISTENING ON PORT ${port}`));
