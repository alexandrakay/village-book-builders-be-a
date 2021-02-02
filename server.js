const port = process.env.PORT || 5000;
const jsonServer = require('json-server')
const auth = require('json-server-auth')

const server = jsonServer.create();
const router = jsonServer.router('db.json')


server.use(auth)
server.use(router)
server.listen(3000)



server.use(router);



server.listen(port, () => console.log(`\n** Running on port ${port} **\t http://localhost:${port}/\n`));