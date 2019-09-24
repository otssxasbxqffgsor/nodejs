#### PG
PG is known as driver for postgres admin. 

#### Step 1: Installation
In order to connect, run following in your node js app directory. 
##### Command: 
As shown here, the expected dependency is required to be installed on package.json file. 
`npm pg install`
##### Resault: 

```json
{
  "name": "101",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "pg": "^7.12.1"
  }
}
```

#### Step 2: Connection
In this example, [pool]( https://node-postgres.com/api/pool)  of connection is being used to establish connection for upcoming quries. 
Every connection requires credentials. In summary, during runtime as well as during complication credentials are being provided.
- Pre-Runtime: 
- Runtime:
The essential components are the follwoing. These could be located in a config file as pervious example, or set per each client or per each pool differently during runtime. 

```js 
const { Pool, Client } = require('pg')
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  port: '5432',
  ssl: true,
  max: 20,
  min: 4,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})
```

### Connections to unix sockets
```js
const { Client } = require('pg');
client = new Client({
    host: '/cloudsql/myproject:zone:mydb'
    username: 'username',
    password: 'password',
    database: 'database_name',
});
```

### Connection with url
```js
const { Pool, Client } = require('pg')
const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
const pool = new Pool({
  connectionString: connectionString,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  connectionString: connectionString,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})
```


### Clients with a promise

pg-pool supports a fully promise-based api for acquiring clients

```js
var pool = new Pool()
pool.connect().then(client => {
  client.query('select $1::text as name', ['pg-pool']).then(res => {
    client.release()
    console.log('hello from', res.rows[0].name)
  })
  .catch(e => {
    client.release()
    console.error('query error', e.message, e.stack)
  })
})
```

### Async/await

this ends up looking much nicer if you're using [co](https://github.com/tj/co) or async/await:

```js
// with async/await
(async () => {
  var pool = new Pool()
  var client = await pool.connect()
  try {
    var result = await client.query('select $1::text as name', ['brianc'])
    console.log('hello from', result.rows[0])
  } finally {
    client.release()
  }
})().catch(e => console.error(e.message, e.stack))
```

### Shut down

When you are finished with the pool if all the clients are idle the pool will close them after `config.idleTimeoutMillis` and your app
will shutdown gracefully.  If you don't want to wait for the timeout you can end the pool as follows:

```js
var pool = new Pool()
var client = await pool.connect()
console.log(await client.query('select now()'))
client.release()
await pool.end()
```

### Pool Vs Client
- client.connect();
This method is in addition to pool. Pool has follwoing steps steps: new, query end. Whereas, client has: new, Connect, query and end. Thus, per each query, the driver opens and closes one connection to DB during client query. 