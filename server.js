const port = process.env.PORT || 5000;
const jsonServer = require('json-server')
const auth = require('json-server-auth')

const server = jsonServer.create();
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.db = router.db
server.use(auth)
server.use('/api', router)
server.listen(3000)
server.use(middlewares)


//binding app to db


// server.use(router);
// const app = jsonServer.create();
// const router = jsonServer.router('db.json')

// app.db = router.db
// app.use(auth)
// app.use(router)
// app.listen(3000)


//binding app to db






server.listen(port, () => console.log(`\n** Running on port ${port} **\t http://localhost:${port}/\n`));